import Request from "../helper/request"

const request = new Request()

const saveLockAccountStatus = async (isLocked, reason, customerGuid) => {
    return await request.postRequest(`/admin/customers/${customerGuid}/trading-restrictions/locked/set/`, {
        isLocked: isLocked,
        logMessage: reason
    })
}

const saveMonitorCustomerStatus = async (isGWMonitored, reason, customerGuid) => {
    return await request.postRequest(`/admin/customers/${customerGuid}/trading-restrictions/gw-monitor/set/`, {
        isGWMonitored: isGWMonitored,
        logMessage: reason
    })
}

const saveTradingRestrictions = async (canDeposit, canBuy, canSell, canConvert, canWithdraw, reason, customerGuid) => {
    return await request.postRequest(`/admin/customers/${customerGuid}/trading-restrictions/set/`, {
        preventBuy: canBuy,
        preventSell: canSell,
        preventDeposit: canDeposit,
        preventWithdraw: canWithdraw,
        preventConvert: canConvert,
        logMessage: reason
    })
}

const setAmlFailed = async (reason, customerGuid) => {
    return await request.postRequest(`/admin/customers/${customerGuid}/trading-restrictions/aml/failed-manual/`, {
        logMessage: reason
    })
}

const setAmlPassed = async (reason, customerGuid) => {
    return await request.postRequest(`/admin/customers/${customerGuid}/trading-restrictions/aml/passed-manual/`, {
        logMessage: reason
    })
}

const resetAml = async (reason, customerGuid) => {
    return await request.postRequest(`/admin/customers/${customerGuid}/trading-restrictions/aml/reset/`, {
        logMessage: reason
    })
}


const customerDetailService = {
    saveLockAccountStatus,
    saveMonitorCustomerStatus,
    saveTradingRestrictions,
    setAmlFailed,
    setAmlPassed,
    resetAml
}

export default customerDetailService
