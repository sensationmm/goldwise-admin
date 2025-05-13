import dayjs from "dayjs"
import {styleCellDefault, styleHeaderFilled, styleHeaderFilledDark } from "../../../utils/table"
import { formatStatus } from "../../../utils/formatting"

const KycChecks = () => {
  const cellOverride = `${styleCellDefault} font-bold border-l border-l-4 border-l-white`

  return (
    <div className="w-full overflow-x-scroll">
      <table>
          <thead>
            <tr>
              <th className={styleHeaderFilled(cellOverride)}>Date</th>
              <th className={styleHeaderFilled(cellOverride)}>Type</th>
              <th className={styleHeaderFilled(cellOverride)}>Check Result</th>
              <th className={styleHeaderFilled(cellOverride)}>ID Document</th>
              <th className={styleHeaderFilled(cellOverride)}>Liveness</th>
              <th className={styleHeaderFilled(cellOverride)}>Public Records</th>
              <th className={styleHeaderFilled(cellOverride)}>Watchlist</th>
              <th className={styleHeaderFilled(cellOverride)}>Risk Score</th>
              <th className={styleHeaderFilledDark(cellOverride)}>ID Document</th>
              <th className={styleHeaderFilledDark(cellOverride)}>Address Proof</th>
              <th className={styleHeaderFilledDark(cellOverride)}>Source of Funds</th>
              <th className={styleHeaderFilledDark(cellOverride)}>Onfido Refence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${cellOverride} font-normal`}>{dayjs(new Date()).format('DD/MM/YYYY')}</td>
              <td className={`${cellOverride} font-normal`}>Periodic Review</td>
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
              <td className={`${cellOverride} font-normal`}>{dayjs(new Date()).format('DD/MM/YYYY')}</td>
              <td className={`${cellOverride} font-normal`}>Periodic Review</td>
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
              <td className={`${cellOverride} font-normal`}>{dayjs(new Date()).format('DD/MM/YYYY')}</td>
              <td className={`${cellOverride} font-normal`}>Change of Details</td>
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
              <td className={`${cellOverride} font-normal`}>{dayjs(new Date()).format('DD/MM/YYYY')}</td>
              <td className={`${cellOverride} font-normal`}>Change of Details</td>
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
              <td className={`${cellOverride} font-normal`}>{dayjs(new Date()).format('DD/MM/YYYY')}</td>
              <td className={`${cellOverride} font-normal`}>Periodic Review</td>
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