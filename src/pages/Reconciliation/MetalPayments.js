import { formatCurrency } from "../../utils/number"
import { styleCell, styleHeader, styleTotal } from "./SelectedPayments"

const MetalPayments = () => {
  const cellOverride = `${styleCell} pr-12`

  return (
      <div className="p-4 bg-slate-100 mt-4 rounded overflow-scroll">
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

      </div>
  )
}

export default MetalPayments