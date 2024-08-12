import { useState } from 'react'
import data from './data'
import FileExplorer from './components/FileExplorer';
function App() {
  const [files,setFiles] = useState(data);

  return (
    <>
  <FileExplorer files={files}/> 
    </>
  )
}

export default App
