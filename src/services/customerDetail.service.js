import Request from "../helper/request"

const saveLockAccountStatus = async (isLocked, reason, customerGuid) => {
    const path = process.env.REACT_APP_API_ENDPOINT + `/admin/customers/${customerGuid}/trading-restrictions/locked/set/`
    const request = new Request()

    return await request.postRequest(path, {
        isLocked: isLocked,
        logMessage: reason
    })
}

const saveMonitorCustomerStatus = async (isGWMonitored, reason, customerGuid) => {
    const path = process.env.REACT_APP_API_ENDPOINT + `/admin/customers/${customerGuid}/trading-restrictions/gw-monitor/set/`
    const request = new Request()

    return await request.postRequest(path, {
        isGWMonitored: isGWMonitored,
        logMessage: reason
    })
}

const saveTradingRestrictions = async (restrictDeposit, restrictBuy, restrictSell, restrictConvert, restrictWithdraw, reason, customerGuid) => {
    const path = process.env.REACT_APP_API_ENDPOINT + `/admin/customers/${customerGuid}/trading-restrictions/set/`
    const request = new Request()

    return await request.postRequest(path, {
        restrictBuy: restrictBuy,
        restrictSell: restrictSell,
        restrictDeposit: restrictDeposit,
        restrictWithdraw: restrictWithdraw,
        restrictConvert: restrictConvert,
        logMessage: reason
    })
}

const setAmlFailed = async (reason, customerGuid) => {
    const path = process.env.REACT_APP_API_ENDPOINT + `/admin/customers/${customerGuid}/trading-restrictions/aml/failed-manual/`
    const request = new Request()

    return await request.postRequest(path, {
        logMessage: reason
    })
}

const setAmlPassed = async (reason, customerGuid) => {
    const path = process.env.REACT_APP_API_ENDPOINT + `/admin/customers/${customerGuid}/trading-restrictions/aml/passed-manual/`
    const request = new Request()

    return await request.postRequest(path, {
        logMessage: reason
    })
}

const resetAml = async (reason, customerGuid) => {
    const path = process.env.REACT_APP_API_ENDPOINT + `/admin/customers/${customerGuid}/trading-restrictions/aml/reset/`
    const request = new Request()

    return await request.postRequest(path, {
        logMessage: reason
    })
}

const getCustomerDetails = async (customerGuid) => {
    const path = process.env.REACT_APP_API_ENDPOINT + `/admin/customers/${customerGuid}/get-customer-details/`
    const request = new Request()

    return await request.getRequest(path)
}

const getAllCustomers = async (searchParam) => {
    const path = process.env.REACT_APP_API_ENDPOINT + `/admin/customers/search/`
    const request = new Request()

    return await request.postRequest(path, {
        search: searchParam
    })
}

const customerDetailService = {
    saveLockAccountStatus,
    saveMonitorCustomerStatus,
    saveTradingRestrictions,
    setAmlFailed,
    setAmlPassed,
    resetAml,
    getCustomerDetails,
    getAllCustomers
}

export default customerDetailService
