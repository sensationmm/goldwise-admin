import {
    NavLink
} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="relative bg-gray-100 dark:bg-gray-800 border-r-[1px] dark:border-r-gray-600 transition-all duration-500 ease-in-out">
            <div className="flex flex-col sm:flex-row sm:justify-around">
                <div className="w-60 h-screen">
                    <nav className="mt-8 px-4">
                        <NavLink to="/dashboard" className={({ isActive }) =>
                            isActive ? "hover:text-[#5db1b5] flex items-center p-2 my-6 transition-colors dark:hover:text-white duration-200 dark:text-gray-400 text-[#5db1b5] dark:hover:text-[#5db1b5] dark:text-[#5db1b5]" : "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-800 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                        }>
                            {/* TODO: load the icons from react icons */}
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" /></svg>
                            <span className="flex-grow mx-8 text-md font-normal">
                                Dashboard
                            </span>
                            <span className="flex-grow text-right">
                                <svg width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" />
                                </svg>
                            </span>
                        </NavLink>
                        <NavLink to="/customers" className={({ isActive }) =>
                            isActive ? "hover:text-[#5db1b5] flex items-center p-2 my-6 transition-colors dark:hover:text-white duration-200 dark:text-gray-400 text-[#5db1b5] dark:hover:text-[#5db1b5] dark:text-[#5db1b5]" : "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-800 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                        }>
                            {/* TODO: load the icons from react icons */}
                            <svg width="20" fill="currentColor" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                </path>
                            </svg>
                            <span className="flex-grow mx-8 text-md font-normal">
                                Customers
                            </span>
                            <span className="flex-grow text-right">
                                <svg width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" />
                                </svg>
                            </span>
                        </NavLink>
                        <NavLink to="/kyc" className={({ isActive }) =>
                            isActive ? "hover:text-[#5db1b5] flex items-center p-2 my-6 transition-colors dark:hover:text-white duration-200 dark:text-gray-400 text-[#5db1b5] dark:hover:text-[#5db1b5] dark:text-[#5db1b5]" : "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-800 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                        }>
                            {/* TODO: load the icons from react icons */}
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                </path>
                            </svg>
                            <span className="flex-grow mx-8 text-md font-normal pr-11">
                                KYC
                            </span>
                            <span className="flex-grow text-right">
                                <svg width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" />
                                </svg>
                            </span>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div >
    )
}

export default Sidebar