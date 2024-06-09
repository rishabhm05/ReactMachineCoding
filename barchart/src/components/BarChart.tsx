import { barchartprops } from "../types";
import SingleChart from "./SingleChart";

const BarChart =({charts,toggle}:barchartprops)=>{

 return(
 <div className="bar-container">

    {charts.map((chart)=>{
        return <SingleChart toggle={toggle}  chart={chart}/>
    })}
    </div>
  

 )
}
export default BarChart;