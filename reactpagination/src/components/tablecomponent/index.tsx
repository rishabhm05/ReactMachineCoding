
import { tableprops} from "../../types";
import { tableheading } from "../../utils/config";
import "./table.css"
import SingleRecord from "./SingleRecord";
const Table =({userData,setUserData,totalPages,currentPage,setCurrentPage}:tableprops)=>{
    let start = currentPage?(currentPage-1)*10:0;
  
let end;
if(totalPages&&currentPage){
    end = currentPage==1?10:(currentPage*totalPages)*10;
}
    console.log(start,end)
    const handlePage =(page:number)=>{
        if(setCurrentPage){
            setCurrentPage(page)
        }
    }
    return(
    <>
    <table className="table">
        <thead>
        <tr>
        {tableheading.map((item)=>{
            return <th key={item.id}>{item.name}</th>
        })}
        </tr>
        </thead>
        <tbody>
        
           {userData.slice(start,end).map((user)=>{
            return <SingleRecord key={user.id} user ={user} userData={userData} setUserData={setUserData}/>
           })}

        </tbody>

    </table>
    <div className="pagination">
    {[...new Array(totalPages)].map((_,index)=>{
        return <button key={index} onClick={()=>handlePage(index+1)}>{index+1}</button>
    })}
    </div>
    </>
)
}
export default Table;