import React from 'react'
import Comments from './Comments'
const NestedComments = ({commentsdata,handleSubmit,handleDelete ,handleEdit}) => {
    console.log("comment",commentsdata)
  return (
    <div>
        {commentsdata.map((comment)=>{
            return <Comments handleSubmit={handleSubmit} comment={comment} handleDelete={handleDelete} handleEdit={handleEdit}/>
        })}
    </div>
  )
}

export default NestedComments