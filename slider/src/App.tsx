import { useEffect, useRef, useState } from 'react'
import './App.css'
import { images } from './constants'
function App() {
const[current,setCurrent] =useState<number>(0);
let ref = useRef<null|number>(null);
useEffect(()=>{
  
 ref.current = setInterval(handleNext,2000);
 return ()=>{
  if(ref.current){
    clearInterval(ref.current)
  }
 }

},[])
 const handlePrev =()=>{
   if(current==0){
    setCurrent(images.length-1)
   }
   else{
    setCurrent(current-1)
   }
 }
 const handleNext =()=>{
 
   setCurrent((previndex)=>{
    if(previndex===images.length-1){
    return  0;
    }
    else{
      return previndex+1;
    }

   })
  
}
const handleMouseOver =()=>{
  if(ref.current){
    clearInterval(ref.current);
  }
}
const handleMouseLeave =()=>{
  ref.current= setInterval(handleNext,2000)
}
  return (
    <div className='app'>
      <button onClick={handlePrev}>Prev</button>
      {images.map((img,index)=>{
        return  <img onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}  className={`slider-img ${index===current?"show":"hide"}`} src={img.download_url}/>
      })}
    
     <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App
