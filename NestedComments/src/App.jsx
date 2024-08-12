import { useState } from 'react'
import CommentsData from "./data.json";
import './App.css'
import Comments from './components/Comments';
import NestedComments from './components/NestedComments';
import useComments from './hooks/useComments';
function App() {
  const[commentsdata,setCommentsData] = useState(CommentsData);
   const{handleinsert,handleDelete:handledelete,handleEdit:handleeditcomment}=useComments();
  const handleSubmit =(comment,id)=>{
    console.log(comment,id);
  const newdata = handleinsert(commentsdata,comment,id);
  console.log(newdata)
 setCommentsData([...newdata]);
  }
  const handleDelete =(id)=>{
  const newdata = handledelete(commentsdata,id);

  setCommentsData([...newdata])
  }

  const handleEdit = (data,id)=>{
  let newdata = handleeditcomment(commentsdata,data,id);
  setCommentsData([...newdata])
  }

  return (
    <>
    <NestedComments commentsdata={commentsdata} handleSubmit={handleSubmit} handleDelete={handleDelete} handleEdit={handleEdit}/>
     </>
  )
}

export default App
