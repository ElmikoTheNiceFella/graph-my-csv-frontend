import { useEffect, useState } from 'react'
import './App.css'
import { FileUpload, RenderGraphs, Error, Loading } from './components'
import LoadingImage from './assets/loading.svg'

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
      {/* <p>The functionality is done, UI Work in progress... Estimated finish time: 2 april 2025</p> */}
      {!status && <FileUpload setData={setData} setError={setError} setStatus={setStatus} />}

      {!error[0] && status && <Loading image={LoadingImage} status={status} />}

      {error[0] === "NOERROR" ? <RenderGraphs rawData={data} /> :
        error[0] === "ERROR" ? <Error error={error} /> :
          <p>{status}</p>}
    </>
  )
}

export default App
