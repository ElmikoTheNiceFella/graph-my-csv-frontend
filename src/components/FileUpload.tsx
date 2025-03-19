import { useState } from "react"

const FileUpload = () => {

  const [file, setFile] = useState<File|null>(null)
  const [error, setError] = useState<InputError>("NONE");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0]
      if (e.target.files.length > 1) {
        setError("MULTIPLE_FILES")
      } else if (uploadedFile?.type !== "text/csv") {
        setError("WRONG_FORMAT")
      } else if (uploadedFile?.size === 0) {
        setError("EMPTY")
      } else {
        setFile(uploadedFile)
        setError("NONE")
      }

    }
  }

  return <>
    <input type="file" onChange={handleFile} name="csv-upload" id="csv-upload" />
    <p>{file?.size}&nbsp;{error}</p>
  </>
  
}

type InputError = "NONE" | "WRONG_FORMAT" | "EMPTY" | "MULTIPLE_FILES"

export default FileUpload