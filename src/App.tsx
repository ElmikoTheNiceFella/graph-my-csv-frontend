import { useState } from 'react'
import './App.css'
import { FileUpload, RenderGraphs } from './components'


const App = () => {

  const [data, setData] = useState<string[]>(["", ""])
  const [error, setError] = useState<string[]>(["", "", ""])
  const [status, setStatus] = useState<string>("")

  return (
    <>
    <p>Work in progress... Estimated finish time: 1 april 2025</p>
      <FileUpload setData={setData} setError={setError} setStatus={setStatus} />
      <p>{status}</p>
      <p>{error[1]}</p>
      {/* {error[2] === "" ? <Error error={error} /> : <RenderGraphs rawData={data} />} */}
      <RenderGraphs rawData={data} />
    </>
  )
}

export default App
