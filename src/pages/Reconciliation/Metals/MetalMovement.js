import { Tab, Tabs } from "@mui/material";
import { formatWeight } from "../../../utils/formatting";
import { styleCell, styleCellDefault, styleHeader, styleSectionHeader } from "../../../utils/table";

const MetalMovement = () => {
  return (
    <>
      <Tabs value={0}>
        <Tab label="StoneX" />
      </Tabs>

      <div className="overflow-scroll">
        <div className="grid grid-cols-[3fr_1fr] gap-12 items-start">
          <table>
            <thead>
              <tr>
                <td  className={`${styleHeader()} w-[20px]`}></td>
                <td className={styleHeader()}></td>
                <th className={styleHeader()}>03/11/2023<div className="text-green-400">Submitted</div><div className="text-green-400">Settled</div></th>
                <th className={styleHeader()}>04/11/2023<div className="text-green-400">Submitted</div><div className="text-green-400">Settled</div></th>
                <th className={styleHeader()}>05/11/2023<div className="text-green-400">Submitted</div><div className="text-red-600">Not Settled</div></th>
                <th className={styleHeader()}>06/11/2023<div className="text-green-400">Submitted</div><div className="text-red-600">Not Settled</div></th>
                <th className={styleHeader()}>07/11/2023<div className="text-red-600">Unsubmitted</div><div className="text-red-600">Not Settled</div></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-300">
                <th colSpan="7" className={styleSectionHeader()}>TOTAL | StoneX</th>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Gold</td>
                <td className={styleCell}>{formatWeight(12.900)}</td>
                <td className={styleCell}>{formatWeight(-5.000)}</td>
                <td className={styleCell}>{formatWeight(-15.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Silver</td>
                <td className={styleCell}>{formatWeight(-3.000)}</td>
                <td className={styleCell}>{formatWeight(2.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Platinum</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Palladium</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <th colSpan="7" className={styleHeader()}>GHL | UK - London | StoneX</th>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Gold</td>
                <td className={styleCell}>{formatWeight(12.900)}</td>
                <td className={styleCell}>{formatWeight(-5.000)}</td>
                <td className={styleCell}>{formatWeight(-15.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Silver</td>
                <td className={styleCell}>{formatWeight(-3.000)}</td>
                <td className={styleCell}>{formatWeight(2.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Platinum</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Palladium</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <th colSpan="7" className={styleHeader()}>GHL | USA - New York | StoneX</th>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Gold</td>
                <td className={styleCell}>{formatWeight(12.900)}</td>
                <td className={styleCell}>{formatWeight(-5.000)}</td>
                <td className={styleCell}>{formatWeight(-15.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Silver</td>
                <td className={styleCell}>{formatWeight(-3.000)}</td>
                <td className={styleCell}>{formatWeight(2.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Platinum</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Palladium</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <th colSpan="7" className={styleHeader()}>GHL | Switzerland - Zurich | StoneX</th>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Gold</td>
                <td className={styleCell}>{formatWeight(12.900)}</td>
                <td className={styleCell}>{formatWeight(-5.000)}</td>
                <td className={styleCell}>{formatWeight(-15.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Silver</td>
                <td className={styleCell}>{formatWeight(-3.000)}</td>
                <td className={styleCell}>{formatWeight(2.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Platinum</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCellDefault}>Fractional Palladium</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className={styleHeader()}>Running<br />Balance<br /><br /></th>
                <th className={styleHeader()}>Pending<br />Settlement<br /><br /></th>
                <th className={styleHeader()}>Settled<br />Balance<br /><br /></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-300">
                <th colSpan="3" className={styleSectionHeader()}>&nbsp;</th>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(3.9)}</td>
                <td className={styleCell}>{formatWeight(-15)}</td>
                <td className={styleCell}>{formatWeight(18.9)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(5)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(5)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td className={styleCell} colSpan="3">&nbsp;</td></tr>
              <tr>
                <td className={styleCell}>{formatWeight(3.9)}</td>
                <td className={styleCell}>{formatWeight(-15)}</td>
                <td className={styleCell}>{formatWeight(18.9)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(5)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(5)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td className={styleCell} colSpan="3">&nbsp;</td></tr>
              <tr>
                <td className={styleCell}>{formatWeight(3.9)}</td>
                <td className={styleCell}>{formatWeight(-15)}</td>
                <td className={styleCell}>{formatWeight(18.9)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(5)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(5)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td className={styleCell} colSpan="3">&nbsp;</td></tr>
              <tr>
                <td className={styleCell}>{formatWeight(3.9)}</td>
                <td className={styleCell}>{formatWeight(-15)}</td>
                <td className={styleCell}>{formatWeight(18.9)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(5)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(5)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
              </tr>
              <tr>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
                <td className={styleCell}>{formatWeight(0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MetalMovement