import React, { useState } from 'react'

const Comments = ({comment,handleSubmit,handleDelete,handleEdit}) => {
const[reply,setReply] = useState(false);
const[newinput,setNewInput] = useState("");
const[editComment,setEditComment] = useState(false);
const[editInput,setEditInput] = useState(comment.Comment);
const handleAdd =(newinput,id) =>{
 handleSubmit(newinput,id);
 setReply(false)
}
const handleEditSave =()=>{
handleEdit(editInput,comment.id);
setEditComment(false);
}
  return (
    <div>
      {editComment?(<div>
        <input type="text" value={editInput} onChange ={(e)=>setEditInput(e.target.value)}/>
        <button onClick={handleEditSave} >Save</button>
        <button onClick={() => setEditMode(false)}>Cancel</button>
      </div>):(
       <>
       <p>{comment.Comment}</p>
       <button onClick={()=>setReply(!reply)}>Reply</button>
       <button onClick={()=>setEditComment(!editComment)}> Edit</button>
       <button onClick={()=>handleDelete(comment.id)}>Delete</button>
       </>
      )
    }
          
            {reply&&<div>
                 <input type='text' placeholder='Enter the reply' value={newinput} onChange={(e)=>setNewInput(e.target.value)}/>
                 <button onClick={()=>handleAdd(newinput,comment.id)}>Add</button>
                 <button onClick ={()=>setReply(false)}>Cancel</button>
                </div>}
        <div style={{marginLeft:'15px'}}>
        {comment.replies.map((nestedcomment)=>{
            return <Comments handleSubmit={handleSubmit} comment={nestedcomment} handleDelete={handleDelete} handleEdit={handleEdit}/>
        })}
        </div>


   </div>
  )
}

export default Comments