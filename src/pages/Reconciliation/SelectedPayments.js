import { formatCurrency } from "../../utils/number"

export const styleCell = 'border-b border-slate-400 px-4 py-2'
export const styleHeader = (cellDefault = styleCell) =>  `${cellDefault} text-left`
export const styleTotal = (cellDefault = styleCell) => `${cellDefault} border-separate border-b-0 border-t-2 border-slate-900`

const SelectedPayments = () => {
  return (
      <div className="p-4 bg-slate-100 mt-4 rounded overflow-scroll">
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
      </div>
  )
}

export default SelectedPayments