import BaseLayout from "../BaseLayout/BaseLayout";
import { Button, Tab, Tabs } from "@mui/material";
import { styleCell, styleHeader, styleHeaderFilled, styleSectionHeader } from "../../utils/table"
import ActiveToggle from "../../components/atoms/ActiveToggle/ActiveToggle";

const Platform = () => {
    return (
      <BaseLayout title="Platform"
      action={
          <Button
            variant="contained"
            size="large"
          >Edit Settings</Button>
      }>

        <Tabs value={0}>
          <Tab label="Controls" />
        </Tabs>

        <div className="mt-10 grid grid-cols-[_2fr,_3fr] gap-10">
          <div>
            <h2 className="mb-5">Platform Controls</h2>
            <table>
              <tbody>
                <tr>
                  <th className={styleHeader()}>Maintenance Mode</th>
                  <td className={styleCell}><ActiveToggle isActive={false} /></td>
                </tr>
                <tr>
                  <th className={styleHeader()}>Trading</th>
                  <td className={styleCell}><ActiveToggle /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="mb-5">Maintenance Messaging</h2>
            <table>
              <tbody>
                <tr>
                  <th className={styleHeader()}>Title</th>
                  <td className={`${styleCell} text-right`}>Maintenance Mode</td>
                </tr>
                <tr>
                  <th className={styleHeader()}>Description</th>
                  <td className={`${styleCell} text-right whitespace-break-spaces`}>The app is currently unavailable due to important maintenance. It should be back online in 3 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 overflow-scroll">
          <h2 className="mb-5">By Country Controls</h2>
          <table>
            <thead>
              <tr>
                <th className={styleHeaderFilled()}></th>
                <th className={styleHeaderFilled()}>Can Register</th>
                <th className={styleHeaderFilled()}>Can Trade</th>
                <th className={styleHeaderFilled()}>Open Banking Transfer</th>
                <th className={styleHeaderFilled()}>Normal Banking Transfer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={styleSectionHeader()}>United Kingdom</th>
                <td className={styleCell}><ActiveToggle /></td>
                <td className={styleCell}><ActiveToggle /></td>
                <td className={styleCell}><ActiveToggle /></td>
                <td className={styleCell}><ActiveToggle /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </BaseLayout>
    )
}

export default Platform