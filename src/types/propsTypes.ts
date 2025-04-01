// Helper variables
type StringStateFunction = React.Dispatch<React.SetStateAction<string>>
type StringArrStateFunction = React.Dispatch<React.SetStateAction<string[]>>

// Props Types
export type FileUploadProps = { setData: StringArrStateFunction, setError: StringArrStateFunction, setStatus:StringStateFunction }

export type ErrorPropsTypes = { error: string[] }

export type RenderGraphsPropsType = { rawData: string[] }

export type ChartPropsType = { data: { [key:string]: any[] }, // Formatted data (Check components/RenderGraphs.tsx dataToJson function)
                               info: { 'graph': string, 'y-axis': string, 'x-axis': string, 'relationship': string, 'time-format'?: string }, // Check Back-end prompt
                               extractNumber?: (str:string) => number|string, // Trims the non-number part of strings
                               getPairs?: (arr1:number[], arr2:number[]) => {x:number, y:number}[], // Combines elements of 2 arrays
                               transforms: { w:number, h:number, mt:number, mr:number, mb:number, ml:number, p:number }, // [width, height, marginTop, marginRight, marginBottom, marginLeft]
                               usingFrequency?: boolean } // Wether we want the frequency or a relationship between 2 columns