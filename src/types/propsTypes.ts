// Helper variables
// type StringStateFunction = React.Dispatch<React.SetStateAction<string>>
type StringArrStateFunction = React.Dispatch<React.SetStateAction<string[]>>

// Props Types
export type FileUploadProps = { setData: StringArrStateFunction, setError: StringArrStateFunction }
export type ErrorPropsTypes = { error: string[] }
export type RenderGraphsPropsType = { rawData: string[] }
