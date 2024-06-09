import { btnprops } from "../../types";
import "./button.css"

const Button =({handleClick}:btnprops)=>{
return(
    <button className="btn" onClick={handleClick}>
    Add
    </button>
)
}
export default Button;