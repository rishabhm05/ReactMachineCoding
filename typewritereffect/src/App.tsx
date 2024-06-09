import { useState } from 'react'
import './App.css'
import TypeWriterEffect from './components/TypeWriterEffect';
let text ="HELLO RISHABH!"
function App() {
  
  const[generate,setGenerate] = useState<boolean>(false);
  const handleGenerate =()=>{
    if(generate){
      return;
    }
    else{
      setGenerate(true);
    }
  }
  const handleReset =()=>{
    if(generate){
    setGenerate(false)
    }
  }
  return (
    <>
      <button onClick={handleGenerate}>Start Generating</button>
      <button onClick={handleReset}>Reset</button>
      {generate&&<TypeWriterEffect text={text}/>}
    </>
  )
}

export default App
