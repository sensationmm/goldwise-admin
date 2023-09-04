import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import authService from './services/auth.service'
import BaseLayout from './pages/BaseLayout'
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
            <Route path='/' element={<BaseLayout full={true}/>}>
                {/* Public routes */}
                <Route path='/' element={<Login/>}/>
                <Route path='login' element={<Login/>}/>
            </Route>

            <Route path='/' element={<BaseLayout/>}>
                <Route path='reconciliation/reports' element={<Reconciliation/>}/>
            </Route>

            <Route path='/' element={<BaseLayout/>}>
                {/* Protected routes */}
                <Route element={<RequireAuth/>}>
                    <Route path='dashboard' element={<Dashboard/>}/>
                </Route>

                {/* <Route element={<RequireAuth/>}>
                    <Route path='customers' element={<Customers/>}/>
                </Route> */}

                <Route element={<RequireAuth/>}>
                    <Route path="customers/:customerGuid" element={<CustomerDetails/>}/>
                </Route>

                <Route element={<RequireAuth/>}>
                    <Route path='customers' element={<Kyc  page={"0"}/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route path='customers/all' element={<Kyc  page={"1"}/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route path='customers/passed' element={<Kyc  page={"2"}/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route path='customers/failed' element={<Kyc  page={"3"}/>}/>
                </Route>

                {/* <Route element={<RequireAuth/>}>
                    <Route path='customers/:customerGuid' element={<CustomerDetails/>}/>
                </Route> */}

                <Route element={<RequireAuth/>}>
                    <Route path='users/user-management' element={<UserManagement />} />
                </Route>

                <Route>
                    <Route path='products/product-management' element={<ProductManagement />} />
                </Route>

                <Route element={<RequireAuth />}>
                    <Route path='products/spread-management' element={<SpreadManagement />} />
                </Route>

                <Route element={<RequireAuth />}>
                    <Route path='vault-settings' element={<VaultSetting />} />
                </Route>

                {/* Catch all */}
                <Route path='*' element={<Missing />} />
            </Route>
        </Routes >
    )
}

export default App
