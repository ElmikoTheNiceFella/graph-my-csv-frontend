import { GeneratePropsType } from "../types/fileUploadTypes"

const GenerateButton = ({ userFile }: GeneratePropsType) => {

  const handleGeneration = (file: (File | null)) => {
    
  }

  return (
    <button onClick={() => handleGeneration(userFile)}>Generate</button>
  )
}

export default GenerateButton