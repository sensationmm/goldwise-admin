import { styleCell, styleEmptyCell, styleHeader, styleHeaderFilled, styleSectionHeader } from "../../utils/table";

const MetalSpreads = () => {
  return (
    <div className="overflow-scroll">
      <table>
        <thead>
          <tr>
            <td className={styleHeaderFilled()} colSpan={2}></td>
            <th className={styleHeaderFilled()} colSpan={2}>Normal Hours</th>
            <th className={styleHeaderFilled()} colSpan={2}>Extended - Weekday</th>
            <th className={styleHeaderFilled()} colSpan={2}>Extended - Weekend</th>
          </tr>
          <tr>
            <td className={styleHeader()} colSpan={2}></td>
            <th className={styleHeader()}>Percentage</th>
            <th className={styleHeader()}>Fixed</th>
            <th className={styleHeader()}>Percentage</th>
            <th className={styleHeader()}>Fixed</th>
            <th className={styleHeader()}>Percentage</th>
            <th className={styleHeader()}>Fixed</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-300">
            <th colSpan="8" className={`${styleSectionHeader()} bg-white !text-left text-yellow-500`}>GOLD</th>
          </tr>
          <tr className="bg-slate-300">
            <td className={styleEmptyCell()}></td>
            <th className={`${styleHeader()} text-b`}>Buy Spread</th>
            <th colSpan="6" className={styleHeader()}></th>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>British Pounds (£GBP)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>Euros (€EUR)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr className="bg-slate-300">
            <td className={styleEmptyCell()}></td>
            <th className={`${styleHeader()} text-b`}>Sell Spread</th>
            <th colSpan="6" className={styleHeader()}></th>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>British Pounds (£GBP)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>Euros (€EUR)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr className="bg-slate-300">
            <th colSpan="8" className={`${styleSectionHeader()} bg-white !text-left text-slate-400`}>SILVER</th>
          </tr>
          <tr className="bg-slate-300">
            <td className={styleEmptyCell()}></td>
            <th className={`${styleHeader()} text-b`}>Buy Spread</th>
            <th colSpan="6" className={styleHeader()}></th>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>British Pounds (£GBP)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>Euros (€EUR)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr className="bg-slate-300">
            <td className={styleEmptyCell()}></td>
            <th className={`${styleHeader()} text-b`}>Sell Spread</th>
            <th colSpan="6" className={styleHeader()}></th>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>British Pounds (£GBP)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>Euros (€EUR)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr className="bg-slate-300">
            <th colSpan="8" className={`${styleSectionHeader()} bg-white !text-left text-slate-400`}>PLATINUM</th>
          </tr>
          <tr className="bg-slate-300">
            <td className={styleEmptyCell()}></td>
            <th className={`${styleHeader()} text-b`}>Buy Spread</th>
            <th colSpan="6" className={styleHeader()}></th>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>British Pounds (£GBP)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>Euros (€EUR)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr className="bg-slate-300">
            <td className={styleEmptyCell()}></td>
            <th className={`${styleHeader()} text-b`}>Sell Spread</th>
            <th colSpan="6" className={styleHeader()}></th>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>British Pounds (£GBP)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>Euros (€EUR)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr className="bg-slate-300">
            <th colSpan="8" className={`${styleSectionHeader()} bg-white !text-left text-slate-400`}>PALLADIUM</th>
          </tr>
          <tr className="bg-slate-300">
            <td className={styleEmptyCell()}></td>
            <th className={`${styleHeader()} text-b`}>Buy Spread</th>
            <th colSpan="6" className={styleHeader()}></th>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>British Pounds (£GBP)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>Euros (€EUR)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr className="bg-slate-300">
            <td className={styleEmptyCell()}></td>
            <th className={`${styleHeader()} text-b`}>Sell Spread</th>
            <th colSpan="6" className={styleHeader()}></th>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>British Pounds (£GBP)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
          <tr>
            <td className={styleEmptyCell()}></td>
            <td className={`${styleCell} text-right`}>Euros (€EUR)</td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
            <td className={styleCell}>0.15%</td>
            <td className={styleCell}></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MetalSpreads;