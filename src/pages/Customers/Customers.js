import { Link } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import { FiSettings } from 'react-icons/fi'
import Header from '../../components/molecules/Header'
import Sidebar from '../../components/molecules/Sidebar'

const Customers = () => {
    return (
        <div>
            {/* TODO: add template */}
            <Header />
            <div className="flex h-full">
                <Sidebar />
                <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
                    <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-800 min-h-screen p-4 dark:bg-gray-800 transition-all duration-500 ease-in-out">
                        <div className="h-full">
                            <div className="w-full mx-auto rounded-sm border-gray-200">
                                {/* TODO: Header component */}
                                <header className="flex items-center px-4 py-4 dark:text-gray-100">
                                    <svg width="20" fill="currentColor" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                        </path>
                                    </svg>
                                    <h2 className="pl-6 uppercase font-bold text-gray-800 dark:text-gray-100">Customers</h2>
                                </header>
                                {/* TODO: Tabs component */}
                                <div className="text-sm font-medium bg-white text-center text-gray-500 dark:bg-gray-600 dark:text-gray-100 transition-all duration-500 ease-in-out">
                                    <ul className="flex flex-wrap -mb-px">
                                        <li className="mr-2">
                                            <Link to='' className="inline-block p-4 border-b-2 border-[#5db1b5] active">View All</Link>
                                        </li>
                                        <li className="mr-2">
                                            <Link to='' className="inline-block p-4 border-transparent" aria-current="page">Monitored</Link>
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
                                                        <div className="font-semibold text-center"><FiSettings size="16px" /></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-600 dark:text-gray-100 transition-all duration-500 ease-in-out">
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Tom Leach" /></div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">01234</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-gray-800 dark:text-gray-100">Tom Leach</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-center">tom@miyumi.ai</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-center">07456545655</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-left text-lg sm:mr-3"><ReactCountryFlag countryCode="GB" /></div>
                                                            <div className="text-left">United Kingdom</div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                Unlocked
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                Passed
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-red-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                No
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <Link to='3e2f84a2-c540-11ec-92d3-bc764e0817e5' className="rounded-full bg-[#5db1b5] text-white pt-1 pr-6 pb-1 pl-6 font-bold">View</Link>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Tom Leach" /></div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">01234</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-gray-800 dark:text-gray-100">Tom Leach</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-center">tom@miyumi.ai</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-center">07456545655</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-left text-lg sm:mr-3"><ReactCountryFlag countryCode="GB" /></div>
                                                            <div className="text-left">United Kingdom</div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                Unlocked
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                Passed
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-red-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                No
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <Link to='3e2f84a2-c540-11ec-92d3-bc764e0817e5' className="rounded-full bg-[#5db1b5] text-white pt-1 pr-6 pb-1 pl-6 font-bold">View</Link>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Tom Leach" /></div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">01234</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-gray-800 dark:text-gray-100">Tom Leach</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-center">tom@miyumi.ai</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-center">07456545655</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-left text-lg sm:mr-3"><ReactCountryFlag countryCode="GB" /></div>
                                                            <div className="text-left">United Kingdom</div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                Unlocked
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                Passed
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-red-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                No
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <Link to='3e2f84a2-c540-11ec-92d3-bc764e0817e5' className="rounded-full bg-[#5db1b5] text-white pt-1 pr-6 pb-1 pl-6 font-bold">View</Link>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Tom Leach" /></div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">01234</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-gray-800 dark:text-gray-100">Tom Leach</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-center">tom@miyumi.ai</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-center">07456545655</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-left text-lg sm:mr-3"><ReactCountryFlag countryCode="GB" /></div>
                                                            <div className="text-left">United Kingdom</div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                Unlocked
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                Passed
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-red-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                No
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <Link to='3e2f84a2-c540-11ec-92d3-bc764e0817e5' className="rounded-full bg-[#5db1b5] text-white pt-1 pr-6 pb-1 pl-6 font-bold">View</Link>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Tom Leach" /></div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">01234</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-gray-800 dark:text-gray-100">Tom Leach</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-center">tom@miyumi.ai</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-center">07456545655</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-left text-lg sm:mr-3"><ReactCountryFlag countryCode="GB" /></div>
                                                            <div className="text-left">United Kingdom</div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                Unlocked
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                Passed
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <span aria-hidden="true" className="w-3 h-3 rounded-full bg-red-500 inline-block align-middle">
                                                            </span>
                                                            <span className="pl-2">
                                                                No
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <span className="flex items-center justify-center">
                                                            <Link to='3e2f84a2-c540-11ec-92d3-bc764e0817e5' className="rounded-full bg-[#5db1b5] text-white pt-1 pr-6 pb-1 pl-6 font-bold">View</Link>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div >
    )
}

export default Customers