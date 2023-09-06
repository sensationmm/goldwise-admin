import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from './store'
// import { ThemeProvider } from './components/context/ThemeContext'
import App from './App'
import './index.scss'
import { createRoot } from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import MuiTheme from './theme'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* TODO: remove once confirmed definitely not needed */}
          {/* <ThemeProvider> */}
            <MuiThemeProvider theme={MuiTheme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/*" element={<App />} />
                  </Routes>
                </BrowserRouter>
              </LocalizationProvider>
            </MuiThemeProvider>
          {/* </ThemeProvider> */}
        </PersistGate>
      </Provider>
    </React.StrictMode>
);
