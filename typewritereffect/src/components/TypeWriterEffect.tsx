import { useEffect, useState } from "react";

const TypeWriterEffect =({text}:{text:string})=>{
const [displayText,setDisplayText] = useState<string>(""); 
    useEffect(()=>{
   let interval:number;
   let currentindex=0;
  interval = setInterval(()=>{
    console.log(currentindex)
     setDisplayText((prevtext)=>{
        if(currentindex===text.length){
            clearInterval(interval)
            return prevtext;
        }
        return prevtext+text[currentindex++];
     })
  },100)
  
},[text])
return(
    <>
    <p>{displayText}</p>
    </>
)
}
export default TypeWriterEffect;