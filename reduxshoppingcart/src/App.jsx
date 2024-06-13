import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
 

  return (
    <div className='app'>
     <h1 className='heading'>Redux Shopping Cart</h1>
    <div className='main'>
     <Products/>
   <Cart/>
     </div>
    </div>
  )
}

export default App
