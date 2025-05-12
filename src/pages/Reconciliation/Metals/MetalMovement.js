import { Tab, Tabs } from "@mui/material";
import { formatWeight } from "../../../utils/formatting";
import { styleCell, styleHeader, styleSectionHeader } from "../../../utils/table";

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
                <th className={styleHeader()}>03/11/2023<div className="text-green-400">Settled</div></th>
                <th className={styleHeader()}>04/11/2023<div className="text-green-400">Settled</div></th>
                <th className={styleHeader()}>05/11/2023<div className="text-red-600">Unsettled</div></th>
                <th className={styleHeader()}>06/11/2023<div className="text-red-600">Unsettled</div></th>
                <th className={styleHeader()}>07/11/2023<div className="text-red-600">Unsettled</div></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-300">
                <th colSpan="7" className={styleSectionHeader()}>TOTAL | StoneX</th>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Gold</td>
                <td className={styleCell}>{formatWeight(12.900)}</td>
                <td className={styleCell}>{formatWeight(-5.000)}</td>
                <td className={styleCell}>{formatWeight(-15.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Silver</td>
                <td className={styleCell}>{formatWeight(-3.000)}</td>
                <td className={styleCell}>{formatWeight(2.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Platinum</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Palladium</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <th colSpan="7" className={styleHeader()}>GHL | London | StoneX</th>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Gold</td>
                <td className={styleCell}>{formatWeight(12.900)}</td>
                <td className={styleCell}>{formatWeight(-5.000)}</td>
                <td className={styleCell}>{formatWeight(-15.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Silver</td>
                <td className={styleCell}>{formatWeight(-3.000)}</td>
                <td className={styleCell}>{formatWeight(2.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Platinum</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Palladium</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <th colSpan="7" className={styleHeader()}>GHL | Zurich | StoneX</th>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Gold</td>
                <td className={styleCell}>{formatWeight(12.900)}</td>
                <td className={styleCell}>{formatWeight(-5.000)}</td>
                <td className={styleCell}>{formatWeight(-15.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Silver</td>
                <td className={styleCell}>{formatWeight(-3.000)}</td>
                <td className={styleCell}>{formatWeight(2.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Platinum</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Palladium</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <th colSpan="7" className={styleHeader()}>GEUAB | London | StoneX</th>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Gold</td>
                <td className={styleCell}>{formatWeight(12.900)}</td>
                <td className={styleCell}>{formatWeight(-5.000)}</td>
                <td className={styleCell}>{formatWeight(-15.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Silver</td>
                <td className={styleCell}>{formatWeight(-3.000)}</td>
                <td className={styleCell}>{formatWeight(2.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Platinum</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Palladium</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <th colSpan="7" className={styleHeader()}>GEUAB | Zurich | StoneX</th>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Gold</td>
                <td className={styleCell}>{formatWeight(12.900)}</td>
                <td className={styleCell}>{formatWeight(-5.000)}</td>
                <td className={styleCell}>{formatWeight(-15.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Silver</td>
                <td className={styleCell}>{formatWeight(-3.000)}</td>
                <td className={styleCell}>{formatWeight(2.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Platinum</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
                <td className={styleCell}>{formatWeight(0.000)}</td>
              </tr>
              <tr>
                <td></td>
                <td className={styleCell}>Digital Palladium</td>
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
                <th className={styleHeader()}>Running<br />Balance</th>
                <th className={styleHeader()}>Pending<br />Settlement</th>
                <th className={styleHeader()}>Settled<br />Balance</th>
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MetalMovement