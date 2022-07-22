import React, { useContext } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from '../../context/ThemeContext'

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out block block text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 cursor-pointer" role="menuitem">
            {theme === 'dark' ? (
                <span className='flex pt-2 pr-4 pl-4 pb-2 items-center justify-between' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <p>Light mode</p>
                    <FaSun
                        size="16px"
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    />
                </span>
            ) : (
                <span className='flex pt-2 pr-4 pl-4 pb-2 items-center justify-between' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <p className='pr-2'>Dark mode</p>
                    <FaMoon
                        size="16px"
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    />
                </span>
            )}
        </div>
    )
}

export default Toggle