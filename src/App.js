import React, { useEffect } from 'react'
import authService from './services/auth.service'
import MainRouter from './router'

const App = () => {
  useEffect(() => {
    authService.getApiToken(
      process.env.REACT_APP_API_USERNAME,
      process.env.REACT_APP_API_PASSWORD
    )
  }, [])

  return (
    <div className='App'>
      <MainRouter />
    </div>
  );
}

export default App
