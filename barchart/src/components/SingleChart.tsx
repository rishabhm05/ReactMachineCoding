
import { useEffect, useState } from "react"
import { singlechartporps } from "../types"


const SingleChart = ({chart,toggle}:singlechartporps) => {
  const[height,setHeight] = useState<number>(0);
  useEffect(()=>{
    if(toggle){
    setHeight(chart.ticketCount*10);
    }
    else{
      setHeight(0);
    }
  })
  
  return (
    
    <div  className="singleChart" style={{background:chart.colour,height:`${height}px`}}>
      <p className="tooltip">{chart.name} -{chart.ticketCount}</p>
    </div>
    
  )
}

export default SingleChart