interface boardprops{
    boxes:(string|null) [][],
    setBoxes :(boxes:(string|null) [][])=>void;
    player:string,
    setPlayer :(player:string)=>void;
}
import { deepcopy } from "../utils";
const Board = ({boxes,setBoxes ,player,setPlayer}:boardprops) => {
  const checkWinner =()=>{
    //row winner
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i][0] !== null) {
          let rowWinner = true;
          for (let j = 1; j < boxes[i].length; j++) {
              if (boxes[i][j] !== boxes[i][0]) {
                  rowWinner = false;
                  break;
              }
          }
          if (rowWinner) {
              return boxes[i][0]; 
          }
      }
  }
  //col winner
 for(let j=0;j<boxes.length;j++){
  if(boxes[0][j]!==null){
    let colwinner = true
    for(let i=0;i<boxes.length;i++){
      if(boxes[0][j]!==boxes[i][j]){
        colwinner=false;
        break;
      } 
    }
    if(colwinner){
      return boxes[0][j]
    }
  }
 }
 //maindiagonal
let symbol = boxes[0][0];
let winner =true;
if(symbol){
for(let i=1;i<boxes.length;i++){
  if(boxes[i][i]!=symbol){
   winner=false;
   break;
  }
}
if(winner){
  return symbol
}
}
//seconddiagonal
symbol = boxes[0][boxes.length-1]
if(symbol){
for(let i=1;i<boxes.length;i++){
  if(symbol!==boxes[i][boxes.length-i-1]){
    winner =false;
    break;
  }
}
if(winner){
  return symbol
}
}
   
  }
  let winner = checkWinner();
  
  const handleBox =(id:number,index:number)=>{
    let newboard = deepcopy(boxes) as (string|null)[][]; 
   
    if(!newboard[id][index]||!winner){
     
      
    newboard[id][index] = player;
    setBoxes(newboard as (string|null)[][]);
    
    if(player==='X'){
    setPlayer('O');
    }
    else{
        setPlayer('X');
    }
    
  
  }
  
  }
  
  return (
    <>
   <table>
    <tbody>
      {boxes.map((box,id)=>{
        return<tr>
            {box.map((_,index)=>{
                return <td  onClick ={()=>handleBox(id,index)} className="box" key={`${id}-${index}`}>{boxes[id][index]}</td>
            })}
        </tr>
      })}
    </tbody>
   </table>
   {winner?<p>Winner is {winner}</p>:<p>Player {player} turn.</p>}
   </>
  )
}

export default Board