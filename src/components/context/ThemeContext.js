import React, { createContext, useState, useEffect } from 'react'

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPref = window.localStorage.getItem('color-theme')
        if (typeof storedPref === 'string') {
            return storedPref
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches) {
            return 'dark'
        }
    }

    return 'light'
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement
        const isDark = rawTheme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(rawTheme)

        localStorage.setItem('color-theme', rawTheme)
    }

    if (initialTheme) {
        rawSetTheme(initialTheme)
    }

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}