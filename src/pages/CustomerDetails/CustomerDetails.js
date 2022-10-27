import {Link} from 'react-router-dom'
import Header from '../../components/molecules/Header'
import Sidebar from '../../components/molecules/Sidebar'
import Modal from "../../components/atoms/Modal";
import React, {useState, useEffect, useLayoutEffect} from "react";
import LockAccountModal from "./Modals/LockAccountModal";
import MonitorCustomerModal from "./Modals/MonitorCustomerModal";
import TradingRestrictionsModal from "./Modals/TradingRestrictionsModal";
import SetAmlPassedModal from "./Modals/SetAmlPassedModal";
import SetAmlFailedModal from "./Modals/SetAmlFailedModal";
import ResetAmlModal from "./Modals/ResetAmlModal";
import customerDetailService from '../../services/customerDetail.service';
import { useParams } from "react-router-dom";
import ReactCountryFlag from 'react-country-flag';
import dateFormat from 'dateformat';
import {useDispatch} from "react-redux";
import {hideLoader, showLoader} from "../../reducers/loaderSlice.reducer";

const CustomerDetails = () => {
    const dispatch = useDispatch()

    const { customerGuid } = useParams()
    const [customer, setCustomer] = useState()
    const [dateOfBirth, setDateOfBirth] = useState()

    const [monitorCustomerModal, setMonitorCustomerModal] = useState(false)
    const [lockAccountModal, setLockAccountModal] = useState(false)
    const [tradingRestrictionsModal, setTradingRestrictionsModal] = useState(false)
    const [setAmlPassedModal, setSetAmlPassedModal] = useState(false)
    const [setAmlFailedModal, setSetAmlFailedModal] = useState(false)
    const [resetAmlModal, setResetAmlModal] = useState(false)

    const [successMessage, setSuccessMessage] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const [lockAccountStatus, setLockAccountStatus] = useState(true);
    const [activeAccountStatus, setActiveAccountStatus] = useState(true);
    const [verifiedEmailAccount, setVerifiedEmailAccount] = useState(true);
    const [monitorCustomerStatus, setMonitorCustomer] = useState(true);
    const [tradingRestrictions, setTradingRestrictions] = useState({
        restrictDeposit: false,
        restrictBuy: false,
        restrictSell: false,
        restrictConvert: false,
        restrictWithdraw: false,
    });
    const [amlStatus, setAmlStatus] = useState({
        overallStatusID: 1,
        overallStatusText: "Not Started"
    });

    const getCustomer = async () => {
        try {
            dispatch(showLoader())
            const customer = await customerDetailService.getCustomerDetails(customerGuid);
            const customerDetailData = customer.data.response;
            setCustomer(customerDetailData);
            setLockAccountStatus(customerDetailData.customerDetails.isLocked)
            setActiveAccountStatus(customerDetailData.customerDetails.isActive)
            setVerifiedEmailAccount(customerDetailData.customerDetails.isEmailVerify)
            setDateOfBirth(new Date(customerDetailData.customerDetails.dateOfBirth));
            setTradingRestrictions(customerDetailData.restrictions)
            setMonitorCustomer(customerDetailData.customerDetails.isGwMonitored)
            setAmlStatus({
                overallStatusID: customerDetailData.overallStatusID,
                overallStatusText: customerDetailData.overallStatusText
            })
        } catch (e) {
            //todo: display error if happen
            console.log(e)
        } finally {
            dispatch(hideLoader())
        }
    }

    useLayoutEffect(() => {
        getCustomer()
    }, [])


    useEffect(() => {
        if (successMessage) {
            setTimeout(() => setSuccessMessage(null), 2000)
        }
    }, [successMessage])

    const saveLockAccountStatus = async (value, reason) => {
        try {
            await customerDetailService.saveLockAccountStatus(value, reason, customerGuid)
            setLockAccountStatus(value)
            setSuccessMessage(customer.customerDetails.forename + " account locked successfully!")
        } catch (e) {
            //todo: catch error
        } finally {
            setLockAccountModal(false)
        }
    }

    const saveMonitorCustomerStatus = async (value, reason) => {
        try {
            await customerDetailService.saveMonitorCustomerStatus(value, reason, customerGuid)
            setMonitorCustomer(value)
            setSuccessMessage(customer.customerDetails.forename + " account is set to “Monitor” successfully!")
        } catch (e) {
            console.log(e)
            //todo: catch error
        } finally {
            setMonitorCustomerModal(false)
        }
    }

    const saveTradingRestrictions = async (restrictDeposit, restrictBuy, restrictSell, restrictConvert, restrictWithdraw, reason) => {
        try {
            await customerDetailService.saveTradingRestrictions(restrictDeposit, restrictBuy, restrictSell, restrictConvert, restrictWithdraw, reason, customerGuid)
            setTradingRestrictions({
                restrictDeposit: restrictDeposit,
                restrictBuy: restrictBuy,
                restrictSell: restrictSell,
                restrictConvert: restrictConvert,
                restrictWithdraw: restrictWithdraw
            })
            setSuccessMessage(customer.customerDetails.forename + " account is restricted successfully!")
        } catch (e) {
            //todo: catch error
        } finally {
            setTradingRestrictionsModal(false)
        }
    }

    const setAmlFailed = async (reason) => {
        try {
            await customerDetailService.setAmlFailed(reason, customerGuid)
            setAmlStatus({
                overallStatusID: 10,
                overallStatusText: "Failed manually"
            })
            setSuccessMessage("AML status set to “FAILED” successfully!")
        } catch (e) {
            //todo: catch error
        } finally {
            setSetAmlFailedModal(false)
        }
    }

    const setAmlPassed = async (reason) => {
        try {
            await customerDetailService.setAmlPassed(reason, customerGuid)
            setAmlStatus({
                overallStatusID: 9,
                overallStatusText: "Passed manually"
            })
            setSuccessMessage("AML status set to “PASSED” successfully!")
        } catch (e) {
            //todo: catch error
        } finally {
            setSetAmlPassedModal(false)
        }
    }

    const resetAml = async (reason) => {
        try {
            await customerDetailService.resetAml(reason, customerGuid)
            setAmlStatus({
                overallStatusID: 1,
                overallStatusText: "Not Started"
            })
            setSuccessMessage("AML reset successfully!")
        } catch (e) {
            //todo: catch error
        } finally {
            setResetAmlModal(false)
        }
    }

    return (
        <div>
            {lockAccountModal && <Modal hidePopup={() => setLockAccountModal(false)} title="Lock Account">
                <LockAccountModal
                    lockAccountCurrentStatus={lockAccountStatus}
                    hidePopup={() => setLockAccountModal(false)}
                    saveLockAccountStatus={saveLockAccountStatus}
                />
            </Modal>
            }
            {monitorCustomerModal && <Modal hidePopup={() => setMonitorCustomerModal(false)} title="Monitor Account">
                <MonitorCustomerModal
                    monitorCustomerCurrentStatus={monitorCustomerStatus}
                    saveMonitorCustomerStatus={saveMonitorCustomerStatus}
                    hidePopup={() => setMonitorCustomerModal(false)}
                />
            </Modal>
            }

            {tradingRestrictionsModal &&
            <Modal hidePopup={() => setTradingRestrictionsModal(false)} title="Restrict Account">
                <TradingRestrictionsModal
                    currentTradingRestrictions={tradingRestrictions}
                    saveTradingRestrictions={saveTradingRestrictions}
                    hidePopup={() => setTradingRestrictionsModal(false)}
                />
            </Modal>
            }

            {setAmlPassedModal &&
            <Modal hidePopup={() => setSetAmlPassedModal(false)} title="Set AML Status to Passed?">
                <SetAmlPassedModal
                    setAmlPassed={setAmlPassed}
                    hidePopup={() => setSetAmlPassedModal(false)}
                />
            </Modal>
            }

            {setAmlFailedModal &&
            <Modal hidePopup={() => setSetAmlFailedModal(false)} title="Set AML Status to Failed?">
                <SetAmlFailedModal
                    setAmlFailed={setAmlFailed}
                    hidePopup={() => setSetAmlFailedModal(false)}
                />
            </Modal>
            }

            {resetAmlModal &&
            <Modal hidePopup={() => setResetAmlModal(false)} title="Reset AML Status">
                <ResetAmlModal
                    resetAml={resetAml}
                    hidePopup={() => setResetAmlModal(false)}
                />
            </Modal>
            }

            {/* TODO: add template */}
            <Header/>
            <div className="flex h-full">
                <Sidebar/>
                <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
                    <section
                        className="flex flex-col justify-center antialiased bg-gray-100 text-gray-800 min-h-screen p-4 dark:bg-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out">
                        <div className="py-4 px-4 sm:px-6 md:px-8 md:py-5">
                            {/* TODO: Create a  Breadcrumbs component */}
                            <ul className="flex items-center">
                                <svg className="text-gray-500 dark:text-gray-100" width="20" fill="currentColor"
                                     height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                                <li className="flex items-center pl-2">
                                    <Link to=''
                                          className="text-xs text-gray-500 dark:text-gray-100 hover:text-primary underline decoration-1">Customers</Link>
                                    <span className="px-1 text-gray-500">&gt;</span>
                                </li>
                                <li className="flex items-center">
                                    <Link to=''
                                          className="text-xs text-gray-500 dark:text-gray-100 hover:text-primary underline decoration-1">Search
                                        Result</Link>
                                    <span className="px-1 text-gray-500">&gt;</span>
                                </li>
                                <li className="text-xs text-gray-500 dark:text-gray-100">{customer && (<>{customer.customerDetails.forename} {customer.customerDetails.surname}</>)}</li>
                            </ul>
                        </div>
                        {successMessage &&
                        <div className="space-y-4 pb-5">
                            <div className="pl-3 w-full pt-3 pb-3 bg-[#5ed197] shadow rounded">
                                <div className="flex flex-row place-content-between content-center">
                                    <div className="flex-shrink-0 mr-2 sm:mr-3 flex flex-row content-center">
                                        <img className="rounded-full"
                                             src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                             width="30" height="30"
                                             alt="Tom Leach"/>
                                        <p className="pl-3 text-lg font-bold text-white">{successMessage}</p>
                                    </div>

                                    <div>
                                        <i onClick={() => setSuccessMessage(null)}
                                           style={{color: '#DFDFE2FF'}}
                                           className='hover:text-gray-100 fa fa-times fa-2x mr-4'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                        {customer && (
                        <>
                            <div className="ml-10 pt-2 pb-8">
                                <div className="mx-auto grid grid-flow-col gap-3">
                                    <div
                                        className="flex items-center border-r-[1px] pr-2 col-span-1 dark:border-r-gray-600 transition-all duration-500 ease-in-out">
                                        <div className="flex-shrink-0 mr-2 sm:mr-3">
                                                                                        <img className="rounded-full"
                                                                                        src={customer.customerDetails.profilePhoto ? customer.customerDetails.profilePhoto : "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"}
                                                                                        width="90" height="90"
                                                                                        alt="Tom Leach"/></div>
                                        <div className="flex-shrink-0 pl-6 mr-2 sm:mr-3">
                                            <p className="text-left text-lg font-bold text-gray-800 dark:text-gray-100">{customer.customerDetails.forename} {customer.customerDetails.surname}</p>
                                            <p className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">
                                                <i className="fa fa-check-circle text-lg text-[#5ed197] pr-2"></i>{customer.customerDetails.emailAddress}
                                            </p>
                                            <p className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">{customer.customerDetails.contactNumber}</p>
                                            <div className="flex items-center pt-3">
                                                <span
                                                    className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                    <ReactCountryFlag countryCode={customer.address.iso3CountryCode} />
                                                </span>
                                                <span
                                                    className="pl-2 text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">{customer.address.countryName}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="group flex items-start flex-col pr-6 pl-6 border-r-[1px] col-span-1 dark:border-r-gray-600 transition-all duration-500 ease-in-out">
                                        <div className="flex-shrink-0 mr-2 sm:mr-3">
                                            <div
                                                className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100">
                                                <i className="fa fa-birthday-cake text-lg text-gray-800 dark:text-gray-100 pr-2"></i>
                                               {dateFormat(dateOfBirth, "dd mmmm yyyy")}
                                            </div>
                                        </div>

                                        <div className="flex-shrink-0 mr-2 sm:mr-3">
                                            <div
                                                className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">
                                                <i className="fa fa-mars text-lg text-gray-800 dark:text-gray-100 pr-3"></i>{customer.customerDetails.gender}
                                            </div>
                                        </div>

                                        <div className="flex-shrink-0 mr-2 sm:mr-3">
                                            <div
                                                className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">
                                                <i className="fa fa-address-card text-lg text-gray-800 dark:text-gray-100 pr-2"></i>{customer.customerDetails.identificationNumber}
                                            </div>
                                        </div>

                                        <div className="flex-shrink-0 mr-2 sm:mr-3">
                                            <div
                                                className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">
                                                <i className="fa fa-address-card text-lg text-gray-800 dark:text-gray-100 pr-2"></i>AB
                                                12 34 56 C
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="group flex items-start flex-col pr-6 pl-6 border-r-[1px] dark:border-r-gray-600 col-span-1 transition-all duration-500 ease-in-out">
                                        <div className="flex-shrink-0 mr-2 sm:mr-3">
                                            <div
                                                className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100">
                                                <i className="fa fa-address-card text-lg text-gray-800 dark:text-gray-100 pr-2"></i>KYC
                                                Status
                                                <span className="flex items-center justify-center pl-3">
                                                    <span
                                                        aria-hidden="true"
                                                        className={"w-3 h-3 rounded-full inline-block align-middle" + ([5,6].includes(amlStatus.overallStatusID) ? " bg-green-500  " : amlStatus.overallStatusID === 8 ? " bg-orange-500 " : " bg-red-500 ")}/>
                                                    <span className="pl-2 text-gray-400 font-bold">
                                                        {amlStatus.overallStatusText}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 mr-2 sm:mr-3">
                                            <div
                                                className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">
                                                <i className="fa fa-lock text-lg text-gray-800 dark:text-gray-100 pr-4"></i>Account
                                                Status
                                                <span className="flex items-center justify-center pl-3">
                                                    <span aria-hidden="true"
                                                        className={"w-3 h-3 rounded-full inline-block align-middle " +
                                                        (activeAccountStatus && !lockAccountStatus && verifiedEmailAccount ? " bg-green-500 " : activeAccountStatus && !lockAccountStatus && !verifiedEmailAccount ? " bg-orange-500 " : " bg-red-500 ")}>
                                                    </span>
                                                    <span className="pl-2 text-gray-400 dark:text-gray-100 font-bold">
                                                        {activeAccountStatus && !lockAccountStatus && verifiedEmailAccount ? "Active" : activeAccountStatus && !lockAccountStatus && !verifiedEmailAccount? "Pending" : "Locked "}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 mr-2 sm:mr-3">
                                            <div
                                                className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">
                                                <i className="fa fa-flag text-lg text-gray-800 dark:text-gray-100 pr-2"></i>Monitored
                                                Customer
                                                <span className="flex items-center justify-center pl-3">
                                                    <span aria-hidden="true"
                                                        className={"w-3 h-3 rounded-full inline-block align-middle " + (!monitorCustomerStatus ? " bg-green-500 " : " bg-red-500 ")}>
                                                    </span>
                                                    <span className="pl-2 text-gray-400 dark:text-gray-100 font-bold">
                                                        {monitorCustomerStatus ? "Yes" : "No"}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group flex items-start flex-col pr-6 pl-6 col-span-1">
                                        <div className="flex-shrink-0 mr-2 sm:mr-3">
                                            <div
                                                className="flex items-start text-left text-sm font-bold text-gray-800 dark:text-gray-100 leading-loose">
                                                <i className="fa fa-map-marker text-lg text-gray-800 dark:text-gray-100 pr-2"></i>
                                                {customer.address.flatNumber} {customer.address.number} {customer.address.buildingName}<br/> {customer.address.street} <br/> {customer.address.townCity} <br/> {customer.address.postCode}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full">
                                <div className="w-full mx-auto rounded-sm border-gray-200">
                                    {/* TODO: Tabs component */}
                                    <div
                                        className="text-sm font-medium bg-white text-center text-gray-500 dark:text-gray-100 dark:bg-gray-600 transition-all duration-500 ease-in-out">
                                        <ul className="flex flex-wrap -mb-px">
                                            <li className="mr-2">
                                                <Link to='' className="inline-block p-4 border-b-2 border-[#5db1b5] active">Account
                                                    Details</Link>
                                            </li>
                                            <li className="mr-2">
                                                <Link to='' className="inline-block p-4 border-transparent"
                                                    aria-current="page">ID Verification</Link>
                                            </li>
                                            <li className="mr-2">
                                                <Link to='' className="inline-block p-4 border-transparent"
                                                    aria-current="page">Trading Accounts</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="-mx-2 md:flex pt-8">
                                    <div className="w-full md:w-1/4 px-2">
                                        <div
                                            className="rounded-md mb-4 border-solid border-2 border-gray-200 dark:border-gray-600 min-h-full transition-all duration-500 ease-in-out">
                                            <div className="flex flex-col rounded-md relative overflow-hidden">
                                                <h2 className='p-3 font-bold'>Restrictions</h2>

                                                <div className="flex items-center justify-between p-3 w-full">
                                                    <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Restrict
                                                        Deposit</p>
                                                    <span className="flex w-24 items-center justify-start pl-3">
                                                        <span aria-hidden="true"
                                                            className={"w-3 h-3 rounded-full inline-block align-middle " + (tradingRestrictions.restrictDeposit ? " bg-red-500 " : " bg-gray-500 ")}/>
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                            {tradingRestrictions.restrictDeposit ? "On" : "Off"}
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 w-full">
                                                    <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Restrict
                                                        Buy</p>
                                                    <span className="flex w-24 items-center justify-start pl-3">
                                                        <span aria-hidden="true"
                                                            className={"w-3 h-3 rounded-full inline-block align-middle " + (tradingRestrictions.restrictBuy ? " bg-red-500 " : " bg-gray-500 ")}/>
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                             {tradingRestrictions.restrictBuy ? "On" : "Off"}
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 w-full">
                                                    <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Restrict
                                                        Sell</p>
                                                    <span className="flex w-24 items-center justify-start pl-3">
                                                        <span aria-hidden="true"
                                                            className={"w-3 h-3 rounded-full inline-block align-middle " + (tradingRestrictions.restrictSell ? " bg-red-500 " : " bg-gray-500 ")}/>
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                           {tradingRestrictions.restrictSell ? "On" : "Off"}
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 w-full">
                                                    <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Restrict
                                                        Convert</p>
                                                    <span className="flex w-24 items-center justify-start pl-3">
                                                        <span aria-hidden="true"
                                                            className={"w-3 h-3 rounded-full inline-block align-middle " + (tradingRestrictions.restrictConvert ? " bg-red-500 " : " bg-gray-500 ")}/>
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                             {tradingRestrictions.restrictConvert ? "On" : "Off"}
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 w-full">
                                                    <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Restrict
                                                        Withdraw</p>
                                                    <span className="flex w-24 items-center justify-start pl-3">
                                                        <span aria-hidden="true"
                                                           className={"w-3 h-3 rounded-full inline-block align-middle " + (tradingRestrictions.restrictWithdraw ? " bg-red-500 " : " bg-gray-500 ")}/>
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                           {tradingRestrictions.restrictWithdraw  ? "On" : "Off"}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/4 px-2">
                                        <div
                                            className="rounded-md mb-4 border-solid border-2 border-gray-200 dark:border-gray-600 min-h-full transition-all duration-500 ease-in-out">
                                            <div className="flex flex-col rounded-md relative overflow-hidden">
                                                <h2 className='p-3 font-bold'>Preferences</h2>
                                                <div className="flex items-center justify-between p-3 w-full">
                                                    <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Two
                                                        Factor</p>
                                                    <span className="flex w-24 items-center justify-start pl-3">
                                                        <span aria-hidden="true"
                                                            className={"w-3 h-3 rounded-full inline-block align-middle" + (customer.securitySettings.is2faSet ? " bg-green-500 " : " bg-gray-500 ")}>
                                                        </span>
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                            {customer.securitySettings.is2faSet ? "Enabled" : "Disabled"}
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 w-full">
                                                    <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Language</p>
                                                    <span className="flex w-24 items-center justify-start pl-3">
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                            <ReactCountryFlag countryCode={customer.tradingPreferences.languageCode} />
                                                        </span>
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                            {customer.tradingPreferences.languageName}
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 w-full">
                                                    <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Pricing
                                                        Currency</p>
                                                    <span className="flex w-36 items-center justify-start pl-3">
                                                        <span aria-hidden="true"
                                                           className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                             <ReactCountryFlag countryCode={customer.tradingPreferences.pricesCurrencyIsoCode} />
                                                        </span>
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                            {customer.tradingPreferences.pricesCurrencyName}
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 w-full">
                                                    <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Portfolio
                                                        Currency</p>
                                                    <span className="flex w-36 items-center justify-start pl-3">
                                                        <span aria-hidden="true"
                                                           className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                            <ReactCountryFlag countryCode={customer.tradingPreferences.portfolioCurrencyIsoCode} />
                                                        </span>
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                            {customer.tradingPreferences.currencyName}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/4 px-2">
                                        <div
                                            className="rounded-md mb-4 border-solid border-2 border-gray-200 dark:border-gray-600 min-h-full transition-all duration-500 ease-in-out">
                                            <div className="flex flex-col rounded-md relative overflow-hidden">
                                                <h2 className='p-3 font-bold'>Communications</h2>
                                                {
                                                    customer.contactTypes && customer.contactTypes.map((contactType, index) => (
                                                    <div className="flex items-center justify-between p-3 w-full" key={index}>
                                                        <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>{contactType.contactTypeText}</p>
                                                        <span className="flex w-24 items-center justify-start pl-3">
                                                            <span aria-hidden="true"
                                                                className={"w-3 h-3 rounded-full inline-block align-middle" + (contactType.isSelected ? " bg-green-500 " : " bg-red-500 ")}>
                                                            </span>
                                                            <span
                                                                className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                                {contactType.isSelected ? "Yes" : "No"}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/4 px-2">
                                        <div
                                            className="rounded-md mb-4 border-solid border-2 border-gray-200 dark:border-gray-600 min-h-full transition-all duration-500 ease-in-out">
                                            <div className="flex flex-col rounded-md relative overflow-hidden">
                                                <h2 className='p-3 font-bold'>Topics</h2>
                                                {customer.communicationTypes.map((communicationType, index) => (
                                                <div className="flex items-center justify-between p-3 w-full" key={index}>
                                                    <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>{communicationType.communicationTypeText}</p>
                                                    <span className="flex w-18 items-center justify-start pl-3">
                                                        <span aria-hidden="true"
                                                            className={"w-3 h-3 rounded-full inline-block align-middle " + (communicationType.isSelected ? 'bg-green-500' : 'bg-red-500')}>
                                                        </span>
                                                        <span
                                                            className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                            {communicationType.isSelected ? 'Yes' : 'No'}
                                                        </span>
                                                    </span>
                                                </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        )}
                    </section>
                </main>
                <div
                    className="relative bg-gray-100 dark:bg-gray-800 border-l-[1px] dark:border-l-gray-600 transition-all duration-500 ease-in-out">
                    <div className="flex flex-col sm:flex-row sm:justify-around">
                        <div className="w-60 h-screen">
                            <div className="mt-8 px-4">
                                {/* TODO: load the colors from config */}
                                <h3 className="text-sm text-left text-gray-800 font-semibold leading-tight my-6">Action
                                    Menu</h3>
                                <h4 className="text-sm text-gray-500 leading-tight mb-4">Account Access</h4>
                                <button
                                    className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Send
                                    Password Rest Email
                                </button>
                                <h4 className="text-sm text-gray-500 leading-tight mt-6 mb-4">KYC Actions</h4>
                                <button
                                    className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>View
                                    KYC Details
                                </button>
                                <button onClick={() => setMonitorCustomerModal(true)}
                                        className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Monitor
                                    Customer
                                </button>
                                <button onClick={() => setLockAccountModal(true)}
                                        className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Lock
                                    Account
                                </button>
                                <button onClick={() => setTradingRestrictionsModal(true)}
                                        className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Restrict
                                    Account
                                </button>
                                <button onClick={() => setResetAmlModal(true)}
                                        className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Reset
                                    AML Status
                                </button>
                                <button
                                    onClick={() => setSetAmlPassedModal(true)}
                                    className='bg-[#5ed197] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Set
                                    KYC Status to Pass
                                </button>
                                <button
                                    onClick={() => setSetAmlFailedModal(true)}
                                    className='bg-[#d03d44] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Set
                                    KYC Status to Fail
                                </button>
                                <button
                                    className='bg-[#404353] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Request
                                    Proof of Address
                                </button>
                                <button
                                    className='bg-[#404353] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Request
                                    Additional Identification
                                </button>
                                <h4 className="text-sm text-gray-500 leading-tight mt-6 mb-4">Close Account</h4>
                                <button
                                    className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Sell
                                    All Holdings
                                </button>
                                <button
                                    className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Withdraw
                                    Funds
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails
