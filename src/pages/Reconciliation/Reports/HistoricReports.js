import { useEffect, useState } from "react";
import MockHistoricReports from '../../../mocks/historicReports.json';
import DataStructure from '../../../dataStructures/reports.json'
import DataTable from "../../../components/atoms/DataTable/DataTable";
import { formatReportStatusCode } from "../../../utils/formatting";
import { Link } from "react-router-dom";

const HistoricReports = () => {
  const [reports, setReports] = useState([])

  useEffect(() => {
    const reportsStore = MockHistoricReports.data.map((rec) => {
      const processed = Object.keys(DataStructure).filter(key => !['taxGEUAB','revenueGEUAB'].includes(key)).map((key) => {
        if(DataStructure[key].dataType === 'reportStatus') {
          return formatReportStatusCode(rec[key])
        } else if(key === 'reportReference') {
          return <Link to='/report/123456789' className="text-blue-700 font-bold underline">{rec[key]}</Link>
        }
        return rec[key]
      })

      // processed.unshift(<Link to='/report/123456789' className="text-blue-700 font-bold hover:underline">View Report <i className="fa fa-arrow-right ml-2" /></Link>)

      return processed
    })

    setReports(reportsStore);

  }, []);

  const reportHeaders = Object.keys(DataStructure).map(res => DataStructure[res].label)
  // reportHeaders.unshift('Report Link')

  return (
    <>
      <div className={` justify-between mb-2`}>
        <h3 className="mb-1">Historic Reports</h3>
        <div className="text-sm">
          <span className="pr-1"><span className="font-bold">{reports.length}</span> Reports</span>
        </div>
      </div>

      <DataTable
        headers={reportHeaders}
        data={reports} 
        dataTypes={Object.keys(DataStructure).map(res => DataStructure[res].dataType)}
        maxPerPage={5}
      />
    </>
  )
}

export default HistoricReports