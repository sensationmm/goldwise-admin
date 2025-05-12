import { formatWeight } from "../../../utils/formatting"
import { styleCell, styleHeaderFilled } from "../../../utils/table"

const Assets = () => {
  const cellOverride = `${styleCell} !text-xs`

  return (
    <div className="grid grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="mb-5">Unallocated &amp; Allocated Total</h2>

        <table>
          <thead>
            <tr>
              <th></th>
              <th className="w-full"></th>
              <th className={`${styleHeaderFilled()} !bg-gray-300`}>Metal Partner</th>
              <th className={`${styleHeaderFilled()} !bg-gray-300`}>Goldwise</th>
              <th className={`${styleHeaderFilled()} !bg-gray-300`}>Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr><th className={`${styleHeaderFilled()} !bg-gray-300`} colSpan={5}>Totals</th></tr>
            <tr>
              <td className={cellOverride}></td>
              <td className={cellOverride}>Fractional Gold</td>
              <td className={cellOverride}>{formatWeight(3.8)}</td>
              <td className={cellOverride}>{formatWeight(3.9)}</td>
              <td className={cellOverride}>{formatWeight(-1)}</td>
            </tr>
            <tr>
              <td className={cellOverride}></td>
              <td className={cellOverride}>Fractional Silver</td>
              <td className={cellOverride}>{formatWeight(0)}</td>
              <td className={cellOverride}>{formatWeight(0.5)}</td>
              <td className={cellOverride}>-</td>
            </tr>
            <tr>
              <td className={cellOverride}></td>
              <td className={cellOverride}>Fractional Platinun</td>
              <td className={cellOverride}>{formatWeight(0)}</td>
              <td className={cellOverride}>{formatWeight(0)}</td>
              <td className={cellOverride}>-</td>
            </tr>
            <tr>
              <td className={cellOverride}></td>
              <td className={cellOverride}>Fractional Palladium</td>
              <td className={cellOverride}>{formatWeight(0)}</td>
              <td className={cellOverride}>{formatWeight(0)}</td>
              <td className={cellOverride}>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div />

      <div>
        <h2 className="mb-5">Unallocated Ledgers</h2>
        <table>
        <thead>
          <tr>
            <th></th>
              <th className="w-full"></th>
            <th className={styleHeaderFilled()}>Metal Partners</th>
            <th className={styleHeaderFilled()}>Goldwise</th>
            <th className={styleHeaderFilled()}>Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr><th className={styleHeaderFilled()} colSpan={5}>StoneX</th></tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Gold</td>
            <td className={cellOverride}>{formatWeight(3.8)}</td>
            <td className={cellOverride}>{formatWeight(3.9)}</td>
            <td className={cellOverride}>{formatWeight(-1)}</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Silver</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0.5)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Platinun</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Palladium</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div />

      <div>
        <h2>Allocated Ledgers</h2>
      </div>
      
      <div/>

      <table>
        <tbody>
          <tr><th className={styleHeaderFilled()} colSpan={5}>UK - London | Brinks</th></tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Gold</td>
            <td className={cellOverride}>{formatWeight(3.8)}</td>
            <td className={cellOverride}>{formatWeight(3.9)}</td>
            <td className={cellOverride}>{formatWeight(-1)}</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Silver</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0.5)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Platinun</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Palladium</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr><td>&nbsp;</td></tr>
          <tr><th className={styleHeaderFilled()} colSpan={5}>CHE - Zurich | Brinks</th></tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Gold</td>
            <td className={cellOverride}>{formatWeight(3.8)}</td>
            <td className={cellOverride}>{formatWeight(3.9)}</td>
            <td className={cellOverride}>{formatWeight(-1)}</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Silver</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0.5)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Platinun</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Palladium</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          </tbody>
      </table>

      <table>
        <tbody>
          <tr><th className={styleHeaderFilled()} colSpan={5}>USA - New York | Brinks</th></tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Gold</td>
            <td className={cellOverride}>{formatWeight(3.8)}</td>
            <td className={cellOverride}>{formatWeight(3.9)}</td>
            <td className={cellOverride}>{formatWeight(-1)}</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Silver</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0.5)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Platinun</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Fractional Palladium</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          </tbody>
      </table>
    </div>
  )
}

export default Assets