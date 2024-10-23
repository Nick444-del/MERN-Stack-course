import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Components/Home'
import Appbar from './Components/Appbar'
import Adduser from './Components/Pages/Adduser'
import Users from './Components/Pages/Users'

import './App.css'

function App() {

  return (
    <>
      <Appbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/adduser' element={<Adduser/>} />
        <Route path='/users' element={<Users/>} />
      </Routes>
    </>
  )
}

export default App
