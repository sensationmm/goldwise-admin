import {Link, useNavigate} from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import {FiSettings} from 'react-icons/fi'
import React, {useEffect, useState} from "react";
import Header from '../../components/molecules/Header'
import Sidebar from '../../components/molecules/Sidebar'
import customerAmlService from '../../services/customerAml.service'
import Locked from './Locked';
import KYCStatus from './KYCStatus';
import {useDispatch} from "react-redux";
import {hideLoader, showLoader} from "../../reducers/loaderSlice.reducer";

const Kyc = () => {
    const dispatch = useDispatch()

    const [identityStatusId, setIdentityStatusId] = useState("0")
    const [isgwMonitored] = useState("0")
    const [customers, setCustomers] = useState()
    const getCustomers = async () => {
        try {
            dispatch(showLoader())
            const customersPromise = await customerAmlService.listAml(identityStatusId, isgwMonitored);
            setCustomers(customersPromise)
        } catch (e) {
            //todo: display error if happen
            console.log(e)
        } finally {
            dispatch(hideLoader())
        }
    }

    const customersStatus = [
        {
            id: "0",
            name: "View All",
        },
        {
            id: "1",
            name: "Not Started",
        },
        {
            id: "2",
            name: "Awaiting Information",
        },
        {
            id: "3",
            name: "In Progress",
        },
        {
            id: "4",
            name: "In Review",
        },
        {
            id: "5",
            name: "Passed",
        },
        {
            id: "6",
            name: "Failed",
        },
        {
            id: "7",
            name: "Retry",
        },
        {
            id: "8",
            name: "Expired",
        },
        {
            id: "9",
            name: "Passed (manual)",
        },
        {
            id: "10",
            name: "Failed (manual)",
        },
        {
            id: "11",
            name: "Suspended",
        },
    ]

    const navigate = useNavigate();

    useEffect(() => {
        getCustomers()
    }, [identityStatusId, isgwMonitored])

    return (
        <div className="flex w-full">
            {/* TODO: add template */}
            <div className="flex h-full">
                <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
                <section
                    className="flex flex-col justify-start antialiased bg-gray-100 text-gray-800 min-h-screen p-4 dark:bg-gray-800 transition-all duration-500 ease-in-out">
                    <div className="h-full">
                        <div className="w-full mx-auto rounded-sm border-gray-200">
                            {/* TODO: Header component */}
                            <header className="flex items-center px-4 py-4 dark:text-gray-100">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                    </path>
                                </svg>
                                <h2 className="pl-6 uppercase font-bold text-gray-800 dark:text-gray-100">KYC</h2>
                            </header>
                            {/* TODO: Tabs component */}
                            <div
                                className="text-sm font-medium bg-white text-center text-gray-500 dark:bg-gray-600 dark:text-gray-100 transition-all duration-500 ease-in-out">
                                <ul className="flex flex-wrap -mb-px">
                                    <li className="mr-2">
                                        <Link to='' className="inline-block p-4 border-b-2 border-[#5db1b5] active">To
                                            Be Reviewed</Link>
                                    </li>
                                    <li className="mr-2">
                                        <Link to='' className="inline-block p-4 border-transparent"
                                              aria-current="page">View All</Link>
                                    </li>
                                    <li className="mr-2">
                                        <Link to='' className="inline-block p-4 border-transparent"
                                              aria-current="page">Passed</Link>
                                    </li>
                                    <li className="mr-2">
                                        <Link to='' className="inline-block p-4 border-transparent"
                                              aria-current="page">Failed</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* TODO: Load using test data and convert to small components */}
                            <div className="p-3">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full">
                                        <thead className="text-xs font-bold text-gray-800 dark:text-gray-100">
                                        <tr>
                                            <th className="p-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Photo</div>
                                            </th>
                                            <th className="p-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Id</div>
                                            </th>
                                            <th className="p-3 whitespace-nowrap">
                                                <div className="font-semibold text-left">Name</div>
                                            </th>
                                            <th className="p-3 whitespace-nowrap">
                                                <div className="font-semibold text-center">Email</div>
                                            </th>
                                            <th className="p-3 whitespace-nowrap">
                                                <div className="font-semibold text-center">Contact Number</div>
                                            </th>
                                            <th className="p-3 whitespace-nowrap">
                                                <div className="font-semibold text-center">Country</div>
                                            </th>
                                            <th className="p-3 whitespace-nowrap">
                                                <div className="font-semibold text-center">Account Status</div>
                                            </th>
                                            <th className="p-3 whitespace-nowrap">
                                                <div className="font-semibold text-center">KYC Status</div>
                                            </th>
                                            <th className="p-3 whitespace-nowrap">
                                                <div className="font-semibold text-center">Monitor</div>
                                            </th>
                                            <th className="p-3 whitespace-nowrap flex justify-center">
                                                <div className="font-semibold text-center"><FiSettings size="16px"/>
                                                </div>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody
                                            className="text-sm divide-y divide-gray-200 dark:divide-gray-600 dark:text-gray-100 transition-all duration-500 ease-in-out">
                                        {
                                            customers &&
                                            (customers.map((customer, index) => (
                                                <tr key={index}>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                                <img className="rounded-full"
                                                                     src={!!customer.profilePhoto ? customer.profilePhoto : "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"}
                                                                     width="40" height="40"
                                                                     alt={customer.forename + ' ' + customer.surname}/>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">{customer.idCustomerGuid}</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div
                                                            className="text-left font-medium text-gray-800 dark:text-gray-100">{customer.forename + ' ' + customer.surname}</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">{customer.emailAddress}</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-right">{customer.contactNumber}</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-left text-lg sm:mr-3">
                                                                <ReactCountryFlag
                                                                    countryCode={customer.iso3CountryCode}/></div>
                                                            <div className="text-left">{customer.countryName}</div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-left">
                                                            <Locked
                                                                isLocked={parseInt(customer.isLocked)}
                                                                isActive={parseInt(customer.isActive)}
                                                                isEmailVerified={parseInt(customer.isEmailVerify)} />
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-left">
                                                            <KYCStatus status={parseInt(customer.idIdentityStatus)}
                                                                       statusDescription={customer.identityStatusText}></KYCStatus>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true"
                                                                  className={"w-3 h-3 rounded-full inline-block align-middle" + (customer.gwMonitor ? " bg-green-500 " : " bg-red-500 ")}>
                                                            </span>
                                                            <span className="pl-2">
                                                                    {customer.gwMonitor ? "Yes" : "No"}
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <Link to={'/customers/' + customer.idCustomerGuid}
                                                                  className="rounded-full bg-[#5db1b5] text-white pt-1 pr-6 pb-1 pl-6 font-bold">View</Link>
                                                        </span>
                                                    </td>
                                                </tr>)))
                                        }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            </div>
        </div>
    )
}

export default Kyc
