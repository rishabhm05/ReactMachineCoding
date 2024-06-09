import { useEffect, useState } from 'react'
import './App.css'

import Input from './components/inputcomponent'
import Table from './components/tablecomponent'
import {  userdata } from './types'

function App() {
const[userData,setUserData] = useState<userdata[]>([]);
const[currentPage,setCurrentPage] = useState<number>(1);
const [totalPages,setTotalPages] =useState<number>(1);
console.log(userData,totalPages)
useEffect(()=>{
 if(userData.length>=10){
  setTotalPages(Math.ceil(userData.length/10));
 }

},[userData]);
useEffect(()=>{
  if(currentPage>1&&userData.length<=currentPage*10-10){
    setCurrentPage(currentPage-1)
  }
},[userData])
return (
    <div className='app'>
    <Input userData={userData} setUserData={setUserData}/> 
   
    {userData.length>0&&<Table userData={userData} setCurrentPage ={setCurrentPage} setUserData={setUserData} currentPage ={currentPage} totalPages={totalPages} />}
    </div>
  )
}

export default App
