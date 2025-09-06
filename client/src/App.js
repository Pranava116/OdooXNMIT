import React from 'react'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth.jsx'
import Create from './pages/Create.jsx'
import Listing from './pages/Listing.jsx'

function App() {
  return (
    <div className='main-app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/create' element={<Create />} />
          <Route path='/listing' element={<Listing />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
