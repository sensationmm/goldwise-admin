import { useEffect, useReducer, useState } from "react";
import DataTable from "../../components/atoms/DataTable/DataTable";
import { DatePicker } from "@mui/x-date-pickers";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, Typography } from "@mui/material";
import SelectedPayments from "./Reports/SelectedPayments";
import SelectedTotals from "./Reports/SelectedTotals";
import MetalPayments from "./Reports/MetalPayments";
import BaseLayout from "../BaseLayout/BaseLayout";
import reconciliationService from "../../services/reconciliation.service";
import ordersService from "../../services/orders.service";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../reducers/loaderSlice.reducer";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import TradesDataStructure from '../../dataStructures/trades.json';
import OrdersDataStructure from '../../dataStructures/orders.json';
import { customPalette } from "../../theme";
import HistoricReports from "./Reports/HistoricReports";

const Reconciliation = () => {
  const dispatch = useDispatch()
  const [reportType, setReportType] = useState(0)
  const [paymentsView, setPaymentsView] = useState(0)

  const [reportFrom, setReportFrom] = useState(null)
  const [reportTo, setReportTo] = useState(null)
  const [reportEntity, setReportEntity] = useState('')
  const [reportCurrency, setReportCurrency] = useState('')
  const [batchId, setBatchId] = useState(0)

  const [entitiesList, setEntitiesList] = useState([])
  const [currenciesList, setCurrenciesList] = useState([])

  const [selectedTrades, setSelectedTrades] = useState([])
  const [tradeIDs, setTradeIDs] = useState([])
  const [tradesConfirmed, setTradesConfirmed] = useState(0)
  const [tradesWithError, setTradesWithError] = useState(0)
  const [tradesNotConfirmed, setTradesNotConfirmed] = useState(0)

  const [showConfirmReport, setShowConfirmReport] = useState(false)
  const [showReportError, setShowReportError] = useState(false)
  const [reportError, setReportError] = useState('')
  const [showReportConfirmed, setShowReportConfirmed] = useState(false)

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
  const { trades, orders, payments } = state;

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
          setTradeIDs(recIDs)
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
      setBatchId(response.batchId);
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

  const generateReport = async () => {
    dispatch(showLoader())

    try {
      const report = await reconciliationService.addTradeToReport(batchId, selectedTrades);
      setState({ payments: report });
    } catch (e) {
      //todo: display error if happen
      // setState({ payments: [] });
      console.log(e)
    } finally {
      dispatch(hideLoader())
    }
  }

  const submitReport = async () => {
    dispatch(showLoader())
    setShowConfirmReport(false)

    try {
      await reconciliationService.submitReport(batchId);
      setShowReportConfirmed(true)
      resetForm()
      setState({ payments: [], trades: [] })
    } catch (e) {
      setReportError(e)
      setShowReportError(true)
    } finally {
      dispatch(hideLoader())
    }
  }

  const handleSelectTrade = (trade) => {
    const hidden = selectedTrades.slice()

    if(!selectedTrades.includes(trade)) {
      hidden.push(trade)
    } else {
      hidden.splice(selectedTrades.indexOf(trade), 1)
    }

    setSelectedTrades(hidden)
  }

  const handleSelectAllTrades = (select) => {
    if(select) {
      setSelectedTrades(tradeIDs)
    } else {
      setSelectedTrades([])
    }
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

  useEffect(() => {
    if(selectedTrades.length > 0 || (selectedTrades.length === 0 && Object.keys(payments).length > 0)) {
      generateReport()
    }
  }, [selectedTrades])

  const resetForm = () => {
    setReportFrom(null)
    setReportTo(null)
    setReportCurrency(null)
    setReportEntity(null) 
  }

  return (
    <BaseLayout
      title="Reconciliation Reports"
      action={
        reportType === 0 && <div className="grid grid-cols-2 gap-4">
          <Button variant="contained" color="secondary" size="large" disabled>STP Request</Button>
          <Button
            variant="contained"
            size="large"
            disabled={Object.keys(payments).length === 0}
            onClick={() => setShowConfirmReport(true)}
          >Submit Report</Button>
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


      {reportType === 1 
        ? <HistoricReports /> 
        : <>
          {Object.keys(payments).length > 0 && trades.length > 0 && reportType === 0 && <>
            <div className="flex justify-between items-end">
              <Tabs value={paymentsView} onChange={(_, newValue) => setPaymentsView(newValue)}>
                <Tab label="Currency Payments" />
                <Tab label="Metals Payments" />
              </Tabs>
              <div className="text-sm"><span className="font-bold">Results from:</span> {dayjs(reportFrom).format('D MMM YYYY')} - {dayjs(reportTo).format('D MMM YYYY')}</div>
            </div>

            <div className={'pb-12 border-b-2 border-slate-400 mb-12'}>
              {paymentsView === 0
                ? <SelectedPayments
                    data={{
                      amountOwed: payments.selectedPayments,
                      availableInRecon: {},
                      totalEMoney: {},
                      amountPayable: payments.payableAtSettlement,
                      shortfallAmount: payments.shortfallAmounts,
                      criticalShortfall: {},
                      additionalShortfall: {},
                      customerOwed: {},
                      losses: {},
                    }} 
                  /> 
                : <MetalPayments data={payments.metalPayments} />
              }

              <SelectedTotals data={payments.selectedTotals} />
            </div>
          </>}
          
          {trades.length > 0 && <>
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
              selected={selectedTrades}
              onSelect={handleSelectTrade}
              onSelectAll={handleSelectAllTrades}
            />
          </>}
          
          {orders.length > 0 && <>
            <div className={`flex justify-between mb-2 mt-12 items-center`}>
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

          <Dialog open={showConfirmReport} onClose={setShowConfirmReport}>
            <DialogTitle color={customPalette.palette.error.main}>Warning!</DialogTitle>
            <DialogContent>
              <Typography>You are about to submit a report that cannot be undone once submitted.</Typography>
              <Typography>Please confirm or Cancel the action</Typography>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="secondary" size="large" onClick={() => setShowConfirmReport(false)}>Cancel</Button>
              <Button variant="contained" color="confirm" size="large" onClick={submitReport}>Confirm</Button>
            </DialogActions>
          </Dialog>

          <Dialog open={showReportError} onClose={setShowReportError}>
            <DialogTitle>
              <div className="flex justify-center items-center border-4 border-red-600 rounded-full w-[50px] h-[50px] mb-[20px]">
                <i className={`fa text-3xl fa-exclamation text-red-600`} aria-hidden="true" />
              </div>
              Error Submitting Report
            </DialogTitle>
            <DialogContent>
              <Typography>{reportError}</Typography>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="secondary" size="large" onClick={() => setShowReportError(false)}>Cancel</Button>
              <Button variant="contained" color="confirm" size="large" onClick={() => {}}>Try Again</Button>
            </DialogActions>
          </Dialog>

          <Dialog open={showReportConfirmed} onClose={setShowReportConfirmed}>
            <DialogTitle>
              <div className="flex justify-center items-center border-4 border-green-500 rounded-full w-[50px] h-[50px] mb-[20px]">
                <i className={`fa text-3xl fa-check text-green-500`} aria-hidden="true" />
              </div>
              Report Submitted
            </DialogTitle>
            <DialogContent>
              <Typography>The Recon report has been successfully submitted.</Typography>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="secondary" size="large" onClick={() => setShowReportConfirmed(false)}>Close</Button>
            </DialogActions>
          </Dialog>
        </>
      }
    </BaseLayout>
  );
};

export default Reconciliation;
