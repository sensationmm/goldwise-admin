import { formatCurrency } from "../../../utils/formatting"
import { styleCell, styleHeader, styleTotal } from "../../../utils/table"

const SelectedTotals = ({ data }) => {
  const config = {
    metalCost: 'Metal Cost',
    integralSpread: 'Integral Spread',
    ehtSpread: 'EHT Spread',
    totalSpread: 'Total Spread',
    productAmount: 'Product Amount',
    fees: 'Fees',
    tax: 'Tax',
    customerTotal: 'Customer Total'
  }

  return (
      <div className="p-4 bg-slate-100 mt-4 rounded overflow-scroll">
        <h3 className="mb-4">Selected Totals</h3>
        
        <table className="w-full">
          <tbody>
            <tr>
              <th></th>
              {Object.keys(config).map(col => <th className={styleHeader()}>{config[col]}</th>)}
            </tr>
            <tr>
              <th className={styleHeader()}>Buys in Recon Wallet</th>
              {Object.keys(config).map(col => <td className={styleCell}>{formatCurrency(data.buysInReconWallet[col])}</td>)}
            </tr>
            <tr>
              <th className={styleHeader()}>Buys NOT in Recon Wallet</th>
              {Object.keys(config).map(col => <td className={styleCell}>{formatCurrency(data.buysNotInReconWallet[col])}</td>)}
            </tr>
            <tr>
              <th className={styleHeader()}>Sells Owed</th>
              {Object.keys(config).map(col => <td className={styleCell}>{formatCurrency(data.sellsOwed[col])}</td>)}
            </tr>
            <tr>
              <td></td>
              {Object.keys(config).map(col => <td className={styleTotal()}>{formatCurrency(data.totals[col])}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default SelectedTotals