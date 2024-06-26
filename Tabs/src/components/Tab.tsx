
interface tabprops{
    children:React.ReactNode
    
}
const Tab = ({children}:tabprops) => {
  return (
    <div >{children}</div>
  )
}

export default Tab