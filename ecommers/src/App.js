import React from 'react'
import Homepage from './pages/Homepage'
import Productlist from './pages/Productlist'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Homepage/>
      <Productlist/>
      <Product/>
      <Register/>
      <Login/>
      <Cart/>
     
    </div>
  )
}

export default App

