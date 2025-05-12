import { formatCurrency, formatCurrencyLabel } from "../../../utils/formatting"
import { styleCellDefault, styleHeaderFilled } from "../../../utils/table"

const Wallets = () => {
  const cellOverride = `${styleCellDefault} !text-xs align-top`

  return (
    <div>
      <h2 className="mb-10">Customer Wallets</h2>

      <div className="grid grid-cols-2 gap-[20px]">
        <table>
          <thead>
            <tr>
              <th className={styleHeaderFilled()} colSpan={2}>{formatCurrencyLabel('GBP')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Total Balance</td>
              <td className={cellOverride}>{formatCurrency(1000)}</td>
            </tr>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Available to Trade</td>
              <td className={cellOverride}>{formatCurrency(1000)}</td>
            </tr>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Available to Withdraw</td>
              <td className={cellOverride}>{formatCurrency(1000)}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th className={styleHeaderFilled()} colSpan={2}>{formatCurrencyLabel('EUR')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Total Balance</td>
              <td className={cellOverride}>{formatCurrency(1000, false, 'EUR')}</td>
            </tr>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Available to Trade</td>
              <td className={cellOverride}>{formatCurrency(1000, false, 'EUR')}</td>
            </tr>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Available to Withdraw</td>
              <td className={cellOverride}>{formatCurrency(1000, false, 'EUR')}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th className={styleHeaderFilled()} colSpan={2}>{formatCurrencyLabel('USD')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Total Balance</td>
              <td className={cellOverride}>{formatCurrency(1000, false, 'USD')}</td>
            </tr>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Available to Trade</td>
              <td className={cellOverride}>{formatCurrency(1000, false, 'USD')}</td>
            </tr>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Available to Withdraw</td>
              <td className={cellOverride}>{formatCurrency(1000, false, 'USD')}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th className={styleHeaderFilled()} colSpan={2}>{formatCurrencyLabel('CHF')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Total Balance</td>
              <td className={cellOverride}>{formatCurrency(1000, false, 'CHF')}</td>
            </tr>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Available to Trade</td>
              <td className={cellOverride}>{formatCurrency(1000, false, 'CHF')}</td>
            </tr>
            <tr>
              <td className={`${cellOverride} text-right font-bold`}>Available to Withdraw</td>
              <td className={cellOverride}>{formatCurrency(1000, false, 'CHF')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Wallets