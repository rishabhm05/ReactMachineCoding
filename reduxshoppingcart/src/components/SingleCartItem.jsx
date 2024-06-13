import React from 'react'
import {useDispatch} from 'react-redux'
import { removeFromCart } from '../../slices/cartSlice'
const SingleCartItem = ({product}) => {
    const dispatch =useDispatch()
  
  const handleRemovefromCart =()=>{
   dispatch(removeFromCart(product.id))
  }
  return (
    
    <div className='single-cart-item'>
        <img src ={product.image} alt={product.category}/>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <div className='btn'>
        <button className='btn-primary' onClick={handleRemovefromCart}>Remove From Cart </button>
        </div>
    </div>
  )
}

export default SingleCartItem