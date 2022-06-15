import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import authService from './services/auth.service'
import BaseLayout from './pages/BaseLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Missing from './pages/Missing'
import RequireAuth from './components/RequireAuth'
import { setApiToken } from './reducers/tokenSlice.reducer'

const App = () => {
  const dispatch = useDispatch()

  const getApiToken = async () => {
    try {
      const response = await authService.getApiToken(
        process.env.REACT_APP_API_USERNAME,
        process.env.REACT_APP_API_PASSWORD
      )
      dispatch(setApiToken(response?.apiToken))

    } catch (error) {
      // TODO: Add popup or toast component to handle errors
      console.log(error)
    }
  }

  useEffect(() => {
    getApiToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Routes>
      <Route path='/' element={<BaseLayout />}>
        {/* Public routes */}
        <Route path='/' element={<Login />} />
        <Route path='login' element={<Login />} />

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path='example' element={<Home />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>

        {/* Catch all */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes >
  )
}

export default App
