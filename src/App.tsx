import { useEffect, useState } from 'react'
import './App.css'
import { FileUpload, RenderGraphs, Error } from './components'


const App = () => {

  const [data, setData] = useState<string[]>(["", ""])
  const [error, setError] = useState<string[]>(["", "", ""])
  const [status, setStatus] = useState<string>("")

  useEffect(() => {
    console.log(error)
    console.log(data)
  }, [data, error])

  return (
    <>
      <p>The functionality is done, UI Work in progress... Estimated finish time: 2 april 2025</p>
      <FileUpload setData={setData} setError={setError} setStatus={setStatus} />
      <p>{error[1]}</p>
      {error[0] === "NOERROR" ? <RenderGraphs rawData={data} /> :
        error[0] === "ERROR" ? <Error error={error} /> :
          <p>{status}</p>}
    </>
  )
}

export default App
