import { useState } from "react"
import { InputError, PropType } from "../types/fileUploadTypes";

const FileUpload = ({ handleGeneration }:PropType) => {

  const [file, setFile] = useState<File|null>(null)
  const [error, setError] = useState<InputError>("NONE");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0]
      if (e.target.files.length > 1) { // Handle multiple files
        setError("MULTIPLE_FILES")
      } else if (uploadedFile?.type !== "text/csv") { // Handle non-CSV files
        setError("WRONG_FORMAT")
      } else if (uploadedFile?.size === 0) { // Handle empty CSV files
        setError("EMPTY")
      } else { // Success
        setFile(uploadedFile)
        setError("NONE")
        return
      }
      setFile(null)
    }
  }

  return (
    <>
      <input type="file" onChange={handleFile} name="csv-upload" id="csv-upload" />
      <p>{file?.size}&nbsp;{error}</p>
      <button onClick={() => handleGeneration(file)}>Generate Visualizations</button>
    </>
  )
}

export default FileUpload