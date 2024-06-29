import './App.css'
import Accordion from './components/Accordion'
import { data } from './data'
function App() {
  
  return (
    <div className='app'>
      <div className='accordion-container'>
    {data.map((accordion)=>{
      return <Accordion key={accordion.id} accordion ={accordion}/>
    })}
    </div>
    </div>
  )
}

export default App
