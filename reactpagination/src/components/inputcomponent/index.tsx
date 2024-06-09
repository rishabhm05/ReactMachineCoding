import { useReducer } from "react";
import { inputarr } from "../../utils/config";
import { Action, fieldstate, userdataprops } from "../../types";
import Button from "../addbuttoncomponent";
import "./input.css"
const Input =({userData,setUserData}:userdataprops)=>{

const initialState:fieldstate ={
    "name":"",
    "age":"",
    "gender":""
}
const handleInput =(state:fieldstate,action:Action)=>{
   switch(action.type){
    case "SET_AGE":
         return {...state,age:action.payload}
    case "SET_GENDER":
        return {...state,gender:action.payload}
    case "SET_NAME":
        return {...state,name:action.payload}
    case "RESET":
        return {...state,name:"",age:"",gender:""}
    default:
        return state;
   }
}
const[state,dispatch] = useReducer(handleInput,initialState);
const handleClick =():void=>{
    let updateduserData = [...userData];
    if(state.name&&state.gender&&state.age){
   let newuser={
    id:Date.now(),
    ...state
   }
   updateduserData.push(newuser)
    setUserData(updateduserData);
    }
    dispatch({type:"RESET"})
    }

return(
    <>
    <div className="inputfields">
    {inputarr.map((input)=>{
         
         const val:string = state[input.name as keyof fieldstate]; 
        
         return <input type="text" value={val} onChange={(e)=>dispatch({type:`SET_${input.name.toUpperCase()}`as 'SET_NAME'| 'SET_AGE' |'SET_GENDER',payload:e.target.value})} name={input.name} key={input.id} placeholder={input.name.toUpperCase()}/>
    })}
    </div>
    <Button handleClick={handleClick} />
 </>
)
}
export default Input;