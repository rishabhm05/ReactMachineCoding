const useComments = ()=>{
    const handleinsert =(commentsdata,newcomment,id)=>{
        const newentry ={
          "id":Date.now(),
          "Name":newcomment,
          "Comment":newcomment,
          "replies":[]
        }
        if(id){
        return commentsdata.map((comment)=>{
            if(comment.id===id){
              return {...comment,replies:[...comment.replies,newentry]}
            }
            else if(comment.replies&&comment.replies.length>0){
                return {...comment,replies:handleinsert(comment.replies,newcomment,id)}
            }
            else{
              return comment;
            }
         })
        }
        else{
      return [...commentsdata,newentry];
        }
        return commentsdata;
    }
  const handleDelete =(commentsdata,id) =>{
//  debugger;
  let newdata= commentsdata.map((comment)=>{
      if(comment.id===id){
        return null;
      }
      else if(comment.replies&&comment.replies.length>0){
        return {...comment,replies:handleDelete(comment.replies,id)}
      }
       else{
        return comment;
       }
    })
   newdata = newdata.filter((cmnt)=>cmnt!=null);
   return newdata;
  }
  const handleEdit =(commentsdata,editcomment,id) =>{
   let newdata=  commentsdata.map((comment)=>{
      if(comment.id===id){
        return {...comment,"Comment":editcomment}
      }
      else if(comment.replies&&comment.replies.length>0){
        return {...comment,replies:handleEdit(comment.replies,editcomment,id)}
      }
      else {
        return comment;
      }
    })
   return newdata;
  }
 return {handleinsert,handleDelete ,handleEdit}
}
export default useComments;