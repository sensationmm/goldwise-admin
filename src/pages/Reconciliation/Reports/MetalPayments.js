import { formatCurrency } from "../../../utils/formatting"
import { styleCell, styleHeader, styleTotal } from "../../../utils/table"

const MetalPayments = ({ data }) => {
  const config = {
    metalVaultLedger: '',
    XAU: 'Fractional Gold',
    XAG: 'Fractional Silver',
    XPT: 'Fractional Platinum',
    XPD: 'Fractional Palladium'
  }
  const cellOverride = `${styleCell} pr-12`

  return (
      <div className="p-4 bg-slate-100 mt-4 rounded overflow-scroll">
        <h2 className="mb-4">Metal Payments Table</h2>

        <table>
          <tr>
            {Object.keys(config).map(col => <th className={styleHeader(cellOverride)}>{config[col]}</th>)}
          </tr>
          {
            data.map((d, rowCount) => (
              <tr>
              {Object.keys(config).map((col, count) => {
                if(count === 0) {
                  if(rowCount + 1 === data.length) {
                    return <th className={`${styleTotal(cellOverride)} ${styleHeader(cellOverride)}`}>{d[col]}</th>
                  }
                  return <th className={styleHeader(cellOverride)}>{d[col]}</th>
                } else {
                  if(rowCount + 1 === data.length) {
                    return <td className={styleTotal(cellOverride)}>{formatCurrency(d[col])}</td>
                  }
                  return <td className={styleCell}>{formatCurrency(d[col])}</td>
                }
              })}
              </tr>
            ))
          }
        </table>
      </div>
  )
}

export default MetalPayments