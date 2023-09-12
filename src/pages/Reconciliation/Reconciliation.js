import { useEffect, useReducer, useState } from "react";
import DataTable from "../../components/atoms/DataTable/DataTable";
import MockTrades from "../../mocks/reconciliation.json"
import MockOrders from "../../mocks/orders.json"
import { DatePicker } from "@mui/x-date-pickers";
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Tab, Tabs } from "@mui/material";
import SelectedPayments from "./SelectedPayments";
import SelectedTotals from "./SelectedTotals";
import MetalPayments from "./MetalPayments";
import BaseLayout from "../BaseLayout/BaseLayout";
import reconciliationService from "../../services/reconciliation.service";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../reducers/loaderSlice.reducer";
import { Link } from "react-router-dom";

const Reconciliation = () => {
  const dispatch = useDispatch()
  const [reportType, setReportType] = useState(0)
  const [paymentsView, setPaymentsView] = useState(0)
  const [reportFrom, setReportFrom] = useState(null)
  const [reportTo, setReportTo] = useState(null)
  const [reportEntity, setReportEntity] = useState(0)
  const [reportCurrency, setReportCurrency] = useState(0)
  const [entitiesList, setEntitiesList] = useState([])
  const [currenciesList, setCurrenciesList] = useState([])
  const [selectedTrades, setSelectedTrades] = useState([])

  const [state, setState] = useReducer(
    (preState, newState) => ({ ...preState, ...newState }),
    {
      trades: [],
      tradesTypes: [],
      orders: [],
      ordersTypes: []
    }
  );
  const { trades, tradesTypes, orders, ordersTypes } = state;

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

  const generateReport = async () => {
    try {
      dispatch(showLoader())
      await reconciliationService.generateReport(reportFrom, reportTo, reportEntity, reportCurrency);
    } catch (e) {
      //todo: display error if happen
      console.log(e)
    } finally {
      dispatch(hideLoader())
    }
  }

  const handleSelectTrade = (trade) => {
    dispatch(showLoader())

    setTimeout(() => {
      dispatch(hideLoader())

      const hidden = selectedTrades.slice()

      if(!selectedTrades.includes(trade)) {
        hidden.push(trade)
      } else {
        hidden.splice(selectedTrades.indexOf(trade), 1)
      }

      setSelectedTrades(hidden)
    }, 500)
  }

  useEffect(() => {
    let trades = [];
    let tradesTypes = [];
    let orders = [];
    let ordersTypes = [];

    Object.keys(MockTrades.dataTypes).forEach((type) => tradesTypes.push(MockTrades.dataTypes[type]))

    MockTrades.data.forEach((record) => {
      const processed = Object.keys(record).map((param) => record[param])
      trades.push(processed)
    })

    Object.keys(MockOrders.dataTypes).forEach((type) => ordersTypes.push(MockOrders.dataTypes[type]))

    MockOrders.data.forEach((record) => {
      const processed = Object.keys(record).map((param) => record[param])
      processed.push(<Link className="underline hover:no-underline" to={`/orders/${record.id}`}>View details</Link>)
      orders.push(processed)
    })

    setState({ trades, tradesTypes, orders, ordersTypes });

    getEntities()
    getCurrencies()

  }, []);

  const resetForm = () => {
    setReportFrom(null)
    setReportTo(null)
    setReportCurrency(0)
    setReportEntity(0) 
  }

  return (
    <BaseLayout
      title="Reconciliation Reports"
      action={
        <div className="grid grid-cols-2 gap-4">
          <Button variant="contained" color="secondary" size="large">STP Request</Button>
          <Button variant="contained" size="large">Submit Report</Button>
        </div>
      }
    >
      <Tabs value={reportType} onChange={(_, newValue) => setReportType(newValue)}>
        <Tab label="New Report" />
        <Tab label="Historic Reports" />
      </Tabs>

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
            <MenuItem value={0}>All</MenuItem>
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
            <MenuItem value={0}>All</MenuItem>
            {currenciesList.map((curr, count) => <MenuItem key={`select-currency-${count}`} value={curr.value}>{curr.label}</MenuItem>)}
          </Select>
        </FormControl>

        <Button 
          variant="contained" 
          color="secondary" 
          onClick={generateReport}
          disabled = {reportFrom === null || reportTo === null}
        >
          Search
        </Button>

        <Button variant="outlined" onClick={resetForm} color="secondary">Reset</Button>
      </div>

      {reportType === 0 && <>
        <div className="flex justify-between items-end">
          <Tabs value={paymentsView} onChange={(_, newValue) => setPaymentsView(newValue)}>
            <Tab label="Currency Payments" />
            <Tab label="Metals Payments" />
          </Tabs>
          <div className="text-sm"><span className="font-bold">Results from:</span> 03 JAN 2023 - 12 JAN 2023 10:00:02 GMT</div>
        </div>

        {paymentsView === 0 ? <SelectedPayments /> : <MetalPayments />}

        <SelectedTotals />
    </>}
      
      <div className={`flex justify-between mb-1 ${reportType === 0 && 'pt-12 border-t-2 border-slate-400 mt-4'}`}>
        <h3>{reportType === 0 ? 'Executed Trades' : 'Historic Reports'}</h3>
        <div className="text-sm">
          <span className="pr-1"><span className="font-bold">{selectedTrades.length}</span> Trades Selected</span>
          {selectedTrades.length > 0 &&
            <>
              | <span className="font-bold px-1">{selectedTrades.length}</span>  <span className="text-green-400">Confirmed</span>
              {/* TODO: implement confirmed count */}
              {/*  | <span className="font-bold pl-1">2</span> <span className="text-red-600">Not Confirmed</span> */}
            </>
          }
        </div>
      </div>

      <DataTable
        headers={[
          'ID',
          'GW Entity',
          'Internal Trade No',
          'Order Type',
          'Order Sub Type',
          'Trade Time',
          'Settlement Date',
          'Supplier',
          'CCY Pair',
          'Weight',
          'Actual Metal Cost',
          'Integral Spread Amount',
          'GW EHT Spread Amount',
          'Total Final Spread Amount',
          'Customer Product Amount',
          'Customer Product Price',
          'Fee',
          'Tax',
          'Customer Total',
          'E-Money in Recon Wallet',
          'STP Confirmed (B-K)',
          'Fix OrderID',
          'Fix ExecID',
          '(Order Request / Pending) ClOrderID',
          'Trade Capture Report',
          'Integral Spread',
          'Market Open Status',
          'STP Price',
        ]}
        data={trades} 
        dataTypes={tradesTypes}
        excludeFilters={['ID', 'Order Type']}
        excludeSort={['ID']}
        excludeLiteralFilter={['Internal Trade No','(Order Request / Pending) ClOrderID','Trade Capture Report']}
        selected={selectedTrades}
        onSelect={handleSelectTrade}
      />
      
      <div className={`flex justify-between mb-1 mt-12`}>
        <h3>Orders Placed</h3>
        <div className="text-sm">
          <span className="pr-1 mr-4"><span className="font-bold">{orders.length}</span> Orders</span>

          <IconButton color="text" variant="contained">
            <i className={`fa text-sm fa-refresh`} aria-hidden="true" />
          </IconButton>
        </div>
      </div>

      <DataTable
        headers={[
          'ID',
          'GW Entity',
          'Order Type',
          'Order Sub Type',
          'Order Time',
          'CCY Pair',
          'Market Open Status',
          'Weight',
          'Weight Filled',
          'Customer Product Amount',
          'Customer Product Price',
          'Fee',
          'Tax',
          'Customer Total',
          'Order Status',
          'Internal Order Request / ClOrderID',
          'Fix OrderID',
          ''
        ]}
        data={orders}
        dataTypes={ordersTypes}
        maxPerPage={8}
        excludeColumns={['ID']}
      />
    </BaseLayout>
  );
};

export default Reconciliation;
