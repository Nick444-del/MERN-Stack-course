import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Appbar from './components/Appbar';
import Home from './components/pages/Home';
import User from './components/pages/User';
import Assigemnt from './components/pages/Assigemnt';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <Appbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/assigemnt' element={<Assigemnt />} />
      </Routes>
    </>
  )
}

export default App
