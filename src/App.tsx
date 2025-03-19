import { useState } from 'react'
import './App.css'
import { FileUpload } from './components'
import { GenerationError } from './types/generationTypes'

const App = () => {

  const [generationError, setGenerationError] = useState<GenerationError>("NONE")

  const handleGeneration = (file:(File|null)):void => {
    if (!file) {
      setGenerationError("NO_FILE")
      return
    }
    console.log(file?.name)
  } 

  return (
    <>
      <FileUpload handleGeneration={handleGeneration} />
    </>
  )
}

export default App
