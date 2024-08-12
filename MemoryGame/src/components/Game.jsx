import React, { useEffect, useState } from 'react'
const shuffle =(data)=>{
let countries = Object.keys(data);
let capital = Object.values(data);
let shuffledarr = [...countries,...capital];
for(let i=0;i<shuffledarr.length;i++){
    let shuffledidx = Math.floor(Math.random()*shuffledarr.length);
    let currentitem = shuffledarr[i];
    shuffledarr[i] = shuffledarr[shuffledidx];
    shuffledarr[shuffledidx] =currentitem
}
return shuffledarr;
}
const Game = ({data}) => {
const[shufflearr,setShuffleArr] = useState([]);
const[selectedOptions,setSelectedOptions] = useState([]);
const[correct,setCorrect] = useState(false);
const[incorrect,setInCorrect] = useState(false);
useEffect(()=>{
 let arr =shuffle(data);
 setShuffleArr(arr);
},[])
const handleClick =(item)=>{
    if(selectedOptions.length==2) return;
    setSelectedOptions([...selectedOptions,item]);
   

}
useEffect(()=>{
    let timer;
    if(selectedOptions.length==2){
    if(data[selectedOptions[0]]===selectedOptions[1]||data[selectedOptions[1]]===selectedOptions[0]){
        setCorrect(true);   
        timer =setTimeout(()=>{
        let newarr = shufflearr.filter((item)=>!selectedOptions.includes(item));
        setShuffleArr(newarr)
        setCorrect(false);
        setSelectedOptions([])
     },1000)  
    }
    else{
      setInCorrect(true);
      timer =setTimeout(()=>{
        setSelectedOptions([])
        setInCorrect(false);
      },1000)
    }
    return ()=>clearInterval(timer)
}
},[selectedOptions]);
console.log(selectedOptions)
  return (
    <div className='game'>
        {shufflearr.length==0&&<p>Congratulations!!</p>}
        {shufflearr.map((item)=>{
            return <button onClick={()=>handleClick(item)} className={`btn ${selectedOptions.includes(item)?"selected":""} ${correct&&selectedOptions.includes(item)?"correct":""} ${incorrect&&selectedOptions.includes(item)?"incorrect":""}`}>{item}</button>
        })}
    </div>
  )
}

export default Game