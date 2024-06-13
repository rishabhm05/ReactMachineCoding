import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import SingleCartItem from './SingleCartItem';
const Cart = () => {
    const{cart} = useSelector((state)=>state.cart);
    const[totalCost,setTotalCost] = useState(0);
    useEffect(()=>{
        let cost =cart.reduce((acc,item)=>{
        return  acc+Number(item.price)
        },0)
        setTotalCost(cost)
    },[cart])
    return (
   <div className='cart'>
    <h1>Cart</h1>
   {cart.length>0&&cart.map((item)=>{
    return <SingleCartItem product={item}/>
   })}
   <p>Total Cost:{totalCost}</p>
   </div>  
  )
}

export default Cart