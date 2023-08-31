import DataTable from "../../components/atoms/DataTable/DataTable";
import MockData from "../../mocks/reconciliation.json"
import { formatCurrency } from "../../utils/number";

const Reconciliation = () => {
  return (
    <div className="flex w-full">
      <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
        <section className="flex flex-col justify-start antialiased bg-gray-100 text-gray-800 min-h-screen p-4 dark:bg-gray-800 transition-all duration-500 ease-in-out">
          <div className="h-full w-full">
            <header className="flex items-center px-4 py-4 dark:text-gray-100">
              <i
                className="fa fa-bar-chart text-2xl"
                aria-hidden="true"
              ></i>
              <h2 className="pl-6 uppercase font-bold text-gray-800 dark:text-gray-100">
                Reconciliation
              </h2>
            </header>

            <div className="w-auto relative mx-auto rounded-sm border-gray-200 overflow-scroll">
              <DataTable
                defaultWidth={150}
                columns={[
                    { field: Object.keys(MockData.data[0])[0], headerName: 'ID',  },
                    { field: Object.keys(MockData.data[0])[1], headerName: 'GW Entity' },
                    { field: Object.keys(MockData.data[0])[2], headerName: 'Internal Trade No' },
                    { field: Object.keys(MockData.data[0])[3], headerName: 'Order Type' },
                    { field: Object.keys(MockData.data[0])[4], headerName: 'Order Sub Type' },
                    { field: Object.keys(MockData.data[0])[5], headerName: 'Trade Time', width: 230 },
                    { field: Object.keys(MockData.data[0])[6], headerName: 'Settlement Date', width: 230 },
                    { field: Object.keys(MockData.data[0])[7], headerName: 'Supplier' },
                    { field: Object.keys(MockData.data[0])[8], headerName: 'CCY Pair' },
                    { field: Object.keys(MockData.data[0])[9], headerName: 'Weight' },
                    { field: Object.keys(MockData.data[0])[10], headerName: 'Actual Metal Cost', valueFormatter: (params) => formatCurrency(params.value) },
                    { field: Object.keys(MockData.data[0])[11], headerName: 'Integral Spread Amount', valueFormatter: (params) => formatCurrency(params.value) },
                    { field: Object.keys(MockData.data[0])[12], headerName: 'GW EHT Spread Amount', valueFormatter: (params) => formatCurrency(params.value) },
                    { field: Object.keys(MockData.data[0])[13], headerName: 'Total Final Spread Amount', valueFormatter: (params) => formatCurrency(params.value) },
                    { field: Object.keys(MockData.data[0])[14], headerName: 'Customer Product Amount', valueFormatter: (params) => formatCurrency(params.value) },
                    { field: Object.keys(MockData.data[0])[15], headerName: 'Customer Product Price', valueFormatter: (params) => formatCurrency(params.value) },
                    { field: Object.keys(MockData.data[0])[16], headerName: 'Fee', valueFormatter: (params) => formatCurrency(params.value) },
                    { field: Object.keys(MockData.data[0])[17], headerName: 'Tax', valueFormatter: (params) => formatCurrency(params.value) },
                    { field: Object.keys(MockData.data[0])[18], headerName: 'Customer Total', valueFormatter: (params) => formatCurrency(params.value) },
                    { field: Object.keys(MockData.data[0])[19], headerName: 'E-Money in Recon Wallet', width: 250 },
                    { field: Object.keys(MockData.data[0])[20], headerName: 'STP Confirmed (B-K)' },
                    { field: Object.keys(MockData.data[0])[21], headerName: 'Fix OrderID' },
                    { field: Object.keys(MockData.data[0])[22], headerName: 'Fix ExecID' },
                    { field: Object.keys(MockData.data[0])[23], headerName: '(Order Request / Pending) ClOrderID', width: 250 },
                    { field: Object.keys(MockData.data[0])[24], headerName: 'Trade Capture Report', width: 250 },
                    { field: Object.keys(MockData.data[0])[25], headerName: 'Integral Spread' },
                    { field: Object.keys(MockData.data[0])[26], headerName: 'Market Open Status' },
                    { field: Object.keys(MockData.data[0])[27], headerName: 'STP Price', valueFormatter: (params) => formatCurrency(params.value) },
                  ]}
                rows={MockData.data}
              />
            </div>
          </div>
        </section>
      </main>
    </div >
  );
};

export default Reconciliation;
