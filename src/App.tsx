import { useState } from 'react'
import './App.css'
import { FileUpload, Error, RenderGraphs } from './components'


const App = () => {

  const [data, setData] = useState<string>("")
  const [error, setError] = useState<string[]>(["", "", ""])

  return (
    <>
      <FileUpload setData={setData} setError={setError} />
      {error[2] ? <Error error={error} /> : <RenderGraphs data={data} />}
    </>
  )
}

export default App
