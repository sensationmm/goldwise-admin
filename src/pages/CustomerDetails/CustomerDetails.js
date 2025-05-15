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
import {useDispatch} from "react-redux";
import {hideLoader, showLoader} from "../../reducers/loaderSlice.reducer";
import SendResetEmailModal from './Modals/SendResetEmailModal';
import ResendVerificationEmailModal from './Modals/ResendVerificationEmailModal';
import BaseLayout from '../BaseLayout/BaseLayout';
import { Tab, Tabs } from '@mui/material';
import Details from './sections/Details';
import Wallets from './sections/Wallets';
import KycChecks from './sections/KycChecks';
import Holdings from "./sections/Holdings";
import Pending from "./sections/Pending";
import History from "./sections/History";

const CustomerDetails = (props) => {
    const dispatch = useDispatch()
    const [view, setView] = useState(0)

    const { customerGuid } = useParams()
    const [customer, setCustomer] = useState()
    const [actionMenu, setActionMenu] = useState(false)

    const [monitorCustomerModal, setMonitorCustomerModal] = useState(false)
    const [lockAccountModal, setLockAccountModal] = useState(false)
    const [tradingRestrictionsModal, setTradingRestrictionsModal] = useState(false)
    const [setAmlPassedModal, setSetAmlPassedModal] = useState(false)
    const [setAmlFailedModal, setSetAmlFailedModal] = useState(false)
    const [resetAmlModal, setResetAmlModal] = useState(false)
    const [sendPassResetEmail, sendPassResetEmailModal] = useState(false)
    const [resendVerificationEmailM, resendVerificationEmailModal] = useState(false)

    const [successMessage, setSuccessMessage] = useState()

    const [lockAccountStatus, setLockAccountStatus] = useState(true);
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

    const [questionnaire, setCustomerQuestionnaire] = useState([
        {
            questionTitle: "What's your experience?",
            answer: "-"
        },
        {
            questionTitle: "Your reason for using us?",
            answer: "-"
        },
        {
            questionTitle: "Source of funds?",
            answer: "-"
        },
        {
            questionTitle: "Invested Amount?",
            answer: "-"
        },
        {
            questionTitle: "Investment Frequency?",
            answer: "-"
        }
    ]);

    const getCustomer = async () => {
        try {
            dispatch(showLoader())
            const customer = await customerDetailService.getCustomerDetails(customerGuid);
            const customerDetailData = customer.data.response;
            setCustomer(customerDetailData);
            setLockAccountStatus(customerDetailData.customerDetails.isLocked)
            // setEmailactiveStatus(customerDetailData.customerDetails.isEmailVerify)
            // setActiveAccountStatus(customerDetailData.customerDetails.isActive)
            // setDateOfBirth(new Date(customerDetailData.customerDetails.dateOfBirth));
            setTradingRestrictions(customerDetailData.restrictions)
            setMonitorCustomer(customerDetailData.customerDetails.isGwMonitored)
            setAmlStatus({
                overallStatusID: customerDetailData.overallStatusID,
                overallStatusText: customerDetailData.overallStatusText
            })

            if (customerDetailData.customerQuestionnaire.length > 0) {
                setCustomerQuestionnaire(customerDetailData.customerQuestionnaire)
            }
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

    const sendResetEmail = async () => {
        try {
            dispatch(showLoader())
            await customerDetailService.sendResetEmail(customer.customerDetails.emailAddress)
            setSuccessMessage("reset email sent successfully!")
        } catch (e) {
            //todo: catch error
        } finally {
            sendPassResetEmailModal(false)
            dispatch(hideLoader())
        }
    }

    const resendVerificationEmail = async () => {
        try {
            dispatch(showLoader())
            await customerDetailService.resendVerificationEmail(customer.customerDetails.emailAddress, customerGuid)
            setSuccessMessage("verification email sent successfully!")
        } catch (e) {
            //todo: catch error
        } finally {
            resendVerificationEmailModal(false)
            dispatch(hideLoader())
        }
    }

    const toggleActionMenu = () => {
        setActionMenu(!actionMenu)
    }

    const prevRoute = {
        path: "/" + window.location.href.split('/')[3],
        name: window.location.href.split('/')[3].charAt(0).toUpperCase() + window.location.href.split('/')[3].slice(1)
    }

    return (
      <div className="flex w-full">
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

        {sendPassResetEmail &&
        <Modal hidePopup={() => sendPassResetEmailModal(false)} title="Send Reset Password Email">
            <SendResetEmailModal
                sendResetEmail={sendResetEmail}
                isEmailVerify={customer.customerDetails.isEmailVerify}
                hidePopup={() => sendPassResetEmailModal(false)}
            />
        </Modal>
        }

        {resendVerificationEmailM &&
        <Modal hidePopup={() => resendVerificationEmailModal(false)} title="Resend Verification Email">
            <ResendVerificationEmailModal
                resendVerificationEmail={resendVerificationEmail}
                isEmailVerify={customer.customerDetails.isEmailVerify}
                hidePopup={() => resendVerificationEmailModal(false)}
            />
        </Modal>
        }

        <BaseLayout title={`${customer?.customerDetails?.forename ?? ''} ${customer?.customerDetails?.surname ?? ''}`} hasBack>
          <div className='relative text-xs top-[-20px]'>{customer?.customerDetails?.emailAddress}</div>

          <Tabs value={view} onChange={(_, newValue) => setView(newValue)}>
            <Tab label="Details" />
            <Tab label="KYC Checks" />
            <Tab label="Wallets" />
            <Tab label="Holdings" />
            <Tab label="Pending" />
            <Tab label="History" />
            <Tab label="Log" />
          </Tabs>

          <div className="mt-10 relative">
          {view === 0 && <Details data={customer} />}
          {view === 1 && <KycChecks />}
          {view === 2 && <Wallets />}
          {view === 3 && <Holdings />}
          {view === 4 && <Pending />}
          {view === 5 && <History />}
          </div>
        </BaseLayout>

        <div
            className={`${actionMenu ? "fixed" : "hidden"} right-0 h-screen bg-gray-100 dark:bg-gray-800 border-l-[1px] dark:border-l-gray-600 transition-all duration-500 ease-in-out`}>
            <div className="h-screen">
                <div className="w-60 h-screen overflow-y-scroll">
                    <div className="mt-8 px-4">
                        {/* TODO: load the colors from config */}
                        <div className="w-100 grid grid-flow-col">
                            <h3 className="text-sm text-left text-gray-800 font-semibold leading-tight my-6">Action
                                Menu
                            </h3>
                            <span className="text-right  my-6">
                            <button className="bg-red" onClick={toggleActionMenu}>
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </span>
                        </div>
                        <h4 className="text-sm text-gray-500 leading-tight mb-4">Account Access</h4>
                        <button onClick={() => sendPassResetEmailModal(true)}
                            className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Send
                            Password Reset Email
                        </button>
                        <button onClick={() => resendVerificationEmailModal(true)}
                            className='bg-[#52b2b6] hover:opacity-80 text-white text-xs text-center font-bold py-3 px-4 rounded w-full mb-2'>Resend Verification Email
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
    )
}

export default CustomerDetails
