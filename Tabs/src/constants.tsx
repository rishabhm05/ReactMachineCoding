import CssComponent from "./components/CssComponent"
import HtmlComponent from "./components/HtmlComponent"
import ReactComponent from "./components/ReactComponent"
interface tabdata{
    id:number,
    label: string,
    content:React.ReactElement
}

export const data:tabdata[] =[
    {
      id:1,
      label:"HTML",
      content:<HtmlComponent/>
    },
    {
      id:2,
      label:"CSS",
      content:<CssComponent/>
    },
    {
      id:3,
      label:"REACT",
      content:<ReactComponent/>
    }
  ]
  