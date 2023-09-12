import { useParams } from "react-router-dom";
import BaseLayout from "../BaseLayout/BaseLayout";
import { Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { styleCell, styleHeader } from "../Reconciliation/SelectedPayments"

const OrderAccordion = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <tr className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} >
        <td className={styleCell}>2023-11-28 22:03:00 GMT</td>
        <td className={styleCell}>1,000 /oz</td>
        <td className={styleCell}>FXI3-12184547</td>
        <td className={styleCell}><i className={`fa text-sm fa-chevron-down transition-all ${!isOpen && 'rotate-180'}`} aria-hidden="true" /></td>
      </tr>
      {isOpen &&
        <tr>
          <td colSpan={4} className="px-12 py-8">
            <div className={`w-full grid grid-cols-2 gap-8`}>
              <div>
                <h4 className="mb-2">Fill Details</h4>
                <table className="w-full">
                  <tbody>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="mb-2">STP Details</h4>
                <table className="w-full">
                  <tbody>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                    <tr><td className={`${styleCell} font-bold`}>Field Title</td><td className={styleCell}>Value</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full grid grid-cols-[2fr_4fr] mt-8">
              <Typography className="font-bold">Raw STP Report</Typography>
              <Typography>asjdhgajshgdasjhgdajhg djash dgajsdg jahsdg akdkas dkasoqtrpqj dalhdqpid alkhdlasjlaskhd asjdhgajshgdasjhgdajhg djash dgajsdg jahsdg akdkas dkasoqtrpqj dalhdqpid alkhdlasjlaskhd </Typography>
            </div>
          </td>
        </tr>
      }
    </>
  )
}

const OrderDetails = (params) => {
  const { orderID } = useParams()
  const [orderView, setOrderView] = useState(0)
  
  return (
    <BaseLayout title={`Order Details: ${orderID}`} hasBack>
      <Tabs value={orderView} onChange={(_, newValue) => setOrderView(newValue)}>
        <Tab label="Order Details" />
        <Tab label="Order Fills" />
      </Tabs>

      {orderView === 0 && 
        <table className="w-full max-w-[500px] mt-12">
          <tbody>
            <tr>
              <th className={styleHeader()}>Title</th>
              <th className={styleHeader()}>Value</th>
            </tr>
            <tr>
              <td className={styleCell}>Field Title</td>
              <td className={styleCell}>Value</td>
            </tr>
            <tr>
              <td className={styleCell}>Field Title</td>
              <td className={styleCell}>Value</td>
            </tr>
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
          <OrderAccordion />
          <OrderAccordion />
          <OrderAccordion />
          <OrderAccordion />
          <OrderAccordion />
        </tbody>
      </table>
    }
    </BaseLayout>
  );
};

export default OrderDetails;
