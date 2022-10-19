import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import authService from './services/auth.service'
import BaseLayout from './pages/BaseLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import CustomerDetails from './pages/CustomerDetails'
import UserManagement from './pages/Users/UserManagement'
import Kyc from './pages/Kyc'
import Missing from './pages/Missing'
import RequireAuth from './components/organisms/RequireAuth'
import {setApiToken} from './reducers/tokenSlice.reducer'
import {hideLoader, showLoader} from "./reducers/loaderSlice.reducer";

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
        getApiToken()
    }, [])

    return (
        <Routes>
            <Route path='/' element={<BaseLayout/>}>
                {/* Public routes */}
                <Route path='/' element={<Login/>}/>
                <Route path='login' element={<Login/>}/>

                {/* Protected routes */}
                <Route element={<RequireAuth/>}>
                    <Route path='dashboard' element={<Dashboard/>}/>
                </Route>

                <Route element={<RequireAuth/>}>
                    <Route path='customers' element={<Customers/>}/>
                </Route>

                <Route element={<RequireAuth/>}>
                    <Route path="customers/:customerGuid" element={<CustomerDetails/>}/>
                </Route>

                <Route element={<RequireAuth/>}>
                    <Route path='kyc' element={<Kyc/>}/>
                </Route>

                <Route element={<RequireAuth/>}>
                    <Route path='kyc/:customerId' element={<CustomerDetails/>}/>
                </Route>

                <Route>
                    <Route path='users/user-management' element={<UserManagement />} />
                </Route>

                {/* Catch all */}
                <Route path='*' element={<Missing />} />
            </Route>
        </Routes >
    )
}

export default App
