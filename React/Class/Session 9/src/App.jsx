import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Pages/Home';
import Product from './components/Pages/Product';
import Contact from './components/Pages/Contact';
import ProductDetails from './components/Pages/ProductDetails';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
