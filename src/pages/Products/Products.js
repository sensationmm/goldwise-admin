import ActiveToggle from "../../components/atoms/ActiveToggle"
import { styleCell, styleHeader, styleHeaderFilled } from "../../utils/table"
import BaseLayout from "../BaseLayout/BaseLayout"
import { Tab, Tabs } from "@mui/material"

const Products = () => {
  const cellOverride = `${styleCell} !text-xs font-bold`

  return (
    <BaseLayout title="Product Management">

      <Tabs value={0}>
        <Tab label="Fractional Bars" />
      </Tabs>
        <div className="mt-10">
          <table>
            <thead>
              <tr>
                <th className={styleHeaderFilled()}></th>
                <th className={styleHeaderFilled()}>Available</th>
                <th className={styleHeaderFilled()}>Buy Fee (%)</th>
                <th className={styleHeaderFilled()}>Sell Fee (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styleHeader()}>Fractional Gold</td>
                <td className={cellOverride}><ActiveToggle /></td>
                <td className={cellOverride}>0.50%</td>
                <td className={cellOverride}>0.50%</td>
              </tr>
              <tr>
                <td className={styleHeader()}>Fractional Silver</td>
                <td className={cellOverride}><ActiveToggle /></td>
                <td className={cellOverride}>0.50%</td>
                <td className={cellOverride}>0.50%</td>
              </tr>
              <tr>
                <td className={styleHeader()}>Fractional Platinum</td>
                <td className={cellOverride}><ActiveToggle /></td>
                <td className={cellOverride}>0.50%</td>
                <td className={cellOverride}>0.50%</td>
              </tr>
              <tr>
                <td className={styleHeader()}>Fractional Palladium</td>
                <td className={cellOverride}><ActiveToggle /></td>
                <td className={cellOverride}>0.50%</td>
                <td className={cellOverride}>0.50%</td>
              </tr>
              </tbody>
          </table>
      </div>
    </BaseLayout>
  )
}

export default Products;