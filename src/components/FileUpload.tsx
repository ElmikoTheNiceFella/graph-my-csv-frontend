import { useEffect, useState } from "react"
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
  const fileNameClip = (fileName: string) => fileName.length > 10 ? fileName.substring(0, 10) + "..." + "csv" : fileName

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
        <h1 id="title">Graph My CSV</h1>
        <p id="description">Upload a csv file and we will generate either histogram, bar, line, or scatter plots based on the given data.<br/>This app is built with Gemini Flash 2.0 Lite</p>
        <label id="upload-button" htmlFor="csv-upload">
          <span id="choose-file-button">Choose a file</span>
          <span id="file-name">{(file && fileNameClip(file.name)) || "No file selected"}</span>
        </label>
        <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} name="csv-upload" id="csv-upload" hidden/>
        <a href="https://www.kaggle.com/datasets?search=clean+dataset" target="_blank">Test it with random datasets from <strong>Kaggle</strong></a>
        {!!file && <button id="generate-button" type="submit">Generate</button>}
        {!file && <div id="button-placeholder"></div>}
      </form>
    </>
  )
}

export default FileUpload