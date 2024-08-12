

import { useState } from 'react'
import './App.css'
import Board from './components/Board';
const generateBoxes:(string | null)[][] = Array.from({length:3},()=>{
  return Array(3).fill(null)
})
function App() {
  const[boxes,setBoxes] = useState<(string|null)[][]>(generateBoxes);
  const[player,setPlayer] = useState<string>('X');
  console.log(boxes)
  return (
    <>
     <Board boxes={boxes} setBoxes={setBoxes} player={player} setPlayer={setPlayer}/>
    </>
  )
}

export default App
