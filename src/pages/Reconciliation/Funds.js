import { Button } from "@mui/material"
import { formatCurrency } from "../../utils/number"
import { styleCell, styleHeaderFilled } from "../../utils/table"
import BaseLayout from "../BaseLayout/BaseLayout"

const Funds = () => {
  const cellOverride = `${styleCell} !text-xs`

  return (
    <BaseLayout title="Safeguarded Funds" action={<Button variant="outlined" disabled>Refresh</Button>}>
      <div className="text-xs mb-10"><span className="font-bold">Results From:</span> 03 JAN 2023 10:00:02 GMT</div>

      <div className="grid grid-cols-2 gap-12 items-start">
        <div className="overflow-scroll">
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="w-full"></th>
                <th></th>
                <th className={styleHeaderFilled()}>Goldwise</th>
                <th className={styleHeaderFilled()}>eWallet Partner</th>
                <th className={styleHeaderFilled()}>Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr><th className={styleHeaderFilled()} colSpan={6}>GHL</th></tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}>£GBP</td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>{formatCurrency(490000)}</td>
                <td className={cellOverride}>{formatCurrency(500000)}</td>
                <td className={cellOverride}>{formatCurrency(-10000)}</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Customer</td>
                <td className={cellOverride}>{formatCurrency(400000)}</td>
                <td className={cellOverride}>{formatCurrency(410000)}</td>
                <td className={cellOverride}>{formatCurrency(-10000)}</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Recon</td>
                <td className={cellOverride}>{formatCurrency(70000)}</td>
                <td className={cellOverride}>{formatCurrency(70000)}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Revenue</td>
                <td className={cellOverride}>{formatCurrency(10000)}</td>
                <td className={cellOverride}>{formatCurrency(10000)}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Tax</td>
                <td className={cellOverride}>{formatCurrency(10000)}</td>
                <td className={cellOverride}>{formatCurrency(10000)}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}>€EUR</td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>{formatCurrency(490000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(500000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(-10000, true, 'EUR')}</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Customer</td>
                <td className={cellOverride}>{formatCurrency(400000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(410000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(-10000, true, 'EUR')}</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Recon</td>
                <td className={cellOverride}>{formatCurrency(70000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(70000, true, 'EUR')}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Revenue</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Tax</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr><th className={styleHeaderFilled()} colSpan={6}>GEUAB</th></tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}>€EUR</td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>{formatCurrency(250000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(240000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR', true)}</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Customer</td>
                <td className={cellOverride}>{formatCurrency(200000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(300000, true, 'EUR')}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Recon</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(0, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR', true)}</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Revenue</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Tax</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
                <td className={cellOverride}>-</td>
              </tr>
              </tbody>
          </table>
        </div>

        <div className="overflow-scroll">
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="w-full"></th>
                <th className={`${styleHeaderFilled()} !bg-gray-300`}>Goldwise</th>
                <th className={`${styleHeaderFilled()} !bg-gray-300`}>eWallet Partner</th>
                <th className={`${styleHeaderFilled()} !bg-gray-300`}>Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr><th className={`${styleHeaderFilled()} !bg-gray-300`} colSpan={5}>Total</th></tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}>£GBP</td>
                <td className={cellOverride}>{formatCurrency(490000)}</td>
                <td className={cellOverride}>{formatCurrency(500000)}</td>
                <td className={cellOverride}>{formatCurrency(10000)}</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}>€EUR</td>
                <td className={cellOverride}>{formatCurrency(500000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(490000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR', true)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Funds