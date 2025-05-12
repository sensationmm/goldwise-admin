import { Button } from "@mui/material"
import { formatCurrency } from "../../utils/formatting"
import { styleCell, styleHeaderFilled } from "../../utils/table"
import BaseLayout from "../BaseLayout/BaseLayout"

const Funds = () => {
  const cellOverride = `${styleCell} !text-xs`

  return (
    <BaseLayout title="Safeguarded Funds" action={<Button variant="outlined" disabled>Refresh</Button>}>
      <div className="text-xs mb-10"><span className="font-bold">Results From:</span> 03 JAN 2023 10:00:02 GMT</div>

      <div className="items-start">
        <div className="overflow-scroll">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th className={styleHeaderFilled()}>Goldwise</th>
                <th className={styleHeaderFilled()}>Goldwise</th>
                <th className={styleHeaderFilled()}>eWallets</th>
                <th className={styleHeaderFilled()}>Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr><th className={styleHeaderFilled()} colSpan={7}>GHL</th></tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}>£GBP</td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>{formatCurrency(490000)}</td>
                <td className={cellOverride}>{formatCurrency(490000)}</td>
                <td className={cellOverride}>{formatCurrency(500000)}</td>
                <td className={cellOverride}>{formatCurrency(-10000)}</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Customer</td>
                <td className={cellOverride}>{formatCurrency(400000)}</td>
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
                <td className={cellOverride}>{formatCurrency(70000)}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Revenue</td>
                <td className={cellOverride}>{formatCurrency(10000)}</td>
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
                <td className={cellOverride}>{formatCurrency(10000)}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}>€EUR</td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>{formatCurrency(490000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(490000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(500000, true, 'EUR')}</td>
                <td className={cellOverride}>{formatCurrency(-10000, true, 'EUR')}</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Customer</td>
                <td className={cellOverride}>{formatCurrency(400000, true, 'EUR')}</td>
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
                <td className={cellOverride}>{formatCurrency(70000, true, 'EUR')}</td>
                <td className={cellOverride}>-</td>
              </tr>
              <tr>
                <td className={cellOverride}></td>
                <td className={cellOverride}></td>
                <td className={cellOverride}>Revenue</td>
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
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
                <td className={cellOverride}>{formatCurrency(10000, true, 'EUR')}</td>
                <td className={cellOverride}>-</td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Funds