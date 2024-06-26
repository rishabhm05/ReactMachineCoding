
import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [inputfields,setInputFields] = useState(Array(4).fill(""));
  const inputrefs = useRef<(HTMLElement|null)[]>([]);
  const handleChange =(e:React.ChangeEvent<HTMLInputElement>,index:number)=>{
    
   let newotp =[...inputfields];
   newotp[index] =e.target.value;
   setInputFields(newotp)
   if(index<inputfields.length-1){
    inputrefs.current[index+1]?.focus()
   }
  }
  const handleKeydown = (e:React.KeyboardEvent,index:number)=>{
    if(e.key==="Backspace"){
      e.preventDefault();
      let newotp=[...inputfields];
      newotp[index] ="";
      setInputFields(newotp);
       if(index>0){
        inputrefs.current[index-1]?.focus()
       }
    }
  }
  return (
    <div className='otp'>
   {[...Array(4)].map((_,index)=>{
    return <input ref={(el)=>{
      if(inputrefs.current){
        inputrefs.current[index]=el
      }
    }} className='otp-box' key={index} type="text"
    onChange={(e)=>handleChange(e,index)}
    onKeyDown={(e)=>handleKeydown(e,index)}
    autoFocus={index===0}
    value={inputfields[index]}
    />
   })}   
    </div>
  )
}

export default App
