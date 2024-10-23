
import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Appbar from './components/Appbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Users from './components/pages/Users';
import NotFound from './components/pages/NotFound';

import './App.css'

function App() {

  return (
    <>
      <Appbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
