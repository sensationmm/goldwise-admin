import { Link } from "react-router-dom";
import DataTable from "../../../components/atoms/DataTable/DataTable"
import HistoryExecutedDataStructure from '../../../dataStructures/history-executed.json';
import HistoryCancelledDataStructure from '../../../dataStructures/history-cancelled.json';
import MockHistoryExecuted from '../../../mocks/history-executed.json';
import MockHistoryCancelled from '../../../mocks/history-cancelled.json';
import { Button } from "@mui/material";
import { useState } from "react";
import { formatCurrencyLabel } from "../../../utils/formatting";

const History = () => {
  const [view, setView] = useState(0);

  const screens = [
    { label: 'Executed', headers: HistoryExecutedDataStructure, data: MockHistoryExecuted },
    { label: 'Expired / Cancelled', headers: HistoryCancelledDataStructure, data: MockHistoryCancelled }
  ];

  const headers = Object.keys(screens[view].headers).map(res => screens[view].headers[res].label);
  headers.push('');

  return (
    <div>
      <div className="flex justify-between gap-3 mb-5 relative top-[-20px]">
        <div className="flex gap-3">
          <Button variant={"contained"} className={`rounded-[50px] bg-gray-900`}>{formatCurrencyLabel('GBP', true)}</Button>
          <Button variant={'outlined'} className={`rounded-[50px] border-gray-900 text-gray-900`}>{formatCurrencyLabel('EUR', true)}</Button>
          <Button variant={'outlined'} className={`rounded-[50px] border-gray-900 text-gray-900`}>{formatCurrencyLabel('USD', true)}</Button>
          <Button variant={'outlined'} className={`rounded-[50px] border-gray-900 text-gray-900`}>{formatCurrencyLabel('CHF', true)}</Button>

        </div>
        <div className="flex gap-3">
          {
            screens.map((screen, count) => {
              return (
                <Button 
                  onClick={() => setView(count)} 
                  variant={view === count ? "contained" : 'outlined'} 
                  className={`rounded-[50px] ${view === count ? 'bg-gray-900' : 'border-gray-900 text-gray-900'}`}
                >{screen.label}</Button>
              )
            })
          }
        </div>
      </div>

      <h2 className="mb-5">Transaction History</h2>

      <DataTable
        headers={headers}
        data={screens[view].data.data.map((rec) => {
          const processed = Object.keys(screens[view].headers).map((key) => {
            return rec[key]
          })

          processed.push(<Link className="underline hover:no-underline text-blue-700 font-bold" to={`/orders/`}>View Details</Link>);

          return processed
        })} 
        dataTypes={Object.keys(screens[view].headers).map(res => screens[view].headers[res].dataType)}
      />
    </div>
  )
}

export default History