
import { useCallback, useEffect, useState } from 'react'
import './App.css'
let order=0;
let i=0;
function App() {
  let bxarr:any[] =Array.from({length:3})
  for(let i=0;i<bxarr.length;i++){
  bxarr[i]=[];
  for(let j=0;j<bxarr.length;j++){
    if(i==1&&j!=0) continue;
  bxarr[i][j] ={i:i,j:j,order:null,isClicked:false}
  }
  }
  //console.log(bxarr)

 const[boxes,setBoxes] = useState(bxarr)
 const handleClick =(i:number,j:number)=>{
  const newboxes = boxes.map((row,rowindex)=>{
    return row.map((cell,cellindex)=>{
    if(rowindex==i&&cellindex==j){
      return {...cell,order:++order,isClicked:true}
    }
    else{
      return cell;
    }
    })
  })
  setBoxes(newboxes)
  
   
 }

  useEffect(() => {
    const resetBoxes = () => {
      // Flatten the boxes array and filter only clicked ones
      const clickedBoxes = boxes.flat();

      // Sort clicked boxes by their order
      clickedBoxes.sort((a, b) => a.order - b.order);
      let allclick:boolean = clickedBoxes.every((box)=>box.isClicked===true)
      // Reset isClicked state in the sorted order with a delay between each reset
      if(allclick){
      clickedBoxes.forEach((clickedBox, index) => {
        setTimeout(() => {
          setBoxes((prevBoxes) =>
            prevBoxes.map((row) =>
              row.map((cell) =>
                cell.i === clickedBox.i && cell.j === clickedBox.j
                  ? { ...cell, isClicked: false }
                  : cell
              )
            )
          );
        }, index * 1000); // 1000ms delay between each reset
      });
    };
  }
    // Call the reset function when boxes change
    resetBoxes();
  }, [boxes]);

console.log(boxes)
  return (
    <>
     <table>
      <tbody>
        {boxes.map((_,i)=>{
          return <tr>
            {boxes[i].map((_,j)=>{
              if(!(i==1&&j>0)){
              return <td><div  onClick={()=>handleClick(i,j)} className={`box ${boxes[i][j].isClicked===true?"fill":""} `}></div></td>
              }
            })}
          </tr>
        })}
      </tbody>
     </table>
    </>
  )
}

export default App
