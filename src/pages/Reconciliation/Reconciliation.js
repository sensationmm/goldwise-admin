import { useEffect, useReducer } from "react";
import DataTable from "../../components/atoms/DataTable/DataTable";
import MockData from "../../mocks/reconciliation.json"

const Reconciliation = () => {
  const [state, setState] = useReducer(
    (preState, newState) => ({ ...preState, ...newState }),
    {
      rows: [],
      dataTypes: [],
    }
  );
  const { rows, dataTypes } = state;

  useEffect(() => {
    let data = [];
    let dataTypes = [];

     Object.keys(MockData.dataTypes).forEach((type) => dataTypes.push(MockData.dataTypes[type]))

    MockData.data.forEach((record) => {
      const processed = Object.keys(record).map((param) => record[param])
      data.push(processed)
    })

    setState({ rows: data, dataTypes });
  }, []);

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

            <div className="w-auto h-[100%] relative mx-auto rounded-sm border-gray-200 overflow-scroll">
              <DataTable
                headers={[
                  'ID',
                  'GW Entity',
                  'Internal Trade No',
                  'Order Type',
                  'Order Sub Type',
                  'Trade Time',
                  'Settlement Date',
                  'Supplier',
                  'CCY Pair',
                  'Weight',
                  'Actual Metal Cost',
                  'Integral Spread Amount',
                  'GW EHT Spread Amount',
                  'Total Final Spread Amount',
                  'Customer Product Amount',
                  'Customer Product Price',
                  'Fee',
                  'Tax',
                  'Customer Total',
                  'E-Money in Recon Wallet',
                  'STP Confirmed (B-K)',
                  'Fix OrderID',
                  'Fix ExecID',
                  '(Order Request / Pending) ClOrderID',
                  'Trade Capture Report',
                  'Integral Spread',
                  'Market Open Status',
                  'STP Price',
                ]}
                data={rows} 
                dataTypes={dataTypes}
                excludeFilters={['ID']}
              />
            </div>
          </div>
        </section>
      </main>
    </div >
  );
};

export default Reconciliation;
