import { useEffect, useReducer, useState } from "react";
import DataTable from "../../components/atoms/DataTable/DataTable";
import { DatePicker } from "@mui/x-date-pickers";
import { Button,  FormControl, InputLabel, MenuItem, Select, Tab, Tabs } from "@mui/material";
import BaseLayout from "../BaseLayout/BaseLayout";
import reconciliationService from "../../services/reconciliation.service";
import ordersService from "../../services/orders.service";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../reducers/loaderSlice.reducer";
import { Link } from "react-router-dom";
import TradesDataStructure from '../../dataStructures/trades.json';
import OrdersDataStructure from '../../dataStructures/orders.json';
import SearchField from "../../components/atoms/SearchField/SearchField";
import Modal from "../../components/atoms/Modal";

const Orders = () => {
  const dispatch = useDispatch()
  const [view, setView] = useState(0)
  const [exportDataModal, setExportDataModal] = useState(false)

  const [reportFrom, setReportFrom] = useState(null)
  const [reportTo, setReportTo] = useState(null)
  const [reportEntity, setReportEntity] = useState('')
  const [reportCurrency, setReportCurrency] = useState('')

  const [entitiesList, setEntitiesList] = useState([])
  const [currenciesList, setCurrenciesList] = useState([])

  const [tradesConfirmed, setTradesConfirmed] = useState(0)
  const [tradesWithError, setTradesWithError] = useState(0)
  const [tradesNotConfirmed, setTradesNotConfirmed] = useState(0)

  const [state, setState] = useReducer(
    (preState, newState) => ({ ...preState, ...newState }),
    {
      trades: [],
      tradesTypes: [],
      orders: [],
      ordersTypes: [],
      payments: []
    }
  );
  const { trades, orders } = state;

  const getEntities = async () => {
    try {
      dispatch(showLoader())
      const entities = await reconciliationService.getEntities();
      setEntitiesList(entities.data.response.map(ent => ({ value: ent.idCompanyGuid, label: ent.companyName})));
    } catch (e) {
      //todo: display error if happen
      console.log(e)
    } finally {
      dispatch(hideLoader())
    }
  }

  const getCurrencies = async () => {
    try {
      dispatch(showLoader())
      const currencies = await reconciliationService.getCurrencies();
      setCurrenciesList(currencies.data.response.map(curr => ({ value: curr.currencyIso3, label: `${curr.currencyName} (${curr.currencySymbol})`})));
    } catch (e) {
      //todo: display error if happen
      console.log(e)
    } finally {
      dispatch(hideLoader())
    }
  }

  const fetchTrades = async () => {
    setState({ trades: [] });
    dispatch(showLoader())

    try {
      const response = await reconciliationService.generateReport(reportFrom, reportTo, reportEntity !== 'all' ? reportEntity : '', reportCurrency);
      const reconciliationRecords = response.report;
      
      let confirmed = 0;
      let notConfirmed = 0;
      let withError = 0;
      let recIDs = [];

      const tradesStore = reconciliationRecords.map((rec, recCount) => {
        if(rec.stpConfirmed === 1) {
          confirmed++;
        } else if(rec.stpConfirmed === 0) {
          notConfirmed++;
        } else {
          withError++
        }
        rec.itemID && recIDs.push(rec.itemID)

        if(recCount + 1 === reconciliationRecords.length) {
          setTradesConfirmed(confirmed)
          setTradesNotConfirmed(notConfirmed)
          setTradesWithError(withError)
        }

        return Object.keys(TradesDataStructure).map((key) => {
          if(TradesDataStructure[key].dataType === 'tradeCaptureReport') {
            if(rec.itemID) {
              return (
                <Link 
                  className="underline hover:no-underline" 
                  to={`/orders/${rec.itemID}/${rec.idPendingOrderGuid}`} 
                >
                  View Report
                </Link>
              )
            } else {
              return 'Report Pending'
            }
          }
          return rec[key]
        })
      })
      setState({ trades: tradesStore });
    } catch (e) {
      //todo: display error if happen
      console.log(e)
    } finally {
      dispatch(hideLoader())
    }
  }

  const fetchOrders = async () => {
    dispatch(showLoader())

    try {
      const reconciliationRecords = await ordersService.currentOrders(reportFrom, reportEntity !== 'all' ? reportEntity : '', reportCurrency);
      
      const ordersStore = reconciliationRecords.map((rec, recCount) => {
        return Object.keys(OrdersDataStructure).map((key) => {
          // TODO: link for report - restore once param values confirmed
          // if(OrdersDataStructure[key].dataType === 'link') {
          //   return <Link className="underline hover:no-underline" to={`/orders/${rec[key]}`}>{rec[key]}</Link>
          // }
          return rec[key]
        })
      })
      setState({ orders: ordersStore });
    } catch (e) {
      //todo: display error if happen
      console.log(e)
    } finally {
      dispatch(hideLoader())
    }
  }

  const handleSearch = () => {
    fetchTrades()
    fetchOrders()
  }

  useEffect(() => {
    getEntities()
    getCurrencies()
  }, []);

  useEffect(() => {
    if(!reportTo) {
      setReportTo(reportFrom);
    }
  },[reportFrom]);

  useEffect(() => {
    if(!reportFrom) {
      setReportFrom(reportTo);
    }
  },[reportTo]);

  const resetForm = () => {
    setReportFrom(null)
    setReportTo(null)
    setReportCurrency(null)
    setReportEntity(null) 
  }

  return (
    <BaseLayout
      title="Orders"
      action={
          <Button
            variant="contained"
            size="large"
            onClick={() => setExportDataModal(true)}
          >Export Data</Button>
      }
    >
      <div className="flex justify-between">
        <Tabs value={view} onChange={(_, newValue) => setView(newValue)}>
          <Tab label="Orders" />
          <Tab label="Trades" />
        </Tabs>
        <div>
          <SearchField placeholder="Enter Customer's Name or Email" />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-5 mt-8 mb-8">
        <DatePicker label="Date From" value={reportFrom} onChange={setReportFrom} format="DD/MM/YYYY" maxDate={reportTo} />

        <DatePicker label="Date To" value={reportTo} onChange={setReportTo} format="DD/MM/YYYY" minDate={reportFrom} />

        <FormControl>
          <InputLabel id="report-entity" disabled={entitiesList.length === 0}>Entity</InputLabel>
          <Select
            id="select-entity"
            labelId="report-entity"
            label="Entity"
            value={entitiesList.length > 0 ? reportEntity : ''}
            onChange={e => setReportEntity(e.target.value)}
            disabled={entitiesList.length === 0}
          >
            <MenuItem value={'all'}>All</MenuItem>
            {entitiesList.map((ent, count) => <MenuItem key={`select-entity-${count}`} value={ent.value}>{ent.label}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="report-currency" disabled={currenciesList.length === 0}>Currency</InputLabel>
          <Select
            id="select-currency"
            labelId="report-currency"
            label="Currency"
            value={currenciesList.length > 0 ? reportCurrency : ''}
            onChange={e => setReportCurrency(e.target.value)}
            disabled={currenciesList.length === 0}
          >
            {currenciesList.map((curr, count) => <MenuItem key={`select-currency-${count}`} value={curr.value}>{curr.label}</MenuItem>)}
          </Select>
        </FormControl>

        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleSearch}
          disabled = {reportFrom === null || reportTo === null}
        >
          Search
        </Button>

        <Button variant="outlined" onClick={resetForm} color="secondary">Reset</Button>
      </div>
          
        {view === 1 && trades.length > 0 && <>
          <div className={` justify-between mb-2`}>
            <h3 className="mb-1">Executed Trades</h3>
            <div className="text-sm">
              <span className="pr-1"><span className="font-bold">{trades.length}</span> Trades</span>
              | <span className="font-bold px-1">{tradesConfirmed}</span>  <span className="text-green-400">Confirmed</span>
              {tradesWithError > 0 && <> |<span className="font-bold pl-1">{tradesWithError}</span> <span className="text-orange-400">With Error</span></>}
              {tradesNotConfirmed > 0 && <> |<span className="font-bold pl-1">{tradesNotConfirmed}</span> <span className="text-red-600">Not Confirmed</span></>}
            </div>
          </div>

          <DataTable
            headers={Object.keys(TradesDataStructure).map(res => TradesDataStructure[res].label)}
            data={trades} 
            dataTypes={Object.keys(TradesDataStructure).map(res => TradesDataStructure[res].dataType)}
            excludeFilters={['ID', 'Order Type']}
            excludeSort={['ID']}
            excludeLiteralFilter={['Internal Trade No', '(Order Request / Pending) ClOrderID', 'Trade Capture Report']}
          />
        </>}
          
        {view === 0 && orders.length > 0 && <>
          <div className={`flex justify-between mb-2 items-center`}>
            <div>
              <h3 className="mb-1">Orders Placed</h3>
              <span className="text-sm pr-1 mr-4"><span className="font-bold">{orders.length}</span> Orders</span>
            </div>

            <Button color="text" variant="outlined" startIcon={<i className={`fa text-sm fa-refresh`} aria-hidden="true" />} onClick={fetchOrders}>Refresh</Button>
          </div>

          <DataTable
            headers={Object.keys(OrdersDataStructure).map(res => OrdersDataStructure[res].label)}
            data={orders}
            dataTypes={Object.keys(OrdersDataStructure).map(res => OrdersDataStructure[res].dataType)}
            maxPerPage={8}
            excludeColumns={['ID']}
          />
        </>}
              
        {exportDataModal &&
          <Modal hidePopup={() => setExportDataModal(false)} title="Export Data" confirmLabel={'Export'}>
            Coming Soon
          </Modal>
        }
    </BaseLayout>
  );
};

export default Orders;
