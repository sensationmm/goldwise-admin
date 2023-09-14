import dayjs from "dayjs"
import Request from "../helper/request"

const getEntities = async () => {
  const path = process.env.REACT_APP_API_ENDPOINT + `/admin/reconciliation/companies/`
  const request = new Request()

  return await request.getRequest(path)
}

const getCurrencies = async () => {
  const path = process.env.REACT_APP_API_ENDPOINT + `/admin/reconciliation/currencies/`
  const request = new Request()

  return await request.getRequest(path)
}

const generateReport = async (
  dateFrom,
  dateTo,
  companyGuid,
  currencySymbol
) => {
  const path = process.env.REACT_APP_API_ENDPOINT + `/admin/reconciliation/generate/`
  const request = new Request()

  return await request.postRequest(path, {
    dateFrom: dayjs(dateFrom).format('YYYY-MM-DDTHH:mm:ss') ,
    dateTo: dayjs(dateTo).format('YYYY-MM-DDTHH:mm:ss') ,
    companyGuid,
    currencySymbol,
  })
}

const addTradeToReport = async (
  batchID,
  trades
) => {
  const path = process.env.REACT_APP_API_ENDPOINT + `/admin/reconciliation/generate/${batchID}/add-item/`
  const request = new Request()

  return await request.postRequest(path, {
    itemIds: trades
  })
}

const submitReport = async (batchID) => {
  const path = process.env.REACT_APP_API_ENDPOINT + `/admin/reconciliation/generate/${batchID}/submit/`
  const request = new Request()

  return await request.postRequest(path)
}

const reconciliationService = {
  addTradeToReport,
  generateReport,
  getCurrencies,
  getEntities,
  submitReport
}

export default reconciliationService
