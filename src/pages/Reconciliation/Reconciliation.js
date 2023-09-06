import { useEffect, useReducer, useState } from "react";
import DataTable from "../../components/atoms/DataTable/DataTable";
import MockData from "../../mocks/reconciliation.json"
import { DatePicker } from "@mui/x-date-pickers";
import { Button, FormControl, InputLabel, MenuItem, Select, Tab, Tabs } from "@mui/material";
import { Currencies, Entities } from "../../helper/constants";
import SelectedPayments from "./SelectedPayments";
import SelectedTotals from "./SelectedTotals";
import MetalPayments from "./MetalPayments";
import BaseLayout from "../BaseLayout/BaseLayout";

const Reconciliation = () => {
  const [reportType, setReportType] = useState(0)
  const [paymentsView, setPaymentsView] = useState(0)
  const [reportFrom, setReportFrom] = useState(null)
  const [reportTo, setReportTo] = useState(null)
  const [reportEntity, setReportEntity] = useState(0)
  const [reportCurrency, setReportCurrency] = useState('GBP')
  const [state, setState] = useReducer(
    (preState, newState) => ({ ...preState, ...newState }),
    {
      rows: [],
      dataTypes: [],
    }
  );
  const { rows, dataTypes } = state;

  useEffect(() => {
    let data = [];
    let dataTypes = [];

     Object.keys(MockData.dataTypes).forEach((type) => dataTypes.push(MockData.dataTypes[type]))

    MockData.data.forEach((record) => {
      const processed = Object.keys(record).map((param) => record[param])
      data.push(processed)
    })

    setState({ rows: data, dataTypes });
  }, []);

  const resetForm = () => {
    setReportFrom(null)
    setReportTo(null)
    setReportCurrency('GBP')
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
        <DatePicker label="Date From" value={reportFrom} onChange={setReportFrom} />

        <DatePicker label="Date To" value={reportTo} onChange={setReportTo} />

        <FormControl>
          <InputLabel id="report-entity">Entity</InputLabel>
          <Select
            labelId="report-entity"
            label="Entity"
            value={reportEntity}
            onChange={e => setReportEntity(e.target.value)}
          >
            <MenuItem value={0}>All</MenuItem>
            {Object.keys(Entities).map((ent, count) => <MenuItem key={`ent-${count}`} value={ent}>{Entities[ent]}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="report-currency">Currency</InputLabel>
          <Select
            labelId="report-currency"
            label="Currency"
            value={reportCurrency}
            onChange={e => setReportCurrency(e.target.value)}
          >
            {Object.keys(Currencies).map((cur, count) => <MenuItem key={`cur-${count}`} value={cur}>{Currencies[cur]}</MenuItem>)}
          </Select>
        </FormControl>

        <Button variant="contained" color="secondary">Search</Button>

        <Button variant="outlined" onClick={resetForm} color="secondary">Reset</Button>
      </div>

      <div className="flex justify-between items-center">
        <Tabs value={paymentsView} onChange={(_, newValue) => setPaymentsView(newValue)}>
          <Tab label="Currency Payments" />
          <Tab label="Metals Payments" />
        </Tabs>
        <div className="text-sm"><span className="font-bold">Results from:</span> 03 JAN 2023 10:00:02 GMT</div>
      </div>

      {paymentsView === 0 ? <SelectedPayments /> : <MetalPayments />}

      <SelectedTotals />

      
      <div className="flex justify-between pt-12 border-t-2 border-slate-400 mt-4 mb-1">
        <h3>Executed Trades</h3>
        <div className="text-sm">
          <span className="font-bold">1000</span> Trades Selected | 
          <span className="font-bold pl-1">998</span>  <span className="text-green-400">Confirmed</span> | 
          <span className="font-bold pl-1">2</span> <span className="text-red-600">Not Confirmed</span>
        </div>
      </div>

      <div className="w-auto h-[100%] relative mx-auto rounded-sm border-gray-200 overflow-scroll border px-2">
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
          data={rows} 
          dataTypes={dataTypes}
          excludeFilters={['ID']}
        />
      </div>
    </BaseLayout>
  );
};

export default Reconciliation;
