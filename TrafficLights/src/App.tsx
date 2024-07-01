import { useEffect, useRef, useState } from 'react'
import './App.css'
import { data, lights } from './config'
function App() {
  const [currentLight,setCurrentLight] = useState<string>(data[0].color);
  let timer = useRef<number|null>(null);
  useEffect(()=>{
    let finditem:lights|undefined = data.find((item)=>item.color===currentLight);
   timer.current = setTimeout(()=>{
    setCurrentLight(finditem?.next as string)
   },finditem?.time)

   return ()=>{
    if(timer.current){
      clearInterval(timer.current)
    }
   }
  },[currentLight])
  return (
    <div className='traffic'>
      {data.map((item)=>{
        return <div className='light' style={{background:`${currentLight===item.color?`${item.color}`:""}`}}></div>
      })}
    </div>
  )
}

export default App
