import { Button } from "@mui/material";
import DataTable from "../../../components/atoms/DataTable/DataTable"
import LogDataStructure from '../../../dataStructures/log.json';
import MockLog from '../../../mocks/log.json';

const Log = () => {
  const headers = Object.keys(LogDataStructure).map(res => LogDataStructure[res].label);
  headers.push('');

  return (
    <div>
      <div className="absolute right-0"><Button variant="contained" disabled>Add New Comment</Button></div>
      <h2 className="mb-5">Admin Activity Log</h2>


      <DataTable
        headers={headers}
        data={MockLog.data.map((rec) => {
          const processed = Object.keys(LogDataStructure).map((key) => {
            return rec[key]
          })

          processed.push(<i class="fa-solid fa-pen-to-square"></i>);

          return processed
        })} 
        dataTypes={Object.keys(LogDataStructure).map(res => LogDataStructure[res].dataType)}
      />
    </div>
  )
}

export default Log