import { useState } from "react"

const FileUpload = () => {

  const [file, setFile] = useState<File|null>(null)

  const handleSubmit = async(e:React.FormEvent) => {
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

    while(true) {
      const { done, value } = await reader.read()
      if (done) break;
      const chunk = decoder.decode(value)
      console.log(chunk)
    }
  }

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