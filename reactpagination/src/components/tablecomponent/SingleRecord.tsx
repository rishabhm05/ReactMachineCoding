import { useState,useRef, useEffect } from "react";
import { singlerecordprops} from "../../types";
const SingleRecord =({user,userData,setUserData}:singlerecordprops)=>{

    const nameref = useRef<HTMLTableCellElement|null>(null);
    const genderref = useRef<HTMLTableCellElement|null>(null);
    const ageref =  useRef<HTMLTableCellElement|null>(null);
    const[editMode,setEditMode] =useState<boolean>(false);
    const[name,setName] = useState<string>(user.name);
    const [age,setAge] = useState<string>(user.age);
    const[gender,setGender] =useState<string>(user.gender);
    const handleDelete =(id:number)=>{
        let newuserData =userData.filter((data)=>data.id!==id);
        setUserData(newuserData);   
    }
    useEffect(()=>{
        if(editMode){
            nameref.current?.focus();
        }
    },[editMode])
    const handleEdit =(id:number):void=>{
        setEditMode(!editMode);
        let user = userData.find((user)=>user.id===id);
        if(user&&name&&age&&gender){
        let updateduser ={...user,name:name,age:age,gender:gender}

        setUserData(userData.map((user)=>user.id===id?updateduser:user));
        }
        
    }
    return(
        <tr>
        {<td ref={nameref} onInput={(e)=>setName((e.target as HTMLElement).textContent||'')} contentEditable ={editMode?true:false} suppressContentEditableWarning={true}>{user.name}</td>}
        <td  onInput={(e)=>setGender((e.target as HTMLElement).textContent||'')} ref={genderref}contentEditable ={editMode?true:false} suppressContentEditableWarning={true}>{user.gender}</td>
        <td  onInput={(e)=>setAge((e.target as HTMLElement).textContent||'')} ref={ageref} contentEditable ={editMode?true:false} suppressContentEditableWarning={true}>{user.age}</td>
        <td className="action">
            <button onClick={()=>handleEdit(user.id)} className="btn-table-edit">{!editMode?"Edit":"Save"}</button>
            <button onClick={()=>handleDelete(user.id)} className="btn-table-delete">Delete</button>
        </td>
    </tr>
    )
}
export default SingleRecord