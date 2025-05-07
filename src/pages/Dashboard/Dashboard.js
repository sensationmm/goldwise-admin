import { Link } from "react-router-dom"
import { formatCurrency, formatDelta } from "../../utils/number"
import { styleCell, styleHeaderFilled } from "../../utils/table"
import BaseLayout from "../BaseLayout/BaseLayout"

const Dashboard = () => {
  const cellOverride = `${styleCell} !text-xs font-bold`

  return (
    <BaseLayout title="Dashboard">
      <div className="overflow-scroll">
        <h2 className="mb-5">Metal Prices</h2>
        <div className="flex items-center gap-3 mb-3 text-xs text-slate-300 font-bold">
          <div className="w-[14px] h-[14px] bg-emerald-400 rounded-[7px]" />
          Market Open

          <span className="ml-5">Prices dated: 20 JAN 2022 10:04:12</span>
        </div>
        <table>
          <thead>
            <tr>
              <th className={styleHeaderFilled()}>Precious Metal</th>
              <th className={styleHeaderFilled()}>Buy Price</th>
              <th className={styleHeaderFilled()}>Sell Price</th>
              <th className={styleHeaderFilled()}>Day Change</th>
              <th className={styleHeaderFilled()}>Spread Amount</th>
              <th className={styleHeaderFilled()}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={cellOverride}>Gold (Au)</td>
              <td className={cellOverride}>{formatCurrency(1500000)}</td>
              <td className={cellOverride}>{formatCurrency(1490000)}</td>
              <td className={cellOverride}>{formatDelta(14.96, 1.00)}</td>
              <td className={cellOverride}>{formatCurrency(2)}</td>
              <td className={cellOverride}><Link to='/' className="block text-blue-700 font-bold underline">View chart</Link></td>
            </tr>
            <tr>
              <td className={cellOverride}>Silver (Ag)</td>
              <td className={cellOverride}>{formatCurrency(20000)}</td>
              <td className={cellOverride}>{formatCurrency(19000)}</td>
              <td className={cellOverride}>{formatDelta(-0.2, 1.03)}</td>
              <td className={cellOverride}>{formatCurrency(0.5)}</td>
              <td className={cellOverride}><Link to='/' className="block text-blue-700 font-bold underline">View chart</Link></td>
            </tr>
            <tr>
              <td className={cellOverride}>Platinum (Pt)</td>
              <td className={cellOverride}>{formatCurrency(815000)}</td>
              <td className={cellOverride}>{formatCurrency(814000)}</td>
              <td className={cellOverride}>{formatDelta(0, 0)}</td>
              <td className={cellOverride}>{formatCurrency(1.5)}</td>
              <td className={cellOverride}><Link to='/' className="block text-blue-700 font-bold underline">View chart</Link></td>
            </tr>
            <tr>
              <td className={cellOverride}>Palladium (Pd)</td>
              <td className={cellOverride}>{formatCurrency(1200000)}</td>
              <td className={cellOverride}>{formatCurrency(1199000)}</td>
              <td className={cellOverride}>{formatDelta(119.95, 10)}</td>
              <td className={cellOverride}>{formatCurrency(2)}</td>
              <td className={cellOverride}><Link to='/' className="block text-blue-700 font-bold underline">View chart</Link></td>
            </tr>
            </tbody>
        </table>
      </div>

      <h2 className="mb-5 mt-10">Exchange Rates</h2>
      <div className="grid grid-cols-4 gap-4">
        <table>
          <tbody>
            <tr>
              <td className={cellOverride}>GBP to EUR</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            <tr>
              <td className={cellOverride}>GBP to USD</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            <tr>
              <td className={cellOverride}>GBP to CHF</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className={cellOverride}>GBP to EUR</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            <tr>
              <td className={cellOverride}>GBP to USD</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            <tr>
              <td className={cellOverride}>GBP to CHF</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className={cellOverride}>GBP to EUR</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            <tr>
              <td className={cellOverride}>GBP to USD</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            <tr>
              <td className={cellOverride}>GBP to CHF</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td className={cellOverride}>GBP to EUR</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            <tr>
              <td className={cellOverride}>GBP to USD</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            <tr>
              <td className={cellOverride}>GBP to CHF</td>
              <td className={cellOverride}>0.800</td>
            </tr>
            </tbody>
        </table>
      </div>
    </BaseLayout>
  )
}

export default Dashboard;