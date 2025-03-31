// Helper variables
// type StringStateFunction = React.Dispatch<React.SetStateAction<string>>
type StringArrStateFunction = React.Dispatch<React.SetStateAction<string[]>>

// Props Types
export type FileUploadProps = { setData: StringArrStateFunction, setError: StringArrStateFunction }

export type ErrorPropsTypes = { error: string[] }

export type RenderGraphsPropsType = { rawData: string[] }

export type ChartPropsType = { data: { [key:string]: any[] }, // Formatted data (Check components/RenderGraphs.tsx dataToJson function)
                               info: { 'graph': string, 'y-axis': string, 'x-axis': string, 'relationship': string }, // Check Back-end prompt
                               getFrequency: (arr: string[]) => [string, number][] // Check components/RenderGraphs.tsx,
                               extractNumbers?: (arr:string[]) => number[], // Trims the non-number part of strings
                               transforms: { w:number, h:number, mt:number, mr:number, mb:number, ml:number, p:number }, // [width, height, marginTop, marginRight, marginBottom, marginLeft]
                               usingFrequency: boolean } // Wether we want the frequency or a relationship between 2 columns