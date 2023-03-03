import Request from "../helper/request"
const request = new Request()
const listVaultsAvailable = async () => {
    const path = process.env.REACT_APP_API_ENDPOINT + '/admin/vaults/'

    return await request.getRequest(path)
}
const getVaultFees = async (vaultGuid) => {
    const path = process.env.REACT_APP_API_ENDPOINT + `/admin/vaults/${vaultGuid}/fees/`

    return await request.getRequest(path)
}
const vaultService = {
    listVaultsAvailable,
    getVaultFees
}
export default vaultService

