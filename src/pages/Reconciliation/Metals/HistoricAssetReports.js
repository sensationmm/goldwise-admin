import { useEffect, useState } from "react";
import MockHistoricReports from '../../../mocks/historicAssetReports.json';
import DataStructure from '../../../dataStructures/asset-reports.json'
import DataTable from "../../../components/atoms/DataTable/DataTable";
import { formatReportStatusCode } from "../../../utils/number";

const HistoricAssetReports = () => {
  const [reports, setReports] = useState([])

  useEffect(() => {
    const reportsStore = MockHistoricReports.data.map((rec) => {
      const processed = Object.keys(DataStructure).map((key) => {
        if(DataStructure[key].dataType === 'reportStatus') {
          return formatReportStatusCode(rec[key])
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
        <h3 className="mb-1">Historic Asset Reports</h3>
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

export default HistoricAssetReports