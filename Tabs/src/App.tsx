
import { useState } from 'react'
import './App.css'
import Tab from './components/Tab'
import { data } from './constants'

function App() {
 const[currentTab,setCurrentTab] = useState<number>(1);
  const handleChange =(id:number)=>{
    setCurrentTab(id);
  }
  return (
    <>
    {data.map((item)=>{
     return <button className={`${item.id===currentTab?"active":""}`} onClick={()=>handleChange(item.id)} key={item.id}>{item.label}</button>
    })}
    {data.map((tab)=>{
     return <>{tab.id===currentTab&&<Tab  key={tab.id}>{tab.content}</Tab>}</>
    })}
     
    </>
  )
}

export default App
