import BaseLayout from "../BaseLayout/BaseLayout";
import { Button } from "@mui/material";
import { styleCell, styleEmptyCell, styleHeaderFilled, styleSectionHeader } from "../../utils/table"
import ActiveToggle from "../../components/atoms/ActiveToggle/ActiveToggle";
import { formatCurrency } from "../../utils/number";

const VaultSetting = () => {
    return (
      <BaseLayout title="Vault Management"
      action={
          <Button
            variant="contained"
            size="large"
          >Edit Settings</Button>
      }>
         <div className="overflow-scroll">
          <table>
            <thead>
              <tr>
                <th className={styleHeaderFilled()} colSpan={2}>Country</th>
                <th className={styleHeaderFilled()}>London, UK</th>
                <th className={styleHeaderFilled()}>Zurich, Switzerland</th>
                <th className={styleHeaderFilled()}>New York, USA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={styleSectionHeader()} colSpan={2}>Vault Available</th>
                <td className={styleCell}><ActiveToggle /></td>
                <td className={styleCell}><ActiveToggle /></td>
                <td className={styleCell}><ActiveToggle /></td>
              </tr>
              <tr>
                <th colSpan="5" className={styleSectionHeader()}>Vault Fees:</th>
              </tr>
              <tr>
                <td className={styleEmptyCell()}></td>
                <td className={`${styleCell} text-right`}>Gold (%)</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
              </tr>
              <tr>
                <td className={styleEmptyCell()}></td>
                <td className={`${styleCell} text-right`}>Silver (%)</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
              </tr>
              <tr>
                <td className={styleEmptyCell()}></td>
                <td className={`${styleCell} text-right`}>Platinum (%)</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
              </tr>
              <tr>
                <td className={styleEmptyCell()}></td>
                <td className={`${styleCell} text-right`}>Palladium (%)</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
                <td className={`${styleCell} font-bold`}>0.15%</td>
              </tr>
              <tr>
                <th colSpan="5" className={styleSectionHeader()}>Minimum Vault Fees:</th>
              </tr>
              <tr>
                <td className={styleEmptyCell()}></td>
                <td className={`${styleCell} text-right`}>British Pounds (£GBP)</td>
                <td className={`${styleCell} font-bold`}>{formatCurrency(5, true, 'GBP')}</td>
                <td className={`${styleCell} font-bold`}>{formatCurrency(5, true, 'GBP')}</td>
                <td className={`${styleCell} font-bold`}>{formatCurrency(5, true, 'GBP')}</td>
              </tr>
              <tr>
                <td className={styleEmptyCell()}></td>
                <td className={`${styleCell} text-right`}>Euros (€EUR)</td>
                <td className={`${styleCell} font-bold`}>{formatCurrency(5, true, 'EUR')}</td>
                <td className={`${styleCell} font-bold`}>{formatCurrency(5, true, 'EUR')}</td>
                <td className={`${styleCell} font-bold`}>{formatCurrency(5, true, 'EUR')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BaseLayout>
    )
}

export default VaultSetting