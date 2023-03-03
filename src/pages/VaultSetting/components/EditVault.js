import { useEffect, useState } from "react";
import _ from "lodash"
import vaultService from "../../../services/vaultService";
import {hideLoader, showLoader} from "../../../reducers/loaderSlice.reducer";
import {useDispatch} from "react-redux";

const EditVault = ({ vault, resetVaultIndex }) => {

    const dispatch = useDispatch()
    const [fees, setFees] = useState([])
    const [originalFees, setOriginalFees] = useState([])
    const [vaultProductStorageFees, setVaultProductStorageFees] = useState([])
    const [vaultMinimumStorageFees, setVaultMinimumStorageFees] = useState([])

    const getVaultFees = async () => {
        try {
            dispatch(showLoader())
            const vaultfees = await vaultService.getVaultFees(vault.vaultGuid)
            setOriginalFees(vaultfees.data.response)
            setFees(vaultfees.data.response)
            setVaultProductStorageFees(vaultfees.data.response.vaultProductStorageFees)
            setVaultMinimumStorageFees(vaultfees.data.response.vaultMinimumStorageFees)
          } catch (e) {
            //todo: display error if happen
            console.log(e)
          } finally {
            dispatch(hideLoader())
          }
    }

    const handlePerFeeChange = (feeindex, index, value) => {
        setFees((prevFees) => {
            const newFees = Object.assign([], prevFees)
            newFees.vaultProductStorageFees[index].vaultStorageFeePerc = parseFloat(value)
            return newFees
        })
    }

    const handleMinFeeChange = (feeIndex, index, value) => {
        setFees((prevFee) => {
            const newFee = Object.assign([], prevFee)
            newFee.vaultMinimumStorageFees[index].fee = parseFloat(value)
            return newFee
        })
    }

    const changedMiniFee = (feeIndex, index) =>(
        fees.vaultMinimumStorageFees[index].fee === originalFees.vaultMinimumStorageFees[index].fee
    )

    const changedPerFee = (feeIndex, index) =>(
        fees.vaultProductStorageFees[index].vaultStorageFeePerc === originalFees.vaultProductStorageFees[index].vaultStorageFeePerc
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
        getVaultFees()
    }, [])

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
                        {vaultProductStorageFees && vaultProductStorageFees.map((fee, index) => (
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
                                            onChange={(e) => handlePerFeeChange(resetVaultIndex, index, e.target.value)}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className={ changedPerFee(resetVaultIndex,index) ? "block w-5 h-5 rounded-full bg-green-500" : "block w-5 h-5 rounded-full bg-red-500"} ></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
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
                        {vaultMinimumStorageFees && vaultMinimumStorageFees.map((fee, index) => (
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
                                            onChange={(e) => handleMinFeeChange(resetVaultIndex, index, e.target.value)}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div
                                            className={
                                                changedMiniFee(resetVaultIndex,index) ?
                                                    "block w-5 h-5 rounded-full bg-green-500"
                                                    : "block w-5 h-5 rounded-full bg-red-500"
                                            } />
                                    </div>
                                </td>
                            </tr>
                        ))}
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