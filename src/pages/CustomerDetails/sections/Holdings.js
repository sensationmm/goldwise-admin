import { Link } from "react-router-dom"
import { formatCurrency, formatCurrencyLabel, formatDelta } from "../../../utils/formatting"
import { styleCellDefault, styleEmptyCell, styleHeaderFilled } from "../../../utils/table"
import { Button, FormControl, MenuItem, Select } from "@mui/material"
import { useState } from "react"

const Holdings = () => {
  const cellOverride = `${styleCellDefault} !text-xs align-top font-bold border-l border-l-4 border-l-white`
  const [reportCurrency, setReportCurrency] = useState('GBP')

  return (
    <div>
      <div className="flex gap-5 mt-8 mb-8">
        <FormControl>
          <Select
            id="select-currency"
            labelId="report-weight"
            value={'T/Oz'}
          >
            <MenuItem value={'T/Oz'}>T/Oz</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <Select
            id="select-currency"
            labelId="report-currency"
            value={reportCurrency}
            onChange={e => setReportCurrency(e.target.value)}
          >
            <MenuItem value={'GBP'}>£GBP</MenuItem>
          </Select>
        </FormControl>

        <Button 
          variant="contained" 
          color="secondary" 
          disabled = {true}
          className="whitespace-nowrap"
        >
          View Historic Performance
        </Button>

      </div>

      <h2 className="mb-5">Cash Holdings</h2>
      <table>
        <thead>
          <tr>
            <th className={`${styleHeaderFilled(cellOverride)} border-l-0`} colSpan={2}>Currency</th>
            <th className={styleHeaderFilled(cellOverride)}>Value</th>
            <th className={styleHeaderFilled(cellOverride)}>% Allocation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${cellOverride} text-right font-bold border-l-0`}>{formatCurrencyLabel('EUR')}</td>
            <td className={cellOverride}>{formatCurrency(900)}</td>
            <td className={cellOverride}>9.00%</td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${cellOverride} text-right font-bold border-l-0`}>{formatCurrencyLabel('EUR')}</td>
            <td className={cellOverride}>{formatCurrency(900)}</td>
            <td className={cellOverride}>9.00%</td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${cellOverride} text-right font-bold border-l-0`}>{formatCurrencyLabel('USD')}</td>
            <td className={cellOverride}>{formatCurrency(900)}</td>
            <td className={cellOverride}>9.00%</td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${cellOverride} text-right font-bold border-l-0`}>{formatCurrencyLabel('CHF')}</td>
            <td className={cellOverride}>{formatCurrency(900)}</td>
            <td className={cellOverride}>9.00%</td>
          </tr>
        </tbody>
      </table>

      <h2 className="mb-5 mt-10">Metal Holdings</h2>
      <table>
        <thead>
          <tr>
            <th className={styleHeaderFilled(cellOverride)}>Precious Metal</th>
            <th className={styleHeaderFilled(cellOverride)}>Weight</th>
            <th className={styleHeaderFilled(cellOverride)}>Value</th>
            <th className={styleHeaderFilled(cellOverride)}>Gain / Loss</th>
            <th className={styleHeaderFilled(cellOverride)}>% Allocation</th>
            <th className={styleHeaderFilled(cellOverride)}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={cellOverride}>Gold (Au)</td>
            <td className={cellOverride}>2.000 t/oz</td>
            <td className={cellOverride}>{formatCurrency(3000)}</td>
            <td className={cellOverride}>{formatDelta(3000, 1)}</td>
            <td className={cellOverride}>80.00%</td>
            <td className={cellOverride}><Link href="/" className="block text-blue-700 font-bold underline">View Orders</Link></td>
          </tr>
          <tr>
            <td className={cellOverride}>Silver (Ag)</td>
            <td className={cellOverride}>2.000 t/oz</td>
            <td className={cellOverride}>{formatCurrency(3000)}</td>
            <td className={cellOverride}>{formatDelta(-1000, 0.1)}</td>
            <td className={cellOverride}>8.00%</td>
            <td className={cellOverride}><Link href="/" className="block text-blue-700 font-bold underline">View Orders</Link></td>
          </tr>
          <tr>
            <td className={cellOverride}>Platinum (Pt)</td>
            <td className={cellOverride}>2.000 t/oz</td>
            <td className={cellOverride}>{formatCurrency(3000)}</td>
            <td className={cellOverride}>-</td>
            <td className={cellOverride}>-</td>
            <td className={cellOverride}><Link href="/" className="block text-blue-700 font-bold underline">View Orders</Link></td>
          </tr>
          <tr>
            <td className={cellOverride}>Palladium (Pd)</td>
            <td className={cellOverride}>2.000 t/oz</td>
            <td className={cellOverride}>{formatCurrency(3000)}</td>
            <td className={cellOverride}>-</td>
            <td className={cellOverride}>-</td>
            <td className={cellOverride}><Link href="/" className="block text-blue-700 font-bold underline">View Orders</Link></td>
          </tr>
        </tbody>
      </table>

      <h2 className="mb-5 mt-10">Product Holdings</h2>
      <table>
        <thead>
          <tr>
            <th className={styleHeaderFilled(cellOverride)}>Precious Metal</th>
            <th className={styleHeaderFilled(cellOverride)}>Weight</th>
            <th className={styleHeaderFilled(cellOverride)}>Value</th>
            <th className={styleHeaderFilled(cellOverride)}>Gain / Loss</th>
            <th className={styleHeaderFilled(cellOverride)}>% Allocation</th>
            <th className={styleHeaderFilled(cellOverride)}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={cellOverride}>Gold (Au)</td>
            <td className={cellOverride}>2.000 t/oz</td>
            <td className={cellOverride}>{formatCurrency(3000)}</td>
            <td className={cellOverride}>{formatDelta(3000, 1)}</td>
            <td className={cellOverride}>80.00%</td>
            <td className={cellOverride}><Link href="/" className="block text-blue-700 font-bold underline">View Orders</Link></td>
          </tr>
          <tr>
            <td className={cellOverride}>Silver (Ag)</td>
            <td className={cellOverride}>2.000 t/oz</td>
            <td className={cellOverride}>{formatCurrency(3000)}</td>
            <td className={cellOverride}>{formatDelta(-1000, 0.1)}</td>
            <td className={cellOverride}>8.00%</td>
            <td className={cellOverride}><Link href="/" className="block text-blue-700 font-bold underline">View Orders</Link></td>
          </tr>
          <tr>
            <td className={cellOverride}>Platinum (Pt)</td>
            <td className={cellOverride}>2.000 t/oz</td>
            <td className={cellOverride}>{formatCurrency(3000)}</td>
            <td className={cellOverride}>-</td>
            <td className={cellOverride}>-</td>
            <td className={cellOverride}><Link href="/" className="block text-blue-700 font-bold underline">View Orders</Link></td>
          </tr>
          <tr>
            <td className={cellOverride}>Palladium (Pd)</td>
            <td className={cellOverride}>2.000 t/oz</td>
            <td className={cellOverride}>{formatCurrency(3000)}</td>
            <td className={cellOverride}>-</td>
            <td className={cellOverride}>-</td>
            <td className={cellOverride}><Link href="/" className="block text-blue-700 font-bold underline">View Orders</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Holdings