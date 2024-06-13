import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchproducts } from '../../slices/productSlice'
import SingleProduct from './SingleProduct';
const Products = () => {
    const dispatch = useDispatch();
     const {products,loading,error}=useSelector((state)=>state.product);
     
    useEffect(()=>{
        dispatch(fetchproducts())
    },[])
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Something went wrong.. Please try after some time</h1>
    }
  return (
<div className='products'>
  {products.map((product)=>{
    return <SingleProduct product={product}/>
  })}
  </div>
  )
}

export default Products;