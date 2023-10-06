import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/ai-software' element={<h1>Page Not Built Yet</h1>} />
        <Route path='/blog' element={<h1>Page Not Built Yet</h1>} />
        <Route path='/contact-us' element={<h1>Page Not Built Yet</h1>} />
    </Routes>
  )
}

export default AllRoutes