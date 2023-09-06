import React, { useEffect, useState } from "react";
import vaultService from "../../services/vaultService";
import EditVault from "./components/EditVault";
import {hideLoader, showLoader} from "../../reducers/loaderSlice.reducer";
import {useDispatch} from "react-redux";
import BaseLayout from "../BaseLayout/BaseLayout";

const VaultSetting = () => {
    const dispatch = useDispatch()
    const [vaults, setVaults] = useState([])
    const [selectedVault, setSelectedVault] = useState(-1)

    const getVaults = async () => {
        try {
            dispatch(showLoader())
            const vaults = await vaultService.listVaultsAvailable();
            setVaults(vaults.data.response);
          } catch (e) {
            //todo: display error if happen
            console.log(e)
          } finally {
            dispatch(hideLoader())
          }
    }

    const handleVaultChange = (index) => {
        if(index === selectedVault) {
            setSelectedVault(-1)
        } else {
            setSelectedVault(index)
        }

    }

    const resetVaultIndex = () => {
        setSelectedVault(-1)
    }
    
    useEffect(() => {
        getVaults()
    }, [])


    return (
      <BaseLayout title="Admin - Vault Settings">
        <div className="w-full" >
            <div className="card shadow-xs bg-white p-10 rounded">
                {vaults && vaults.map((vault, index) => (
                    <div className="shadow p-2" key={index}>
                        <div className="w-full grid grid-cols-12">
                            <div className="col-span-10">{vault.vaultName}</div>
                            <div className="col-span-2 border-l border-gray-200 pl-4">
                                <button
                                    className="px-4 py-1 bg-white text-black border border-gray-400 hover:bg-black hover:text-white focus:bg-gray-200 focus:text-gray-800"
                                    onClick={() => handleVaultChange(index)}
                                >Edit</button>
                            </div>
                        </div>
                        {
                            index === selectedVault ? <EditVault vault={vault} resetVaultIndex={resetVaultIndex}/> : <></>
                        }
                    </div>
                ))}
            </div>
        </div>
      </BaseLayout>
    )
}

export default VaultSetting