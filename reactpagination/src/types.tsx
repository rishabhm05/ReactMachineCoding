export  interface inputfields{
    id:number,
    name:string
}
export  interface fieldstate{
    name:string,
    age:string,
    gender:string
}
export type Action =
    | {type:"SET_NAME",payload:string}
    | {type:"SET_GENDER",payload:string}
    | {type:"SET_AGE",payload:string}
    |{type:"RESET"}
export interface userdataprops{
    userData:userdata[];
    setUserData:(userData:userdata[])=>void;
}
export interface btnprops{
    handleClick :()=>void
}
export interface tableprops{
    userData:userdata[];
    setUserData:(userData:userdata[])=>void;
    totalPages?:number;
    currentPage?:number;
    setCurrentPage?:(page:number)=>void
}
export interface userdata{
    id:number,
    name:string,
    age:string,
    gender:string
}
export interface singlerecordprops extends tableprops{
    user:userdata,
    
}