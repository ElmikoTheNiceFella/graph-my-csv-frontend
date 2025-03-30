import { useEffect, useState } from "react"
import { FileUploadProps } from "../types/propsTypes"

const FileUpload:React.FC<FileUploadProps> = ({ setData, setError }) => {

  const [file, setFile] = useState<File | null>(null)
  const [done, setDone] = useState<boolean>(false)
  const [result, setResult] = useState<string>("")
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
      if (chunk && chunk.includes('[') || success) {
        success = true
        setResult(p => p + chunk.trim())
      }
      console.log(chunk)
    }
    if (!success) {
      setError(chunk.split("_"))
    } else {
      setDone(true)
    }
  }
  
  useEffect(() => {
    if (done) {
      setData(result)
    }
  }, [done])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} name="csv-upload" id="csv-upload" />
        <button type="submit">Generate</button>
      </form>
    </>
  )
}

export default FileUpload