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
    dateFrom,
    dateTo,
    companyGuid,
    currencySymbol,
  })
}

const reconciliationService = {
  getEntities,
  getCurrencies,
  generateReport
}

export default reconciliationService
