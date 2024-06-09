import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import { CATEGORIES_URL } from './utils'
import { Sluggable,  products } from './types'
import Products from './components/Products'
import { productsarray } from './data'
function App<T extends Sluggable >(){
 const[Categories,setCategories] = useState<T[]>([])
 const[products,setProducts] = useState<products[]>(productsarray);
 const[selectedFilters,setSelectedFilters] =useState<string[]>([]);

 useEffect(()=>{
  fetchCategories()
 },[])
 useEffect(()=>{
  if(selectedFilters.length>0){
  let updatedproducts = productsarray.filter((product)=>selectedFilters.includes(product.category));
  setProducts(updatedproducts)
  }
  else{
    setProducts(productsarray)
  }
 },[selectedFilters])
 const fetchCategories =async()=>{
    let res = await fetch(CATEGORIES_URL);
    const data:T[] = await res.json();
   setCategories(data.slice(0,5));

  }
   return (
    <div className='app'>
      <Filter Categories={Categories} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
      <Products products={products}/>
    </div>
  )
}

export default App
