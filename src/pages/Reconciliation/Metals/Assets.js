import { formatWeight } from "../../../utils/number"
import { styleCell, styleHeaderFilled } from "../../../utils/table"

const Assets = () => {
  const cellOverride = `${styleCell} !text-xs`

  return (
    <div className="grid grid-cols-2 gap-12 items-start">
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
            <td className={cellOverride}>Digital Gold</td>
            <td className={cellOverride}>{formatWeight(3.8)}</td>
            <td className={cellOverride}>{formatWeight(3.9)}</td>
            <td className={cellOverride}>{formatWeight(-1)}</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Silver</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0.5)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Platinun</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Palladium</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr><td>&nbsp;</td></tr>
          <tr><th className={styleHeaderFilled()} colSpan={5}>London | Brinks</th></tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Gold</td>
            <td className={cellOverride}>{formatWeight(3.8)}</td>
            <td className={cellOverride}>{formatWeight(3.9)}</td>
            <td className={cellOverride}>{formatWeight(-1)}</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Silver</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0.5)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Platinun</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Palladium</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr><td>&nbsp;</td></tr>
          <tr><th className={styleHeaderFilled()} colSpan={5}>Zurich | Brinks</th></tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Gold</td>
            <td className={cellOverride}>{formatWeight(3.8)}</td>
            <td className={cellOverride}>{formatWeight(3.9)}</td>
            <td className={cellOverride}>{formatWeight(-1)}</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Silver</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0.5)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Platinun</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Palladium</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th></th>
            <th className="w-full"></th>
            <th className={`${styleHeaderFilled()} !bg-gray-300`}>Metal Partners</th>
            <th className={`${styleHeaderFilled()} !bg-gray-300`}>Goldwise</th>
            <th className={`${styleHeaderFilled()} !bg-gray-300`}>Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr><th className={`${styleHeaderFilled()} !bg-gray-300`} colSpan={5}>Totals</th></tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Gold</td>
            <td className={cellOverride}>{formatWeight(3.8)}</td>
            <td className={cellOverride}>{formatWeight(3.9)}</td>
            <td className={cellOverride}>{formatWeight(-1)}</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Silver</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0.5)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Platinun</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>{formatWeight(0)}</td>
            <td className={cellOverride}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={cellOverride}>Digital Palladium</td>
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