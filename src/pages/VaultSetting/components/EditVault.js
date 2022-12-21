import { useEffect, useState } from "react";
import _ from "lodash"
const mockedFees = [
    {
        vaultProductStorageFees: [
            {
                product: "Digital Gold",
                vaultStorageFeePerc: 3.2342
            },
            {
                product: "Digital Silver",
                vaultStorageFeePerc: 3.2342
            }
        ]
    },
    {
        minimumVaultStorageFees: [
            {
                currencyCode: "EUR",
                symbol: "€",
                flag: "/assets/images/European-Union.svg",
                fee: 2.55
            },
            {
                currencyCode: "GBP",
                symbol: "£",
                flag: "/assets/images/United-Kingdom.svg",
                fee: 2.55
            }
        ]
    }
]

const EditVault = ({ vault, resetVaultIndex }) => {

    const [fees, setFees] = useState([])
    const [originalFees, setOriginalFees] = useState([])

    const handlePerFeeChange = (feeindex, index, value) => {
        setFees((prevFees) => {
            const newFees = Object.assign([], prevFees)
            newFees[feeindex].vaultProductStorageFees[index].vaultStorageFeePerc = parseFloat(value)
            return newFees
        })
    }

    const handleMinFeeChange = (feeIndex, index, value) => {
        setFees((prevFee) => {
            const newFee = Object.assign([], prevFee)
            newFee[feeIndex].minimumVaultStorageFees[index].fee = parseFloat(value)
            return newFee
        })
    }

    const changedMiniFee = (feeIndex, index) =>(
        fees[feeIndex].minimumVaultStorageFees[index].fee === originalFees[feeIndex].minimumVaultStorageFees[index].fee
    )

    const changedPerFee = (feeIndex, index) =>(
        fees[feeIndex].vaultProductStorageFees[index].vaultStorageFeePerc === originalFees[feeIndex].vaultProductStorageFees[index].vaultStorageFeePerc
    )

    const cancel = () => {
        setFees(_.cloneDeep(originalFees))
        resetVaultIndex()
    }

    const save = () => {
        // save request
        console.log("data to save")
        console.log("Vault Id :", vault.id)
        console.log("Fees :", fees)
    }

    useEffect(()=> {
        setFees(mockedFees)
        setOriginalFees(_.cloneDeep(mockedFees))
    }, [vault])

    return (
        <div className="w-full">
            <div  className="w-full px-2 py-5 border-b border-b-gray-200 mt-2">
                Product Vault Storage Fees
                <div className="pb-5 overflow-x-auto">
                    <table className=" text-sm border-separate table-auto w-full border-spacing-y-4 border-spacing-x-4">
                        <thead className="font-bold text-gray-500 dark:text-gray-100 text-bold">
                        <tr className="text-center text-bold">
                            <th className="text-left">
                                Product
                            </th>
                            <th>
                                Fee %
                            </th>
                            <th>
                                Changed
                            </th>
                        </tr>
                        </thead>
                        <tbody className="font-bold text-gray-400 dark:text-gray-100">
                        {fees?.map((vaultfees, feeIndex) => vaultfees?.vaultProductStorageFees?.map((fee, index) => (
                            <tr key={index}>
                                <td>{fee.product}</td>
                                <td>
                                    <div className="w-full flex justify-center">
                                        <input
                                            className="bg-gray-200 text-black text-sm text-center w-24 px-2 py-1 rounded"
                                            type="number"
                                            min="0"
                                            step="0.0001"
                                            value={fee.vaultStorageFeePerc}
                                            onChange={(e) => handlePerFeeChange(feeIndex, index, e.target.value)}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className={ changedPerFee(feeIndex,index) ? "block w-5 h-5 rounded-full bg-green-500" : "block w-5 h-5 rounded-full bg-red-500"} ></div>
                                    </div>
                                </td>
                            </tr>
                        )))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div  className="w-full px-2 py-5 border-b border-b-gray-200 mt-2">
                Minimum Vault Storage Fees
                <div className="pb-5 overflow-x-auto">
                    <table className=" text-sm border-separate table-auto w-full border-spacing-y-4 border-spacing-x-4">
                        <thead className="font-bold text-gray-500 dark:text-gray-100 text-bold">
                        <tr className="text-center text-bold">
                            <th className="text-left">
                                Currency
                            </th>
                            <th>
                                Fee
                            </th>
                            <th>
                                Changed
                            </th>
                        </tr>
                        </thead>
                        <tbody className="font-bold text-gray-400 dark:text-gray-100">
                        {fees?.map((minimutfees, feeIndex) => minimutfees.minimumVaultStorageFees?.map((fee, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="w-full flex">
                                        <img className="w-5 h-5" alt={fee.currencyCode} src={fee.flag} />
                                        {fee.symbol}{fee.currencyCode}
                                    </div>
                                </td>
                                <td>
                                    <div className="w-full flex justify-center">
                                        <input
                                            className="bg-gray-200 text-black text-sm text-center w-24 px-2 py-1 rounded"
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={fee.fee}
                                            onChange={(e) => handleMinFeeChange(feeIndex, index, e.target.value)}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div
                                            className={
                                                changedMiniFee(feeIndex,index) ?
                                                    "block w-5 h-5 rounded-full bg-green-500"
                                                    : "block w-5 h-5 rounded-full bg-red-500"
                                            } />
                                    </div>
                                </td>
                            </tr>
                        )))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full flex justify-end mt-2">
                <button className="text-white bg-gray-800 rounded px-4 py-2" onClick={cancel}>Cancel</button>
                <button className="text-white bg-primary rounded px-4 py-2 mx-1" onClick={save}>save</button>
            </div>
        </div>
    )
}
export default EditVault