import React, { useState } from 'react'

const FileExplorer = ({files}) => {
  const[showfolder,setShowFolder] = useState(false);
  if(files.isFolder){
  return (
    <>
    <div style={{cursor:'pointer'}} onClick={()=>setShowFolder(!showfolder)}>{!showfolder?"📁":"📂"}{files.name}</div>
    <div style={{marginLeft:'15px',display:`${showfolder ?"block":"none"} `}}>
    {files.items.map((item,index)=>{
      return <FileExplorer files ={item}/>
    })}
    </div>
    </>
  )
}
else{
  return(
    <div>🗒️{files.name}</div>
  )
}
}

export default FileExplorer