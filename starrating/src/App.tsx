import { useState } from "react"
import { FaStar } from "react-icons/fa";
import "./App.css"
function App() {
  const[rating,setRating] = useState<number>(0);
  const [hover,setHover] = useState<number>(0);
  const handleClick =(index:number)=>{
   setRating(index+1);
  }
  console.log(rating)
  return (
    <div className="app">
     Star Rating
     <div>
    {[...Array(5)].map((_,index)=>{
      return <span className={`${hover>index?"hover":""}`} onMouseLeave={()=>setHover(rating)} onMouseEnter={()=>setHover(index+1)}  onClick={()=>handleClick(index)} key={index}>
        <FaStar />
      </span>
    })}
    </div>
    </div>
  )
}

export default App
