import { Button, Chip, FormControl, Input, InputLabel, MenuItem, Select, Tab, Tabs } from "@mui/material"
import { formatCurrency } from "../../utils/number"
import { styleCell, styleEmptyCell, styleHeader } from "../../utils/table"
import BaseLayout from "../BaseLayout/BaseLayout"
import { Link } from "react-router-dom"

const Wallets = () => {
  const cellOverride = `${styleCell} !text-xs bg-slate-100`

  return (
    <BaseLayout title="Wallet Administration">
      <div className="w-full flex justify-between mb-2">
        <div>
          <Tabs value={0}>
            <Tab label="£GBP" />
            <Tab label="€EUR" />
            <Tab label="$USD" />
            <Tab label="₣CHF" />
          </Tabs>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 mb-6">
          <Chip label="GHL" variant="filled" size="large" />
          <Chip label="GEUAB" color="primary" size="large" variant="outlined" />
        </div>
      </div>

      <h2>Transfer Funds</h2>
      <div className="grid grid-cols-5 gap-5 mt-8 mb-8">
        <FormControl>
          <InputLabel id="report-source">Account From</InputLabel>
          <Select id="select-source" label="Account From">
            <MenuItem value={0}>GHL | Recon | £GBP</MenuItem>
            <MenuItem value={0}>GHL | Recon | €EUR</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="report-product">Account To</InputLabel>
          <Select id="select-product" label="Account To">
            <MenuItem value={0}>HMRC</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="report-destination">Currency</InputLabel>
          <Select id="select-destination" labelId="report-destination" label="Currency">
            <MenuItem value={0}>£GBP</MenuItem>
            <MenuItem value={1}>€EUR</MenuItem>
            <MenuItem value={2}>$USD</MenuItem>
            <MenuItem value={3}>₣CHF</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="report-weight">Amount</InputLabel>
          <Input type="number" />
        </FormControl>

        <Button variant="contained" size="large">Transfer Funds</Button>
      </div>

      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className={styleHeader(cellOverride)} colSpan={6}>Current Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={styleHeader(cellOverride)}>Recon</th>
            <td className={cellOverride}>{formatCurrency(1000)}</td>
            <th className={styleHeader(cellOverride)}>Revenue</th>
            <td className={cellOverride}>{formatCurrency(118.88)}</td>
            <th className={styleHeader(cellOverride)}>Tax</th>
            <td className={cellOverride}>{formatCurrency(50.22)}</td>
          </tr>
          </tbody>
      </table>

      <div className="my-8">
        <Tabs value={0}>
          <Tab label="Recon | £GBP" />
          <Tab label="Revenue | £GBP" />
          <Tab label="Tax | £GBP" />
        </Tabs>
      </div>

      <table className="w-full" cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th className={styleHeader(cellOverride)}>GHL | Recon | £GBP</th>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={`${cellOverride} text-right`}>
                  <Link to='/ledger/123456789' className="block text-blue-700 font-bold hover:underline">
                    View Ledger <i className="fa fa-arrow-right ml-2" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell(cellOverride)}></td>
                <td className={styleEmptyCell(cellOverride)}></td>
                <td className={styleEmptyCell(cellOverride)}></td>
                <td className={styleEmptyCell(cellOverride)}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Current Balance</span></td>
                <td className={cellOverride}>{formatCurrency(0.000)}</td>
              </tr>
              <tr><td></td><td></td></tr>
              <tr>
                <th className={styleHeader(cellOverride)}>Transaction Date</th>
                <th className={styleHeader(cellOverride)}>Transaction Description</th>
                <th className={styleHeader(cellOverride)}>Debit</th>
                <th className={styleHeader(cellOverride)}>Credit</th>
                <th className={styleHeader(cellOverride)}>Running Balance</th>
                <td className={cellOverride}></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cellOverride}>04/11/2023</td>
                <td className={cellOverride}>Recon Ref#123 (Day 3)</td>
                <td className={cellOverride}>{formatCurrency(1)}</td>
                <td className={cellOverride}>{formatCurrency(0)}</td>
                <td className={cellOverride}>{formatCurrency(0)}</td>
                <td className={cellOverride}></td>
              </tr>
              <tr>
                <td className={cellOverride}>04/11/2023</td>
                <td className={cellOverride}>Transfer to GHL | Zurich | Brinks</td>
                <td className={cellOverride}>{formatCurrency(8)}</td>
                <td className={cellOverride}>{formatCurrency(0)}</td>
                <td className={cellOverride}>{formatCurrency(1)}</td>
                <td className={cellOverride}></td>
              </tr>
              <tr>
                <td className={cellOverride}>04/11/2023</td>
                <td className={cellOverride}>Recon Ref#123 (Day 2)</td>
                <td className={cellOverride}>{formatCurrency(0)}</td>
                <td className={cellOverride}>{formatCurrency(2)}</td>
                <td className={cellOverride}>{formatCurrency(9)}</td>
                <td className={cellOverride}></td>
              </tr>
              <tr>
                <td className={cellOverride}>03/11/2023</td>
                <td className={cellOverride}>Recon Ref#123 (Day 1)</td>
                <td className={cellOverride}>{formatCurrency(0)}</td>
                <td className={cellOverride}>{formatCurrency(7)}</td>
                <td className={cellOverride}>{formatCurrency(7)}</td>
                <td className={cellOverride}></td>
              </tr>
              <tr>
                <td className={styleEmptyCell(cellOverride)}></td>
                <td className={styleEmptyCell(cellOverride)}></td>
                <td className={styleEmptyCell(cellOverride)}></td>
                <td className={styleEmptyCell(cellOverride)}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Opening Balance</span></td>
                <td className={cellOverride}>{formatCurrency(0.000)}</td>
              </tr>
              </tbody>
          </table>
    </BaseLayout>
  )
}

export default Wallets