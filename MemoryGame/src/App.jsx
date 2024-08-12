import { useState } from 'react'

import './App.css'
import Game from './components/Game'
const DATA = {
  India: 'Delhi',
  China: 'Beijing',
  Russia: 'Moscow',
  Afghanistan: 'Kabul',
  France: 'Paris',
  Germany: 'Berlin',
  England: 'London',
};
function App() {
const[data,setData] = useState(DATA);  
return (
    <>
      <Game data={data}/>
    </>
  )
}

export default App
