import { formatCurrency } from "../../../utils/number"
import { styleCell, styleHeader } from "../../../utils/table"

const SelectedPayments = ({data}) => {
  const config = {
    stonex: 'StoneX',
    owedCustomers: 'Owed Customer',
    taxGHL: 'Tax GHL',
    taxGEUAB: 'Tax GEUAB',
    spreadGHL: 'Spead GHL',
    revenueGHL: 'Revenue GHL',
    revenueGEUAB: 'Revenue GEUAB',
    total: 'TOTAL'
  }

  return (
      <div className="p-4 bg-slate-100 mt-4 rounded overflow-scroll">
        <h2 className="mb-4">Selected Payments For Period</h2>

        <table className="w-full">
          <tbody>
            <tr>
              <th className={styleHeader()}></th>
              {Object.keys(config).map(col => <th className={styleHeader()}>{config[col]}</th>)}
            </tr>
            <tr>
              <th className={styleHeader()}>Amount Owed</th>
              {Object.keys(config).map(col => <td className={styleCell}>{formatCurrency(data.amountOwed[col])}</td>)}
            </tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
              <th className={styleHeader()}>Available in Recon</th>
              {Object.keys(config).map(col => <td className={styleCell}>{formatCurrency(data.availableInRecon[col])}</td>)}
            </tr>
            <tr>
              <th className={styleHeader()}>Total eMoney inc. Ousted Buy/Sells</th>
              {Object.keys(config).map(col => <td className={styleCell}>{formatCurrency(data.totalEMoney[col])}</td>)}
            </tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
              <th className={styleHeader()}>Amount Payable at Settlement</th>
              {Object.keys(config).map(col => <td className={styleCell}>{formatCurrency(data.amountPayable[col])}</td>)}
            </tr>
            <tr>
              <th className={styleHeader()}>Shortfall Amount</th>
              {Object.keys(config).map(col => <td className={styleCell}>{formatCurrency(data.shortfallAmount[col])}</td>)}
            </tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
              <th className={styleHeader()}>Critical Shortfall Payment Required</th>
              <td className={styleCell}></td>
              <th colSpan={2} className={styleHeader()}>Of Which IOU</th>
              <td className={styleCell}></td>
            </tr>
            <tr>
              <th className={styleHeader()}>Additional Shortfall</th>
              <td className={styleCell}></td>
            </tr>
            <tr>
              <th className={styleHeader()}>Customer Owed Money Buys NOT in Recon</th>
              <td className={styleCell}></td>
            </tr>
            <tr>
              <th className={styleHeader()}>Losses to be absorbed by GHL (-ve Spread)</th>
              <td className={styleCell}></td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default SelectedPayments