import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import DevicePage from './pages/DevicePage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/device' element={<DevicePage/>}/>
        <Route path='/about' element={<AboutPage/>  }/>
      </Routes>
    </Router>
  )
}

export default App