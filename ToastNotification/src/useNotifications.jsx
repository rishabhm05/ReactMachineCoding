import { useState } from "react";

const useNotifications =()=>{
 const[notifications,setNotifications] = useState([]);
 const showNotification =(type,message)=>{
   let newnotification ={
    id:Date.now(),
    type:type,
    message:message,
   }
   setNotifications((prevNotifications) => [...prevNotifications, newnotification]);
 }
 return {showNotification ,notifications,setNotifications}
}
export default useNotifications;