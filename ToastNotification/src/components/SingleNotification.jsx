import React, { useEffect, useRef } from 'react'

const SingleNotification = ({notification,setNotifications ,notifications}) => {
 let background;
 switch(notification.type){
    case "Success":
        background="green"
    break;
    case "Info" :
        background ="yellow"
    break;
    case "Error" :
        background ="red"
    break;
    default:
        background="gray"
 }
 const timeref = useRef();
 useEffect(()=>{
    handleremove();
    return ()=>clearTimeout(timeref.current);
 },[])
 const handleremove = ()=>{
    timeref.current =setTimeout(()=>{
        setNotifications((prevNotifications) =>
            prevNotifications.filter((not) => not.id !== notification.id)
          );
    
    },5000)
 }
 const handleMouseOver =()=>{
    clearTimeout(timeref.current)
 }
 const handleMouseleave =()=>{
    handleremove();
 }
 const handleDelete = ()=>{
    setNotifications((prevNotifications) =>
        prevNotifications.filter((not) => not.id !== notification.id)
      );
 }
  return (
    <div  onMouseOver={handleMouseOver} onMouseLeave={handleMouseleave} className={`notification`} style={{background:`${background}`}}>
        <span>{notification.message}</span>
        <span className='cross' onClick={handleDelete}>❌</span>
    </div>
  )
}

export default SingleNotification