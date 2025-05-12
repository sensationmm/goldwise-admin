import dayjs from "dayjs"
import { styleCellDefault, styleHeaderFilled, styleHeaderFilledDark } from "../../../utils/table"
import { formatStatus } from "../../../utils/formatting"

const KycChecks = () => {
  const cellOverride = `${styleCellDefault} font-bold`

  return (
    <div className="w-full overflow-x-scroll">
      <table>
          <thead>
            <tr>
              <th className={styleHeaderFilled()}>Date</th>
              <th className={styleHeaderFilled()}>Type</th>
              <th className={styleHeaderFilled()}>Check Result</th>
              <th className={styleHeaderFilled()}>ID Document</th>
              <th className={styleHeaderFilled()}>Liveness</th>
              <th className={styleHeaderFilled()}>Public Records</th>
              <th className={styleHeaderFilled()}>Watchlist</th>
              <th className={styleHeaderFilled()}>Risk Score</th>
              <th className={styleHeaderFilledDark()}>ID Document</th>
              <th className={styleHeaderFilledDark()}>Address Proof</th>
              <th className={styleHeaderFilledDark()}>Source of Funds</th>
              <th className={styleHeaderFilledDark()}>Onfido Refence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styleCellDefault}>{dayjs(new Date()).format('DD/MM/YYYY')}</td>
              <td className={styleCellDefault}>Periodic Review</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
            </tr>
            <tr>
              <td className={styleCellDefault}>{dayjs(new Date()).format('DD/MM/YYYY')}</td>
              <td className={styleCellDefault}>Periodic Review</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>50</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
            </tr>
            <tr>
              <td className={styleCellDefault}>{dayjs(new Date()).format('DD/MM/YYYY')}</td>
              <td className={styleCellDefault}>Change of Details</td>
              <td className={cellOverride}>{formatStatus('in-review')}</td>
              <td className={cellOverride}>{formatStatus('consider')}</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>{formatStatus('failed')}</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>200</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
            </tr>
            <tr>
              <td className={styleCellDefault}>{dayjs(new Date()).format('DD/MM/YYYY')}</td>
              <td className={styleCellDefault}>Change of Details</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>50</td>
              <td className={cellOverride}>{formatStatus('failed')}</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>{formatStatus('uploaded')}</td>
              <td className={cellOverride}>asdfghjkasdfghjk-asdfghjkasdfghjk</td>
            </tr>
            <tr>
              <td className={styleCellDefault}>{dayjs(new Date()).format('DD/MM/YYYY')}</td>
              <td className={styleCellDefault}>Periodic Review</td>
              <td className={cellOverride}>{formatStatus('passed')}</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>50</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
              <td className={cellOverride}>-</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default KycChecks