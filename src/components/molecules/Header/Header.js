import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Toggle from '../../atoms/Toggle'
import { clearAdmin } from '../../../reducers/userSlice.reducer'
// import authService from '../../../services/auth.service'
import withClickOutside from '../../../helper/withClickOutside'
// import Logo from './logo.png'

const Header = forwardRef(({ open, setOpen }, ref) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOut = async () => {
        try {
            // const response = await authService.logout()
            // TODO: Check for success before navigate
            // API response PR needs to be merged
            // if (response) {
            dispatch(clearAdmin())
            navigate('/', { replace: true })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="sticky top-0 z-50" ref={ref}>
            <nav className="flex bg-white dark:bg-gray-800 shadow sticky top-0 z-50 dark:shadow-gray-600 transition-all duration-500 ease-in-out">
                <div className="w-1/5 h-16">
                    <div className="flex items-center">
                        <a className="flex-shrink-0" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 ml-4" width="160" height="55" viewBox="0 0 229 55"><g transform="translate(-33 -25)"><g transform="translate(118 35)"><text transform="translate(0 27)" fill="#404353" font-size="28" font-family="Gilroy-ExtraBold, Gilroy" font-weight="800"><tspan x="0" y="0">GOLDWISE</tspan></text></g><g transform="translate(-5 -984)"><circle cx="27.5" cy="27.5" r="27.5" transform="translate(38 1009)" fill="#404353" /><text transform="translate(65.5 1042.5)" fill="#fff" font-size="18" font-family="Gilroy-ExtraBold, Gilroy" font-weight="800"><tspan x="-15.759" y="0">GW</tspan></text></g></g></svg>
                        </a>
                    </div></div>
                <div className="w-3/5 h-16 flex items-center justify-center">
                    <div className="relative w-full max-w-[75%]">
                        <div className="absolute top-2 left-5">
                            <i className="fa fa-search text-gray-300 z-20 hover:text-gray-500 dark:text-gray-400"></i>
                        </div>
                        <input type="text" className="h-10 w-full pr-8 pl-12 rounded-md z-0 outline-none focus:outline-none border-0 bg-gray-100 dark:bg-gray-600 transition-all duration-500 ease-in-out" placeholder="" />
                        <div className="absolute top-2 right-5">
                            <i className="fa fa-arrow-right text-gray-300 z-20 hover:text-gray-500 dark:text-gray-400"></i>
                        </div>
                    </div>
                </div>
                <div className="w-1/5 h-16 text-right mr-4">
                    <div className="relative inline-block text-right border-l-[1px] h-16 pt-1 dark:text-gray-100 dark:border-l-gray-600">
                        <div className='flex w-full items-center justify-center'>
                            <button onClick={() => setOpen(!open)} type="button" className="flex items-center justify-center px-4 py-2 pr-4 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none transition duration-500 ease-in-out" id="options-menu">
                                {/* TODO: get the name from the user data */}
                                <span className='text-sm font-medium pr-4'>Gareth Tucker</span>
                                {/* TODO: load the SVG if there is no image for the user */}
                                <svg width="40" fill="currentColor" height="40" className="text-gray-800 dark:text-gray-100" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        {open &&
                            <div style={{ transition: 'all 4s ease-in-out' }} className="transition duration-500 ease-in-out origin-top-right absolute transition-all transform right-0 mt-2 w-52 shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:shadow-gray-700 dark:ring-white dark:ring-opacity-5">
                                <div className="py-1 text-left" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {/* TODO: Update the NavLink */}
                                    <Toggle />
                                    <NavLink to='/dashboard' className="transition duration-500 ease-in-out block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                        <span className="flex flex-col">
                                            <span>
                                                Settings
                                            </span>
                                        </span>
                                    </NavLink>
                                    {/* TODO: Update the NavLink */}
                                    <NavLink to='/customers/3e2f84a2-c540-11ec-92d3-bc764e0817e5' className="transition duration-500 ease-in-out block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                        <span className="flex flex-col">
                                            <span>
                                                Account
                                            </span>
                                        </span>
                                    </NavLink>
                                    <span onClick={() => logOut()} className="transition duration-500 ease-in-out block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 cursor-pointer" role="menuitem">
                                        <span className="flex flex-col">
                                            <span>
                                                Logout
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>}
                    </div>
                </div>
            </nav >
        </div >
    )
})

export default withClickOutside(Header)
