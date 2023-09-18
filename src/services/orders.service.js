import dayjs from "dayjs"
import Request from "../helper/request"

const currentOrders = async (
  dateFrom,
  companyGuid,
  currencySymbol
) => {
  const path = process.env.REACT_APP_API_ENDPOINT + `/admin/trading-accounts/current-orders/`
  const request = new Request()

  return await request.postRequest(path, {
    dateFrom: dayjs(dateFrom).format('YYYY-MM-DDTHH:mm:ss') ,
    dateTo: dayjs().format('YYYY-MM-DDTHH:mm:ss') ,
    companyGuid,
    currencySymbol,
  })
}

const orderDetails = async (orderID) => {
  const path = process.env.REACT_APP_API_ENDPOINT + `/admin/trading-accounts/reports/STP/${orderID}/`
  const request = new Request()

  return await request.getRequest(path)
}

const orderFills = async (pendingOrderGuid) => {
  const path = process.env.REACT_APP_API_ENDPOINT + `/admin/trading-accounts/pending-orders/${pendingOrderGuid}/fills/`
  const request = new Request()

  return await request.getRequest(path)
}

const ordersService = {
  currentOrders,
  orderDetails,
  orderFills
}

export default ordersService
