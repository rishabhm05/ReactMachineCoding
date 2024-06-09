import { CHART_DATA } from './data'
import './App.css'
import BarChart from './components/BarChart'
import { useState } from 'react'
import { charts } from './types'

function App() {
  const [charts,setChartData] = useState<charts[]>(CHART_DATA)
  const[toggle,setToggle] = useState(false);
  return (
    <div className='app'>
      <button onClick={()=>setToggle(!toggle)}>Toggle Chart</button>
     {toggle&& <div className='y-axis'>
        <p>Number of Tickets</p>
      <BarChart toggle={toggle} charts={charts} />
      </div>
}
   
    {toggle&& <p>Departments</p>}
    </div>
  )
}

export default App
