import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import './App.css'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </>
  )
}

export default App
