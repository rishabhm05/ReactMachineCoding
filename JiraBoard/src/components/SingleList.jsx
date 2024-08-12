import React from 'react'

const SingleList = ({title,items ,onDragStart,onDrop}) => {
  return (
    <div  onDrop={onDrop} className='board-item' onDragOver={(e)=>e.preventDefault()}>
      <p>{title}</p>
      {items.map((item,index)=>{
        return <div onDragStart={(e)=>onDragStart(e,item,title)} className='task' draggable>
          <span>{item.task}</span>
        </div>
      })}
    </div>
  )
}

export default SingleList