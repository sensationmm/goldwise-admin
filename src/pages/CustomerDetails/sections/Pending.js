import { Link } from "react-router-dom";
import DataTable from "../../../components/atoms/DataTable/DataTable"
import PendingOrdersDataStructure from '../../../dataStructures/pending-orders.json';
import PendingTransfersDataStructure from '../../../dataStructures/pending-transfers.json';
import MockPendingOrders from '../../../mocks/pending-orders.json';
import MockPendingTransfers from '../../../mocks/pending-transfers.json';
import { Button } from "@mui/material";
import { useState } from "react";

const Pending = () => {
  const [view, setView] = useState(0);

  const screens = [
    { label: 'Orders', headers: PendingOrdersDataStructure, data: MockPendingOrders },
    { label: 'Transfers', headers: PendingTransfersDataStructure, data: MockPendingTransfers }
  ];

  const headers = Object.keys(screens[view].headers).map(res => screens[view].headers[res].label);
  headers.push('');

  return (
    <div>
      <div className="flex gap-3 mb-5 relative top-[-20px]">
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

export default Pending