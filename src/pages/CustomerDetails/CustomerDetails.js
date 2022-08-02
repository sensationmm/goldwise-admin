import {Link} from 'react-router-dom'
import Header from '../../components/molecules/Header'
import Sidebar from '../../components/molecules/Sidebar'
import Modal from "../../components/atoms/Modal";
import React, {useState} from "react";
import LockAccountModal from "./Modals/LockAccountModal";
import MonitorCustomerModal from "./Modals/MonitorCustomerModal";
import TradingRestrictionsModal from "./Modals/TradingRestrictionsModal";
import SetAmlPassedModal from "./Modals/SetAmlPassedModal";
import SetAmlFailedModal from "./Modals/SetAmlFailedModal";
import customerDetailService from "../../services/customerDetail.service";

const CustomerDetails = () => {
    const customerGuid = 1 // todo: change to one from page
    const [monitorCustomerModal, setMonitorCustomerModal] = useState(false)
    const [lockAccountModal, setLockAccountModal] = useState(false)
    const [tradingRestrictionsModal, setTradingRestrictionsModal] = useState(false)
    const [setAmlPassedModal, setSetAmlPassedModal] = useState(false)
    const [setAmlFailedModal, setSetAmlFailedModal] = useState(false)
    const [resetAmlModal, setResetAmlModal] = useState(false)

    const saveLockAccountStatus = async (value, reason) => {
        try {
            await customerDetailService.saveLockAccountStatus(value, reason, customerGuid)
            //todo: update value on page
            //todo: show success message
        } catch (e) {
            //todo: catch error
        } finally {
            setLockAccountModal(false)
        }
    }

    const saveMonitorCustomerStatus = async (value, reason) => {
        try {
            await customerDetailService.saveMonitorCustomerStatus(value, reason, customerGuid)
            //todo: update value on page
            //todo: show success message
        } catch (e) {
            //todo: catch error
        } finally {
            setMonitorCustomerModal(false)
        }
    }

    const saveTradingRestrictions = async (canDeposit, canBuy, canSell, canConvert, canWithdraw, reason) => {
        try {
            await customerDetailService.saveTradingRestrictions(canDeposit, canBuy, canSell, canConvert, canWithdraw, reason, customerGuid)
            //todo: update value on page
            //todo: show success message
        } catch (e) {
            //todo: catch error
        } finally {
            setTradingRestrictionsModal(false)
        }
    }

    const setAmlFailed = async (reason) => {
        try {
            await customerDetailService.setAmlFailed(reason, customerGuid)
            //todo: update value on page
            //todo: show success message
        } catch (e) {
            //todo: catch error
        } finally {
            setMonitorCustomerModal(false)
        }
    }

    const setAmlPassed = async (reason) => {
        try {
            await customerDetailService.setAmlPassed(reason, customerGuid)
            //todo: update value on page
        } catch (e) {
            //todo: catch error
        } finally {
            setSetAmlFailedModal(false)
        }
    }

    const resetAml = async (reason) => {
        try {
            await customerDetailService.resetAml(reason, customerGuid)
            //todo: update value on page
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
                    hidePopup={() => setLockAccountModal(false)}
                    saveLockAccountStatus={saveLockAccountStatus}
                />
            </Modal>
            }
            {monitorCustomerModal && <Modal hidePopup={() => setMonitorCustomerModal(false)} title="Monitor Account">
                <MonitorCustomerModal
                    saveMonitorCustomerStatus={saveMonitorCustomerStatus}
                    hidePopup={() => setMonitorCustomerModal(false)}
                />
            </Modal>
            }

            {tradingRestrictionsModal &&
            <Modal hidePopup={() => setTradingRestrictionsModal(false)} title="Restrict Account">
                <TradingRestrictionsModal
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
                <SetAmlFailedModal
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
                                <li className="text-xs text-gray-500 dark:text-gray-100">Tom Leach</li>
                            </ul>
                        </div>
                        <div class="mx-auto pt-2 pb-8">
                            <div className="grid grid-flow-col gap-3">
                                <div
                                    className="flex items-center border-r-[1px] pr-2 col-span-1 dark:border-r-gray-600 transition-all duration-500 ease-in-out">
                                    <div className="flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full"
                                                                                     src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                                                     width="90" height="90"
                                                                                     alt="Tom Leach"/></div>
                                    <div className="flex-shrink-0 pl-6 mr-2 sm:mr-3">
                                        <p className="text-left text-lg font-bold text-gray-800 dark:text-gray-100">Tom
                                            Leach</p>
                                        <p className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">
                                            <i className="fa fa-check-circle text-lg text-[#5ed197] pr-2"></i>tom.leach@miyumi.ai
                                        </p>
                                        <p className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">+44
                                            01234123456</p>
                                        <div className="flex items-center pt-3">
                                            <div className="text-left text-lg sm:mr-3">🇬🇧</div>
                                            <p className="text-left">United Kingdom</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="group flex items-start flex-col pr-6 pl-6 border-r-[1px] col-span-1 dark:border-r-gray-600 transition-all duration-500 ease-in-out">
                                    <div className="flex-shrink-0 mr-2 sm:mr-3">
                                        <div
                                            className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100">
                                            <i className="fa fa-birthday-cake text-lg text-gray-800 dark:text-gray-100 pr-2"></i>01
                                            January 2022
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 mr-2 sm:mr-3">
                                        <div
                                            className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">
                                            <i className="fa fa-mars text-lg text-gray-800 dark:text-gray-100 pr-3"></i>Male
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 mr-2 sm:mr-3">
                                        <div
                                            className="flex items-center text-left text-sm font-medium text-gray-800 dark:text-gray-100 pt-3">
                                            <i className="fa fa-address-card text-lg text-gray-800 dark:text-gray-100 pr-2"></i>NI
                                            Number
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
                                                <span aria-hidden="true"
                                                      className="w-3 h-3 rounded-full bg-red-500 inline-block align-middle">
                                                </span>
                                                <span className="pl-2 text-gray-400 font-bold">
                                                    No
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
                                                      className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                </span>
                                                <span className="pl-2 text-gray-400 dark:text-gray-100 font-bold">
                                                    Passed
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
                                                      className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                </span>
                                                <span className="pl-2 text-gray-400 dark:text-gray-100 font-bold">
                                                    Passed
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
                                            Tramshed Tech <br/> Pendyris Street <br/> Cardiff <br/> CF11 6BH
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
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Can
                                                    Deposit</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Yes
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Can
                                                    Buy</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Passed
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Can
                                                    Sell</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Captured
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Can
                                                    Convert</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-orange-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        PEP Hit
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Can
                                                    Withdraw</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Passed
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
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Enabled
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Biometrics</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Enabled
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Passcode</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Enabled
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Language</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-orange-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        PEP Hit
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Pricing
                                                    Currency</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Passed
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Portfolio
                                                    Currency</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Passed
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Technical
                                                    Charts</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Enabled
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Conditional
                                                    Orders</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-red-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Disabled
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

                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Email</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Yes
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Post</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Passed
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Phone</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Captured
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>SMS</p>
                                                <span className="flex w-24 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-orange-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        PEP Hit
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
                                            <h2 className='p-3 font-bold'>Topics</h2>

                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Price
                                                    and Portfolio Alerts</p>
                                                <span className="flex w-18 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Yes
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>New
                                                    Products & Features</p>
                                                <span className="flex w-18 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        Yes
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Market
                                                    News & Insights</p>
                                                <span className="flex w-18 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-red-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        No
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 w-full">
                                                <p className='text-left text-sm font-medium text-gray-800 dark:text-gray-100'>Offers
                                                    & Promotions</p>
                                                <span className="flex w-18 items-center justify-start pl-3">
                                                    <span aria-hidden="true"
                                                          className="w-3 h-3 rounded-full bg-red-500 inline-block align-middle">
                                                    </span>
                                                    <span
                                                        className="pl-2 text-sm text-gray-400 dark:text-gray-100 font-semibold">
                                                        No
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
