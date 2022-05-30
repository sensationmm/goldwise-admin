import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import BaseLayout from './pages/BaseLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const MainRouter = () => {
  return (
    <Router>
      {/* TODO: handle the auth route */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="example" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Router >
  )
}

export default MainRouter
