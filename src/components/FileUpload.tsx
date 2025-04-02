import { useEffect, useState } from "react"
import FileUploadImg from '../assets/file_upload.svg'
import { FileUploadProps } from "../types/propsTypes"

const FileUpload:React.FC<FileUploadProps> = ({ setData, setError, setStatus, status, error }) => {

  const [file, setFile] = useState<File | null>(null)
  const [done, setDone] = useState<boolean>(false)
  const [result, setResult] = useState<string>("")
  
  /**
   * Fetches data from the Back-end and provides the client with live status changes
   * @param e Form event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Reading file...")
    if (!file) return
    
    const formData = new FormData()
    formData.append("csv-file", file)

    const response = await fetch(import.meta.env.VITE_ENDPOINT, {
      method: 'POST',
      body: formData
    })
    
    const reader = response?.body?.getReader()
    if (!reader) return
    
    const decoder = new TextDecoder()

    let success = false

    let chunk = ""
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      chunk = decoder.decode(value)
      if (success || (chunk && chunk.includes('['))) {
        success = true
        setResult(p => p + chunk.trim())
      } else {
        setStatus(chunk)
      }
    }
    if (!success) {
      setError(chunk.split("_"))
    } else {
      setStatus("Graphs successfully generated")
      setDone(true)
    }
  }

  /**
   * clips file name
   * @param fileName file name
   * @returns {string} clipped file name
   */
  const fileNameClip = (fileName: string) => fileName.substring(0, 10) + "..." + "csv"

  /**
   * Reads the uploaded file
   * @param file uploaded file
   * @returns {Promise} reading file result
   */
  const readFile = (file:File) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject("Error reading file")
    reader.readAsText(file)
  })
  
  useEffect(() => {
    if (file) {
      readFile(file).then((res) => {
        if (done && res) {
          setError(["NOERROR", "", "200"])
          setData([result, (res as string).trim()])
          console.log([result, res])
        }
      }).catch(err => setError(["ERROR", err, "500"]))
    }
  }, [done, file, result, setData, setError])

  return (
    <>
      <form style={{ display: status || error ? "none" : "flex" }} id="upload-form" onSubmit={handleSubmit}>
        <img src={FileUploadImg} width={100} alt="" />
        <label id="upload-button" htmlFor="csv-upload">{(file && fileNameClip(file.name)) || "Choose a file"}</label>
        <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} name="csv-upload" id="csv-upload" hidden/>
        <a href="https://www.kaggle.com/datasets?search=clean+dataset" target="_blank">Test it with random datasets from <strong>Kaggle</strong></a>
        {file && <button id="generate-button" type="submit">Generate</button>}
      </form>
    </>
  )
}

export default FileUpload