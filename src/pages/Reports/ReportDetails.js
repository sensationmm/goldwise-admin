import { useEffect, useReducer, useState } from "react";
import DataTable from "../../components/atoms/DataTable/DataTable";
import MockTrades from "../../mocks/reconciliation.json"
import { Button, FormControl, Input, InputLabel, Tab, Tabs } from "@mui/material";
import BaseLayout from "../BaseLayout/BaseLayout";
import { styleCell, styleHeader, styleTotal } from "../../utils/table";
import { formatCurrency } from "../../utils/formatting";

const ReportDetails = () => {
  const [paymentsView, setPaymentsView] = useState(0)

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
  const { trades, tradesTypes } = state;

  useEffect(() => {
    let trades = [];
    let tradesTypes = [];

    Object.keys(MockTrades.dataTypes).forEach((type) => tradesTypes.push(MockTrades.dataTypes[type]))

    MockTrades.data.forEach((record) => {
      const processed = Object.keys(record).map((param) => record[param])
      trades.push(processed)
    })

    setState({ trades, tradesTypes });

  }, []);

  const cellOverride = `${styleCell} pr-12`

  return (
    <BaseLayout
      title="Reconciliation Report Ref: 123456789"
      action={
        <div className="grid grid-cols-2 gap-4">
          <Button variant="contained" color="secondary" size="large" disabled>Export PDF</Button>
          <Button variant="contained" color="secondary" size="large" disabled>Export XLS</Button>
        </div>
      }
      hasBack
    >
      <div className="grid grid-cols-6 gap-5 mt-8 mb-8">
        <FormControl>
          <InputLabel id="report-weight">Recon Date</InputLabel>
          <Input labelId="report-weight" value="01 Jan 2023" />
        </FormControl>

        <FormControl>
          <InputLabel id="report-weight">Settlement Due Date</InputLabel>
          <Input labelId="report-weight" value="01 Jan 2023" />
        </FormControl>

        <FormControl>
          <InputLabel id="report-weight">Entity</InputLabel>
          <Input labelId="report-weight" value="All" />
        </FormControl>

        <FormControl>
          <InputLabel id="report-weight">Currency</InputLabel>
          <Input labelId="report-weight" value="£GBP" />
        </FormControl>

        <FormControl>
          <InputLabel id="report-weight">Status</InputLabel>
          <Input labelId="report-weight" className="text-red-600" value="Pending" />
        </FormControl>
      </div>

      <div className="flex justify-between items-end">
        <Tabs value={paymentsView} onChange={(_, newValue) => setPaymentsView(newValue)}>
          <Tab label="Currency Payments" />
          <Tab label="Metals Payments" />
        </Tabs>
        <div className="text-sm"><span className="font-bold">995</span> Trades Submitted</div>
      </div>

      
      <div className={'pb-12 border-b-2 border-slate-400 mb-12'}>
        {paymentsView === 0 ? <div className="p-4 bg-slate-100 mt-4 rounded overflow-scroll">
          <h2 className="mb-4">Selected Payments For Period</h2>

          <table className="w-full">
            <tbody>
              <tr>
                <th className={styleHeader()}></th>
                <th className={styleHeader()}>StoneX</th>
                <th className={styleHeader()}>Owed Customer</th>
                <th className={styleHeader()}>Tax GHL</th>
                <th className={styleHeader()}>Tax GEUAB</th>
                <th className={styleHeader()}>Spead GHL</th>
                <th className={styleHeader()}>Revenue GHL</th>
                <th className={styleHeader()}>Revenue GEUAB</th>
                <th className={styleHeader()}>TOTAL</th>
              </tr>
              <tr>
                <th className={styleHeader()}>Amount Owed</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
                <td className={styleCell}>{formatCurrency(4232.74)}</td>
                <td className={styleCell}>{formatCurrency(101.06)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(-58.53)}</td>
                <td className={styleCell}>{formatCurrency(505.3)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(21401.75)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <th className={styleHeader()}>Available in Recon</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
              </tr>
              <tr>
                <th className={styleHeader()}>Total eMoney inc. Ousted Buy/Sells</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <th className={styleHeader()}>Amount Payable at Settlement</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
                <td className={styleCell}>{formatCurrency(4232.74)}</td>
                <td className={styleCell}>{formatCurrency(101.06)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(-58.53)}</td>
                <td className={styleCell}>{formatCurrency(505.3)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(21401.75)}</td>
              </tr>
              <tr>
                <th className={styleHeader()}>Shortfall Amount</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
                <td className={styleCell}>{formatCurrency(4232.74)}</td>
                <td className={styleCell}>{formatCurrency(101.06)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(-58.53)}</td>
                <td className={styleCell}>{formatCurrency(505.3)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(21401.75)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <th className={styleHeader()}>Critical Shortfall Payment Required</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
                <th colSpan={2} className={styleHeader()}>Of Which IOU</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
              </tr>
              <tr>
                <th className={styleHeader()}>Additional Shortfall</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
              </tr>
              <tr>
                <th className={styleHeader()}>Customer Owed Money Buys NOT in Recon</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
              </tr>
              <tr>
                <th className={styleHeader()}>Losses to be absorbed by GHL (-ve Spread)</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
              </tr>
            </tbody>
          </table>
        </div> : <div className="p-4 bg-slate-100 mt-4 rounded overflow-scroll">
          <h2 className="mb-4">Metal Payments Table</h2>

          <table>
            <tr>
              <th></th>
              <th className={styleHeader(cellOverride)}>Gold</th>
              <th className={styleHeader(cellOverride)}>Silver</th>
              <th className={styleHeader(cellOverride)}>Platinum</th>
              <th className={styleHeader(cellOverride)}>Palladium</th>
            </tr>
            <tr>
              <th className={styleHeader(cellOverride)}>GHL | London | StoneX</th>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
            </tr>
            <tr>
              <th className={styleHeader(cellOverride)}>GHL | Zurich | StoneX</th>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
            </tr>
            <tr>
              <th className={styleHeader(cellOverride)}>GEUAB | London | StoneX</th>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
            </tr>
            <tr>
              <th className={styleHeader(cellOverride)}>GEUAB | Zurich | StoneX</th>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
              <td className={styleCell}>{formatCurrency(0)}</td>
            </tr>
            <tr>
              <th className={`${styleTotal(cellOverride)} ${styleHeader(cellOverride)}`}>Goldwise Total</th>
              <td className={styleTotal(cellOverride)}>{formatCurrency(0)}</td>
              <td className={styleTotal(cellOverride)}>{formatCurrency(0)}</td>
              <td className={styleTotal(cellOverride)}>{formatCurrency(0)}</td>
              <td className={styleTotal(cellOverride)}>{formatCurrency(0)}</td>
            </tr>
          </table>

        </div>}

        <div className="p-4 bg-slate-100 mt-4 rounded overflow-scroll">
          <h3 className="mb-4">Selected Totals</h3>
          
          <table className="w-full">
            <tbody>
              <tr>
                <th></th>
                <th className={styleHeader()}>Metal Cost</th>
                <th className={styleHeader()}>Integral Spread</th>
                <th className={styleHeader()}>EHT Spread</th>
                <th className={styleHeader()}>Total Spread</th>
                <th className={styleHeader()}>Product Amount</th>
                <th className={styleHeader()}>Fees</th>
                <th className={styleHeader()}>Tax</th>
                <th className={styleHeader()}>Customer Total</th>
              </tr>
              <tr>
                <th className={styleHeader()}>Buys in Recon Wallet</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
                <td className={styleCell}>{formatCurrency(4232.74)}</td>
                <td className={styleCell}>{formatCurrency(101.06)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(-58.53)}</td>
                <td className={styleCell}>{formatCurrency(505.3)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(21401.75)}</td>
              </tr>
              <tr>
                <th className={styleHeader()}>Buys NOT in Recon Wallet</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
                <td className={styleCell}>{formatCurrency(4232.74)}</td>
                <td className={styleCell}>{formatCurrency(101.06)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(-58.53)}</td>
                <td className={styleCell}>{formatCurrency(505.3)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(21401.75)}</td>
              </tr>
              <tr>
                <th className={styleHeader()}>Sells Owed</th>
                <td className={styleCell}>{formatCurrency(16621.17)}</td>
                <td className={styleCell}>{formatCurrency(4232.74)}</td>
                <td className={styleCell}>{formatCurrency(101.06)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(-58.53)}</td>
                <td className={styleCell}>{formatCurrency(505.3)}</td>
                <td className={styleCell}>{formatCurrency(0)}</td>
                <td className={styleCell}>{formatCurrency(21401.75)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleTotal()}>{formatCurrency(16621.17)}</td>
                <td className={styleTotal()}></td>
                <td className={styleTotal()}></td>
                <td className={styleTotal()}>{formatCurrency(-58.53)}</td>
                <td className={styleTotal()}>{formatCurrency(16621.17)}</td>
                <td className={styleTotal()}>{formatCurrency(505.3)}</td>
                <td className={styleTotal()}>{formatCurrency(101.06)}</td>
                <td className={styleTotal()}>{formatCurrency(21401.75)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className={` justify-between mb-2`}>
        <h3 className="mb-1">Executed Trades</h3>
        <div className="text-sm">
          <span className="pr-1"><span className="font-bold">{trades.length}</span> Trades</span>
          |<span className="font-bold px-1">995</span>  <span className="text-green-400 pr-1">Confirmed</span>
          |<span className="font-bold pl-1">3</span> <span className="text-orange-400 pr-1">With Error</span>
          |<span className="font-bold pl-1">2</span> <span className="text-red-600 pr-1">Not Confirmed</span>
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
      />
    </BaseLayout>
  );
};

export default ReportDetails;
