import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const[hours,setHours] = useState("");
  const[minutes,setMinutes] = useState("");
  const[seconds,setSeconds] =useState("");
  const[isRunning,setIsRunning] = useState(false);
  
  const handleTimer =(e,key) =>{
  let val = parseInt(e.target.value,10) ||0;
    if(key=="seconds"){
    
        setSeconds(val)
          }
    if(key=="minutes"){
      
        setMinutes(val)
      
    }
    if(key=="hours"){
      setHours(val)
    }
  }
 
 useEffect(()=>{
  if(!isRunning){
    if(minutes>60){
       setMinutes(minutes%60);
       setHours((prevhours)=>{
        return prevhours+Math.floor(minutes/60)
       })
    }
    if(seconds>60){
      setSeconds(seconds%60);
      setMinutes((prevminutes)=>{
        return prevminutes + Math.floor(seconds/60)
      })
    }
  }
  if(isRunning){
    if (
      parseInt(seconds, 10) === 0 &&
      parseInt(minutes, 10) === 0 &&
      parseInt(hours, 10) === 0
    ) {
      console.log("called");
      setIsRunning(false);
    }
    const interval = setInterval(()=>{
      if(seconds>0){
        setSeconds((prevsecond) =>prevsecond-1)
      }
      else if(minutes>0){
        setMinutes((prevminutes)=>prevminutes-1)
        setSeconds(59)
      }
      else if(hours>0){
        setHours((prevhours) =>prevhours-1)
        setMinutes(59);
        setSeconds(59)
      }
    },1000)
    return ()=>clearInterval(interval)
  }
 },[seconds,hours,minutes,isRunning])
 const handleReset =()=>{
  setHours("");
  setSeconds("")
  setMinutes("")
 }
  return (
    <>
    <p>CountDown Timer</p>
    <input onChange={(e)=>handleTimer(e,"hours")} type="text" placeholder ="HH" value={hours}/>
    <input onChange={(e)=>handleTimer(e,"minutes")} type="text" placeholder ="MM" value={minutes}/>
    <input onChange={(e)=>handleTimer(e,"seconds")} type="text" placeholder='SS' value={seconds}/>
    <button onClick={()=>setIsRunning(!isRunning)}>{!isRunning?"Start":"Pause"}</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )

}
export default App
