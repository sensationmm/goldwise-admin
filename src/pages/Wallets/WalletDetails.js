import { useEffect, useReducer } from "react";
import DataTable from "../../components/atoms/DataTable/DataTable";
import MockLedgers from "../../mocks/ledgers.json"
import BaseLayout from "../BaseLayout/BaseLayout";
import LedgerDataStructure from '../../dataStructures/ledgers.json';
import { formatWeight } from "../../utils/formatting";

const WalletDetails = () => {
  const [state, setState] = useReducer(
    (preState, newState) => ({ ...preState, ...newState }),
    {
      trades: [],
      tradesTypes: [],
      orders: [],
      ordersTypes: [],
      payments: []
    }
  );
  const { trades } = state;

  useEffect(() => {
    let trades = [];

    MockLedgers.data.forEach((record) => {
      const processed = Object.keys(record).map((param) => record[param])
      trades.push(processed)
    })

    setState({ trades });

  }, []);

  return (
    <BaseLayout
      title="GHL | Recon | £GBP"
      hasBack
    >
      <div className="grid grid-cols-[60%_1fr_1fr]">
        <div />
        <div className="font-bold text-xs p-4">Current Balance</div>
        <div className="font-bold text-xs p-4">{formatWeight(0)}</div>
      </div>

      <DataTable
        headers={Object.keys(LedgerDataStructure).map(res => LedgerDataStructure[res].label)}
        data={trades} 
        dataTypes={Object.keys(LedgerDataStructure).map(res => LedgerDataStructure[res].dataType)}
        excludeColumns={['ID']}
        maxPerPage={5}
        paginate={false}
      />

      <div className="grid grid-cols-[60%_1fr_1fr]">
        <div />
        <div className="font-bold text-xs border-b p-4 border-gray-200">Opening Balance</div>
        <div className="font-bold text-xs border-b p-4 border-gray-200">{formatWeight(0)}</div>
      </div>
    </BaseLayout>
  );
};

export default WalletDetails;
