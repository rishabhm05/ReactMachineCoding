import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { addToCart ,removeFromCart} from '../../slices/cartSlice';
const SingleProduct = ({product}) => {
  const {cart} = useSelector((state) =>state.cart);
  const dispatch =useDispatch()
  const handleAddToCart =()=>{
   dispatch(addToCart(product))
  }
  const handleRemovefromCart =()=>{
   dispatch(removeFromCart(product.id))
  }
  return (
    <div className='single-product'>
        <img src ={product.image} alt={product.category}/>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <div className='btn'>
          {!cart.some((item)=>item.id===product.id)? <button onClick={handleAddToCart} className='btn-primary'>Add To Cart</button>: <button onClick={handleRemovefromCart} className='btn-primary'>Remove From Cart </button>}
       

        </div>
    </div>
  )
}

export default SingleProduct