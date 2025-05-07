import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import authService from './services/auth.service'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CustomerDetails from './pages/CustomerDetails'
import ProductManagement from './pages/Products/ProductManagement'
import SpreadManagement from './pages/Products/SpreadManagement'
import UserManagement from './pages/Users/UserManagement'
import Kyc from './pages/Kyc'
import Missing from './pages/Missing'
import RequireAuth from './components/organisms/RequireAuth'
import {setApiToken} from './reducers/tokenSlice.reducer'
import {hideLoader, showLoader} from "./reducers/loaderSlice.reducer";
import VaultSetting from "./pages/VaultSetting";
import {search} from "./reducers/search.reducer";
import Reconciliation from './pages/Reconciliation/Reconciliation'
import Reconciliation2 from './pages/Reconciliation/Reconciliation2'
import OrderDetails from './pages/Orders/OrderDetails'
import Metals from './pages/Reconciliation/Metals'
import ReportDetails from './pages/Reports/ReportDetails'
import LedgerDetails from './pages/Ledgers/LedgerDetails'
import Funds from './pages/Reconciliation/Funds'
import Wallets from './pages/Reconciliation/Wallets'
import MarketHours from './pages/MarketHours'

const App = () => {
    const dispatch = useDispatch()

    const getApiToken = async () => {
        try {
            dispatch(showLoader())
            const response = await authService.getApiToken(
                process.env.REACT_APP_API_USERNAME,
                process.env.REACT_APP_API_PASSWORD
            )
            dispatch(setApiToken(response?.apiToken))
        } catch (error) {
            // TODO: Add popup or toast component to handle errors
            console.log(error)
        } finally {
            dispatch(hideLoader())
        }
    }

    useEffect(() => {
        dispatch(search(""))
        getApiToken()
    }, [])

    return (
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<Login/>}/>
        <Route path='login' element={<Login/>}/>

        { /* TODO: move inside authed routes */}
        <Route path='reconciliation/reports' element={<Reconciliation />}/>
        <Route path='reconciliation/metals' element={<Metals />}/>
        <Route path='reconciliation/wallets' element={<Wallets />}/>
        <Route path='reconciliation/funds' element={<Funds />}/>
        <Route path='orders/:orderID/:pendingOrderGuid' element={<OrderDetails />}/>
        <Route path='report/:reportID' element={<ReportDetails />}/>
        <Route path='ledger/:ledgerID' element={<LedgerDetails />}/>

          <Route path='market-hours' element={<MarketHours />} />
        { /* TODO: remove UI display route below */}
        <Route path='reconciliation/reports2' element={<Reconciliation2 />}/>

        {/* Protected routes */}
        <Route element={<RequireAuth/>}>
          <Route path='dashboard' element={<Dashboard/>}/>

          <Route path="customers/:customerGuid" element={<CustomerDetails/>}/>

          <Route path='customers' element={<Kyc  page={"0"}/>}/>

          <Route path='customers/all' element={<Kyc  page={"1"}/>}/>

          <Route path='customers/passed' element={<Kyc  page={"2"}/>}/>

          <Route path='customers/failed' element={<Kyc  page={"3"}/>}/>

          <Route path='users/user-management' element={<UserManagement />} />

          <Route path='products/product-management' element={<ProductManagement />} />

          <Route path='products/spread-management' element={<SpreadManagement />} />

          <Route path='vault-settings' element={<VaultSetting />} />

          {/* Catch all */}
          <Route path='*' element={<Missing />} />
      </Route>
    </Routes >
  )
}

export default App
