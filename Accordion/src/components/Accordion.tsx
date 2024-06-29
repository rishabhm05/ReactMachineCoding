import { useEffect, useState } from "react"

type accordionprops ={
    accordion:{
        id:number,
        title:string,
        text:string
    }
}

const Accordion = ({accordion}:accordionprops) => {
 const[open,setOpen] = useState<boolean>(false);
  useEffect(()=>{
    if(accordion.id===1){
        setOpen(!open)
    }
  },[])
  return (
    <div className="accordion">
          <div className="accordion-head">
     <h1>{accordion.title}</h1>
     <span onClick={()=>setOpen(!open)}>{!open?"🔽":"🔼"}</span>
     </div>
    {open&& <p>{accordion.text}</p>}
    
   
  
    </div>
  )
}

export default Accordion