import { useState,useEffect } from 'react';
import './App.css'
import Progress from './components/Progress'

function App() {
  const [progress,setProgress] = useState<number>(0);
  useEffect(()=>{
    let timer:number;
    if(progress<100){
     timer = setInterval(()=>{
       setProgress((prevprogress)=>{
            if(prevprogress>=100){
                clearInterval(timer);
                return prevprogress
            }
          return  prevprogress+10
        })
     },1000)
    }
    return ()=>clearInterval(timer)
  },[])
  console.log(progress)

  return (
    <>
     <Progress progress={progress}/>
    </>
  )
}

export default App
