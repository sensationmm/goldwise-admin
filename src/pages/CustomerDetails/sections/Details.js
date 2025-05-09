import Active from "../../../components/atoms/Active"
import ActiveLabel from "../../../components/atoms/ActiveLabel";
import { formatCurrencyLabel } from "../../../utils/number";
import { styleCellDefault, styleHeaderFilled } from "../../../utils/table"
import dateFormat from 'dateformat';

const Details = ({data}) => {
  const cellOverride = `${styleCellDefault} !text-xs text-left align-top`

  return (
    <div>
      <div className="relative inline-flex text-sm whitespace-nowrap items-center gap-[30px] mb-10 top-[-20px] font-bold">
        <div className="inline-flex items-center gap-[20px]">Account status <Active /></div>
        <div className="inline-flex items-center gap-[20px]">KYC Status <Active isActive={false} isPending /></div>
        <div className="inline-flex items-center gap-[20px]">Restricted <Active invert /></div>
        <div className="inline-flex items-center gap-[20px]">Monitored <Active invert /></div>
      </div>

      <table className="w-full">
        <tbody>
          <tr>
            <th className={`${styleHeaderFilled()} !bg-gray-400 uppercase`}  colSpan={6}>Personal Details</th>
          </tr>
          <tr>
            <td className={`${styleHeaderFilled()}`} colSpan={2}>Personal Details</td>
            <td className={`${styleHeaderFilled()}`} colSpan={2}>Residency</td>
            <td className={`${styleHeaderFilled()}`} colSpan={2}>Date of Birth &amp; Age</td>
          </tr>
          <tr>
            <td className={cellOverride}>Date of Birth &amp; Age</td>
            <td className={`${cellOverride} font-bold`}>{dateFormat(data?.customerDetails?.dateOfBirth, "dd mmmm yyyy")}</td>
            <td className={cellOverride}>Country of Residence</td>
            <td className={`${cellOverride} font-bold`}>{data?.address?.countryName ?? '-'}</td>
            <td className={cellOverride}>Citizenship</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}>Legal Gender</td>
            <td className={`${cellOverride} font-bold`}>-</td>
            <td className={cellOverride} rowSpan={3}>Residential Address</td>
            <td className={`${cellOverride} font-bold`} rowSpan={3}>
              {data?.address.flatNumber} {data?.address.number} {data?.address.buildingName}<br/> {data?.address.street} <br/> {data?.address.townCity} <br/> {data?.address.postCode}
            </td>
            <td className={cellOverride}>Tax Residency</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}>Contact Number</td>
            <td className={`${cellOverride} font-bold`}>{`${data?.customerDetails?.contactNumberDialingCode} ${data?.customerDetails?.contactNumber}` ?? '-'}</td>
            <td className={cellOverride}>Tax Residency</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}>Place of Birth</td>
            <td className={`${cellOverride} font-bold`}>-</td>
            <td className={cellOverride}>Tax Identification</td>
            <td className={`${cellOverride} font-bold`}>
              <div>{data?.customerDetails?.identificationNumberTypeText}</div>
              {data?.customerDetails?.identificationNumber}
            </td>
          </tr>
          <tr><td>&nbsp;</td></tr>
          <tr>
            <th className={`${styleHeaderFilled()} !bg-gray-400 uppercase`}  colSpan={6}>Risk Management</th>
          </tr>
          <tr>
            <td className={`${styleHeaderFilled()}`} colSpan={2}>Risk Management</td>
            <td className={`${styleHeaderFilled()}`} colSpan={2}>Account Restrictions</td>
            <td className={`${styleHeaderFilled()}`} colSpan={2}>Questionnaire</td>
          </tr>
          <tr>
            <td className={cellOverride}>Risk Score</td>
            <td className={`${cellOverride} font-bold`}>-</td>
            <td className={cellOverride}>Account Locked</td>
            <td className={`${cellOverride} font-bold`}>-</td>
            <td className={cellOverride}>Experience</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}>Monitored</td>
            <td className={`${cellOverride} font-bold`}><ActiveLabel isActive={data?.customerDetails.isGwMonitored} /></td>
            <td className={cellOverride}>Exceeded Login Attempts</td>
            <td className={`${cellOverride} font-bold`}>-</td>
            <td className={cellOverride}>Purpose</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}>Sanctioned</td>
            <td className={`${cellOverride} font-bold`}><ActiveLabel isActive={data?.customerDetails.isSanctioned} /></td>
            <td className={cellOverride}>Can Deposit</td>
            <td className={`${cellOverride} font-bold`}><ActiveLabel isActive={data?.restrictions.restrictDeposit} /></td>
            <td className={cellOverride}>Employment Status</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}>Politically Exposed</td>
            <td className={`${cellOverride} font-bold`}><ActiveLabel isActive={data?.customerDetails.isPep} /></td>
            <td className={cellOverride}>Can Buy</td>
            <td className={`${cellOverride} font-bold`}><ActiveLabel isActive={data?.restrictions.restrictBuy} /></td>
            <td className={cellOverride}>Source of Funds</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}>On Watchlist</td>
            <td className={`${cellOverride} font-bold`}><ActiveLabel isActive={data?.customerDetails.isWatchlist} /></td>
            <td className={cellOverride}>Can Sell</td>
            <td className={`${cellOverride} font-bold`}><ActiveLabel isActive={data?.restrictions.restrictSell} /></td>
            <td className={cellOverride}>Estimated Amount (p/m)</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}>Adverse Media</td>
            <td className={`${cellOverride} font-bold`}><ActiveLabel isActive={data?.customerDetails.isAdverseMedia} /></td>
            <td className={cellOverride}>Can Withdraw</td>
            <td className={`${cellOverride} font-bold`}><ActiveLabel isActive={data?.restrictions.restrictWithdraw} /></td>
            <td className={cellOverride}>Estimated Frequency (p/m)</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr><td>&nbsp;</td></tr>
          <tr>
            <th className={`${styleHeaderFilled()} !bg-gray-400 uppercase`}  colSpan={6}>Preferences</th>
          </tr>
          <tr>
            <td className={`${styleHeaderFilled()}`} colSpan={2}>Security &amp; Trading</td>
            <td className={`${styleHeaderFilled()}`} colSpan={2}>Security</td>
            <td className={`${styleHeaderFilled()}`} colSpan={2}>Email</td>
          </tr>
          <tr>
            <td className={cellOverride}>Metals &amp; Prices</td>
            <td className={`${cellOverride} font-bold`}>{formatCurrencyLabel(data?.tradingPreferences?.pricesCurrencyIsoCode)}</td>
            <td className={cellOverride}>Passcode Enabled</td>
            <td className={`${cellOverride} font-bold`}>-</td>
            <td className={cellOverride}>Marketing &amp; Promotions</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}>Portfolio Value</td>
            <td className={`${cellOverride} font-bold`}>{formatCurrencyLabel(data?.tradingPreferences?.portfolioCurrencyIsoCode)}</td>
            <td className={cellOverride}>Biometric Enabled</td>
            <td className={`${cellOverride} font-bold`}>-</td>
            <td className={cellOverride}>Security Notices</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}>Default Storage Fee</td>
            <td className={`${cellOverride} font-bold`}>-</td>
            <td className={cellOverride}>2FA Enabled</td>
            <td className={`${cellOverride} font-bold`}><ActiveLabel isActive={data?.securitySettings.is2faSet} isPlain /></td>
            <td className={cellOverride}>Funding Notices</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={`${cellOverride} font-bold`}></td>
            <td className={cellOverride}>2FA Mobile Number</td>
            <td className={`${cellOverride} font-bold`}>{data?.securitySettings.is2faSet ? `${data?.customerDetails?.contactNumberDialingCode} ${data?.customerDetails?.contactNumber}` ?? '-': '-'}</td>
            <td className={cellOverride}>Order Notices</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
          <tr>
            <td className={cellOverride}></td>
            <td className={`${cellOverride} font-bold`}></td>
            <td className={cellOverride}></td>
            <td className={`${cellOverride} font-bold`}></td>
            <td className={cellOverride}>Price Alerts</td>
            <td className={`${cellOverride} font-bold`}>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Details