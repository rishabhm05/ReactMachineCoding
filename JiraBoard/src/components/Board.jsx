import React, { useState } from 'react'
import SingleList from './SingleList';
let items =[
    {
        id:1,
        label:"TODO"
    },
    {
        id:2,
        label:"INPROGRESS"
    },
    {
        id:3,
        label:"Completed"
    }
]
const Board = () => {
  const [task,setTask ] = useState("");
  const [todo,setTodo] = useState([]);
  const[inprogress,setInProgress] = useState([]);
  const[completed ,setCompleted] = useState([]);
  const handleAddTask = ()=>{
    let udpatedtodo =[...todo];
    let newtask ={
        id:Date.now(),
        task:task
    }
    udpatedtodo =[...todo,newtask];
    setTodo(udpatedtodo);
    setTask("")
  }
  const handleDragStart = (e, task, sourceColumn) => {
    let obj = JSON.stringify(task)
    e.dataTransfer.setData("task", obj);
    e.dataTransfer.setData("sourceColumn", sourceColumn);
    
  };
  const handleDrop =(e,targetColumn)=>{
    const task = JSON.parse(e.dataTransfer.getData("task"));
    const sourceColumn = e.dataTransfer.getData("sourceColumn");
    console.log(task,sourceColumn)
    if(sourceColumn!=targetColumn){
      switch(targetColumn){
        case "TODO":
          setTodo([...todo,task])
          break;
        case "INPROGRESS":
          setInProgress([...inprogress,task])
          break;
        case "Completed":
          setCompleted([...completed,task]);
          break;
        default:
          break;
      }
      switch(sourceColumn){
        case "TODO":
          let updatedtodo = todo.filter((item)=>item.id!==task.id);
          setTodo(updatedtodo)
          break;
        case "INPROGRESS":
          let updatedtodoprogress = inprogress.filter((item)=>item.id!==task.id);
          setInProgress(updatedtodoprogress)
          break;
        case "Completed":
          let updatedtodocompleted = completed.filter((item)=>item.id!==task.id);
          setCompleted(updatedtodocompleted)
        break;
        default:
          break;  
      }
    }
  }
  return (
    <>
    <input type="text" placeholder="Enter new ticket"  onChange={(e)=>setTask(e.target.value)} value={task}/>
    <button onClick={handleAddTask}>Add Task</button>
    <div className='board' >
     <SingleList onDrop={(e)=>handleDrop(e,"TODO")}  onDragStart={handleDragStart}  title ="TODO" items ={todo}/>
     <SingleList onDrop={(e)=>handleDrop(e,"INPROGRESS")}  onDragStart={handleDragStart} title ="INPROGRESS" items={inprogress}/>
     <SingleList onDrop={(e)=>handleDrop(e,"Completed")}  onDragStart={handleDragStart} title ="Completed" items={completed}/>
     </div>
    </>
  )
}

export default Board