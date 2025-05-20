import { useParams } from "react-router-dom";
import BaseLayout from "../BaseLayout/BaseLayout";
import { Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { styleCell, styleHeader } from "../../utils/table"
import ordersService from "../../services/orders.service";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../reducers/loaderSlice.reducer";
import dayjs from "dayjs";

const OrderAccordion = ({ fill }) => {
  const [isOpen, setIsOpen] = useState(false)

  const cellOverride = `${styleCell} !text-[12px]`

  return (
    <>
      <tr className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} >
        <td className={styleCell}>{dayjs(fill.fillDate).format('DD/MM/YYYY HH:mm:ss')}</td>
        <td className={styleCell}>{fill.weight}</td>
        <td className={styleCell}>{fill.tradeCaptureReport}</td>
        <td className={styleCell}><i className={`fa text-sm fa-chevron-down transition-all ${!isOpen && 'rotate-180'}`} aria-hidden="true" /></td>
      </tr>
      {isOpen &&
        <tr>
          <td colSpan={4} className="px-12 py-8">
            <div className={`grid grid-cols-2 gap-8`}>
              <div>
                <h4 className="mb-2">Fill Details</h4>
                <table>
                  <tbody>
                  {fill.orderFills.map((item, itemCount) => (
                    <tr key={`fill-${itemCount}`}><td className={`${cellOverride} font-bold`}>{item.label}</td>
                    <td className={cellOverride}>{item.value}</td></tr>
                  ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="mb-2">STP Details</h4>
                <table>
                  <tbody>
                  {fill.ehtFills.map((item, itemCount) => (
                    <tr key={`stp-${itemCount}`}><td className={`${cellOverride} font-bold`}>{item.label}</td>
                    <td className={cellOverride}>{item.value !== '' ? item.value : <span>&nbsp;</span>}</td></tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full grid grid-cols-[2fr_4fr] mt-8">
              <Typography className="font-bold">Raw STP Report</Typography>
              <Typography>???</Typography>
            </div>
          </td>
        </tr>
      }
    </>
  )
}

const OrderDetails = (params) => {
  const dispatch = useDispatch()
  const { orderID, pendingOrderGuid } = useParams()
  const [orderView, setOrderView] = useState(0)

  const [orderDetails, setOrderDetails] = useState({})
  const [orderFills, setOrderFills] = useState({})

  const getOrderDetails = async () => {
    try {
      dispatch(showLoader())
      const order = await ordersService.orderDetails(orderID)
      setOrderDetails(order.data.response)
    } catch (e) {
      //todo: display error if happen
      console.log(e)
    } finally {
      dispatch(hideLoader())
    }
  }

  const getOrderFills = async () => {
    try {
      dispatch(showLoader())
      const orderFills = await ordersService.orderFills(pendingOrderGuid)
      const orderFill = {
        fillDate: orderFills.data.response.dateCreated,
        weight: orderFills.data.response.weightAmount,
        tradeCaptureReport: orderFills.data.response.fixExecID,
        orderFills: [],
        ehtFills: []
      }
      
      Object.keys(orderFills.data.response).forEach((key) => {
        if(key.substr(key.length - 3) !== 'EHT') {
          orderFill.orderFills.push({ label: key, value: orderFills.data.response[key]})

          if(orderFills.data.response[`${key}EHT`] !== undefined) {
            orderFill.ehtFills.push({ label: key, value: orderFills.data.response[`${key}EHT`]})
          } else {
            orderFill.ehtFills.push({ label: '', value: ''})
          }
        }
      })
      setOrderFills(orderFill)
    } catch (e) {
      //todo: display error if happen
      console.log(e)
    } finally {
      dispatch(hideLoader())
    }
  }

  useEffect(() => {
    getOrderDetails()
    getOrderFills()
  }, [])

  const cellOverride = `${styleCell} !whitespace-normal overflow-scroll`

  return (
    <BaseLayout title={`Order Details: ${orderID}`} backUrl={'/orders'}>
      <Tabs value={orderView} onChange={(_, newValue) => setOrderView(newValue)}>
        <Tab label="Order Details" />
        <Tab label="Order Fills" />
      </Tabs>

      {orderView === 0 && 
        <table className="w-full max-w-[500px] mt-12">
          <tbody>
            <tr>
              <th className={styleHeader(cellOverride)}>Title</th>
              <th className={styleHeader(cellOverride)}>Value</th>
            </tr>
            {Object.keys(orderDetails).map((row, rowCount) => (
              <tr key={`order-details-${rowCount}`}>
              <td className={cellOverride}>{row}</td>
              <td className={cellOverride}>{orderDetails[row]}</td>
            </tr>
            ))}
          </tbody>
        </table>
    }
      
    {orderView === 1 && 
      <table className="w-full mt-12">
        <thead>
          <tr>
            <th className={styleHeader()}>Fill Date &amp; Time</th>
            <th className={styleHeader()}>Traded Weight</th>
            <th className={styleHeader()}>Trade Capture Report</th>
            <th className={styleHeader()}></th>
          </tr>
        </thead>
        <tbody>
          <OrderAccordion fill={orderFills} />
        </tbody>
      </table>
    }
    </BaseLayout>
  );
};

export default OrderDetails;
