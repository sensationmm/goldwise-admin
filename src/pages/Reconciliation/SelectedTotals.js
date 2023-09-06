import { formatCurrency } from "../../utils/number"
import { styleCell, styleHeader, styleTotal } from "./SelectedPayments"

const SelectedTotals = () => {

  return (
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
  )
}

export default SelectedTotals