import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useNotifications from './useNotifications'
import SingleNotification from './components/SingleNotification'

function App() {
 const {showNotification,notifications ,setNotifications} = useNotifications();

  return (
    <div>
    <div className='notifications'>
     {notifications.map((notification)=>{
      return <SingleNotification notifications ={notifications} notification={notification} key={notification.id} setNotifications={setNotifications}/>
     })}
     </div>
     <button onClick={()=>showNotification('Success','Success message')}>Success Toast</button>
     <button onClick={()=>showNotification('Info','Info message')}>Info Toast</button>
     <button  onClick={()=>showNotification('Error','Error message')}>Error Toast</button>
    </div>
  )
}

export default App
