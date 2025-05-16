import { Chip, Tab, Tabs } from "@mui/material";
import { formatWeight } from "../../../utils/formatting";
import { styleCell, styleEmptyCell, styleHeader } from "../../../utils/table";
import { Link } from "react-router-dom";

const VaultLedgers = () => {
  const cellOverride = `${styleCell} !text-xs`

  return (
    <>
      <Tabs value={0}>
        <Tab label="GHL" />
      </Tabs>

      <div className="flex mt-4 mb-6">
        <div className="grid grid-cols-4 gap-4">
          <Chip label="Fractional Gold" variant="filled" size="large" />
          <Chip label="Fractional Silver" color="primary" size="large" variant="outlined" />
          <Chip label="Fractional Platinum" color="primary" size="large" variant="outlined" />
          <Chip label="Fractional Palladium" color="primary" size="large" variant="outlined" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        <div className="overflow-scroll bg-slate-100">
          <table className="w-full" cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th className={styleHeader(cellOverride)}>GHL | Fractional Gold | UK - London | StoneX</th>
                <td className={`${cellOverride} text-right`}>
                  <Link to='/ledger/123456789' className="block text-blue-700 font-bold hover:underline">
                    View Ledger
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Current Balance</span> {formatWeight(0.000)}</td>
              </tr>
              <tr><td className={styleEmptyCell}></td><td className={styleEmptyCell}></td></tr>
              <tr>
                <td colSpan={2}>
                  <table>
                    <thead>
                      <tr>
                        <th className={styleHeader(cellOverride)}>Settlement Date</th>
                        <th className={styleHeader(cellOverride)}>Transaction Description</th>
                        <th className={styleHeader(cellOverride)}>Debit</th>
                        <th className={styleHeader(cellOverride)}>Credit</th>
                        <th className={styleHeader(cellOverride)}>Running Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 3)</td>
                        <td className={cellOverride}>{formatWeight(1)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                      </tr>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Transfer to GHL | London | Brinks</td>
                        <td className={cellOverride}>{formatWeight(8)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(1)}</td>
                      </tr>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 2)</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(2)}</td>
                        <td className={cellOverride}>{formatWeight(9)}</td>
                      </tr>
                      <tr>
                        <td className={cellOverride}>03/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 1)</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(7)}</td>
                        <td className={cellOverride}>{formatWeight(7)}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Opening Balance</span> {formatWeight(0.000)}</td>
              </tr>
            </thead>
          </table>
        </div>

        <div className="overflow-scroll bg-slate-100">
          <table className="w-full" cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th className={styleHeader(cellOverride)}>GHL | Fractional Gold | UK - London | Brinks</th>
                <td className={`${cellOverride} text-right`}>
                  <Link to='/ledger/123456789' className="block text-blue-700 font-bold hover:underline">
                    View Ledger
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Current Balance</span> {formatWeight(0.000)}</td>
              </tr>
              <tr><td className={styleEmptyCell}></td><td className={styleEmptyCell}></td></tr>
              <tr>
                <td colSpan={2}>
                  <table >
                    <thead>
                      <tr>
                        <th className={styleHeader(cellOverride)}>Settlement Date</th>
                        <th className={styleHeader(cellOverride)}>Transaction Description</th>
                        <th className={styleHeader(cellOverride)}>Debit</th>
                        <th className={styleHeader(cellOverride)}>Credit</th>
                        <th className={styleHeader(cellOverride)}>Running Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 3)</td>
                        <td className={cellOverride}>{formatWeight(1)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Opening Balance</span> {formatWeight(0.000)}</td>
              </tr>
            </thead>
          </table>
        </div>

        <div className="overflow-scroll bg-slate-100">
          <table className="w-full" cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th className={styleHeader(cellOverride)}>GHL | Fractional Gold | Switzerland - Zurich | StoneX</th>
                <td className={`${cellOverride} text-right`}>
                  <Link to='/ledger/123456789' className="block text-blue-700 font-bold hover:underline">
                    View Ledger
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Current Balance</span> {formatWeight(0.000)}</td>
              </tr>
              <tr><td className={styleEmptyCell}></td><td className={styleEmptyCell}></td></tr>
              <tr>
                <td colSpan={2}>
                  <table>
                    <thead>
                      <tr>
                        <th className={styleHeader(cellOverride)}>Settlement Date</th>
                        <th className={styleHeader(cellOverride)}>Transaction Description</th>
                        <th className={styleHeader(cellOverride)}>Debit</th>
                        <th className={styleHeader(cellOverride)}>Credit</th>
                        <th className={styleHeader(cellOverride)}>Running Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 3)</td>
                        <td className={cellOverride}>{formatWeight(1)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                      </tr>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Transfer to GHL | Zurich | Brinks</td>
                        <td className={cellOverride}>{formatWeight(8)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(1)}</td>
                      </tr>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 2)</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(2)}</td>
                        <td className={cellOverride}>{formatWeight(9)}</td>
                      </tr>
                      <tr>
                        <td className={cellOverride}>03/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 1)</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(7)}</td>
                        <td className={cellOverride}>{formatWeight(7)}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Opening Balance</span> {formatWeight(0.000)}</td>
              </tr>
            </thead>
          </table>
        </div>

        <div className="overflow-scroll bg-slate-100">
          <table className="w-full" cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th className={styleHeader(cellOverride)}>GHL | Fractional Gold | Switzerland - Zurich | Brinks</th>
                <td className={`${cellOverride} text-right`}>
                  <Link to='/ledger/123456789' className="block text-blue-700 font-bold hover:underline">
                    View Ledger
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Current Balance</span> {formatWeight(0.000)}</td>
              </tr>
              <tr><td className={styleEmptyCell}></td><td className={styleEmptyCell}></td></tr>
              <tr>
                <td colSpan={2}>
                  <table>
                    <thead>
                      <tr>
                        <th className={styleHeader(cellOverride)}>Settlement Date</th>
                        <th className={styleHeader(cellOverride)}>Transaction Description</th>
                        <th className={styleHeader(cellOverride)}>Debit</th>
                        <th className={styleHeader(cellOverride)}>Credit</th>
                        <th className={styleHeader(cellOverride)}>Running Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 3)</td>
                        <td className={cellOverride}>{formatWeight(1)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Opening Balance</span> {formatWeight(0.000)}</td>
              </tr>
            </thead>
          </table>
        </div>

        <div className="overflow-scroll bg-slate-100">
          <table className="w-full" cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th className={styleHeader(cellOverride)}>GHL | Fractional Gold | USA - New York | StoneX</th>
                <td className={`${cellOverride} text-right`}>
                  <Link to='/ledger/123456789' className="block text-blue-700 font-bold hover:underline">
                    View Ledger
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Current Balance</span> {formatWeight(0.000)}</td>
              </tr>
              <tr><td className={styleEmptyCell}></td><td className={styleEmptyCell}></td></tr>
              <tr>
                <td colSpan={2}>
                  <table>
                    <thead>
                      <tr>
                        <th className={styleHeader(cellOverride)}>Settlement Date</th>
                        <th className={styleHeader(cellOverride)}>Transaction Description</th>
                        <th className={styleHeader(cellOverride)}>Debit</th>
                        <th className={styleHeader(cellOverride)}>Credit</th>
                        <th className={styleHeader(cellOverride)}>Running Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 3)</td>
                        <td className={cellOverride}>{formatWeight(1)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                      </tr>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Transfer to GHL | Zurich | Brinks</td>
                        <td className={cellOverride}>{formatWeight(8)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(1)}</td>
                      </tr>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 2)</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(2)}</td>
                        <td className={cellOverride}>{formatWeight(9)}</td>
                      </tr>
                      <tr>
                        <td className={cellOverride}>03/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 1)</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(7)}</td>
                        <td className={cellOverride}>{formatWeight(7)}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Opening Balance</span> {formatWeight(0.000)}</td>
              </tr>
            </thead>
          </table>
        </div>

        <div className="overflow-scroll bg-slate-100">
          <table className="w-full" cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th className={styleHeader(cellOverride)}>GHL | Fractional Gold | USA - New York | Brinks</th>
                <td className={`${cellOverride} text-right`}>
                  <Link to='/ledger/123456789' className="block text-blue-700 font-bold hover:underline">
                    View Ledger
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Current Balance</span> {formatWeight(0.000)}</td>
              </tr>
              <tr><td className={styleEmptyCell}></td><td className={styleEmptyCell}></td></tr>
              <tr>
                <td colSpan={2}>
                  <table>
                    <thead>
                      <tr>
                        <th className={styleHeader(cellOverride)}>Settlement Date</th>
                        <th className={styleHeader(cellOverride)}>Transaction Description</th>
                        <th className={styleHeader(cellOverride)}>Debit</th>
                        <th className={styleHeader(cellOverride)}>Credit</th>
                        <th className={styleHeader(cellOverride)}>Running Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={cellOverride}>04/11/2023</td>
                        <td className={cellOverride}>Recon Ref#123 (Day 3)</td>
                        <td className={cellOverride}>{formatWeight(1)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                        <td className={cellOverride}>{formatWeight(0)}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className={styleEmptyCell}></td>
                <td className={cellOverride}><span className="font-bold mr-4">Opening Balance</span> {formatWeight(0.000)}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  )
}

export default VaultLedgers