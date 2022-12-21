import { useState, useEffect } from "react"
import EditVault from "./components/EditVault";

const VaultSetting = () => {
    const [vaults, setVaults] = useState([])
    const [selectedVault, setSelectedVault] = useState(-1)

    const fetchVaults = () => {
        fetch("/mock-data/vaults.json", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setVaults(data);
            });
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
        fetchVaults()
    }, [])


    return (
        <div className="flex w-full">
            <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
                <section
                    className="flex flex-col justify-start antialiased bg-gray-100 text-gray-800 min-h-screen p-4 dark:bg-gray-800 transition-all duration-500 ease-in-out">
                    <div className="h-full">
                        <div className="w-full mx-auto rounded-sm border-gray-200">
                            <header className="flex items-center px-4 py-4 dark:text-gray-100">
                                <i className="fa fa-cog" />
                                <h2 className="pl-6 uppercase font-bold text-gray-800 dark:text-gray-100">Admin - Vault Settings</h2>
                            </header>
                        </div>
                        <div className="w-full" >
                            <div className="card shadow-xs bg-white p-10 rounded">
                                {vaults.map((vault, index) => (
                                    <div className="shadow p-2" key={vault.id}>
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
                    </div>
                </section>
            </main>
        </div>
    )
}

export default VaultSetting