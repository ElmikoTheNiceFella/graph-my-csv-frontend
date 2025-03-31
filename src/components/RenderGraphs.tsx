import { useMemo } from "react"
import { RenderGraphsPropsType } from "../types/propsTypes"
import { demoData } from "./demoData"
import BarChart from "./graphs/BarChart"

const RenderGraphs: React.FC<RenderGraphsPropsType> = ({ rawData }) => {

  /* Replace demoData with rawData - PENDING */

  /**
   * Converts raw CSV data to a neat JSON object
   * @param data Raw CSV data as a string
   * @returns {JSON} JSON object in this format: { Column: [data, ...], ... }
   */
  const dataToJson = (data: string) => {
    const rows = data.split('\n').map(row => row.split(','))
    const head = rows[0]
    const result: { [key: string]: any[] } = {}
    for (let i = 0; i < head.length; i++) {
      result[head[i]] = Array(rows.length - 1)
      for (let j = 1; j < rows.length; j++) {
        if (rows[j][i]) result[head[i]][j] = rows[j][i]
      }
    }
    return result
  }

  /**
   * Creates a frequency array, this function is shared between all types of graphs
   * @param arr Array of raw repeated data
   * @returns {[string, number][]} String array in this format: [Value, Frequency]
   */
  const getFrequency = (arr: string[]): [string, number][] => {
    let freqObj: { [key: string]: number } = {}
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) continue
      freqObj[arr[i]] = freqObj[arr[i]] === undefined ? 1 : freqObj[arr[i]]+1
    }
    const result = Object.keys(freqObj).map(key => [key, freqObj[key]])
    return result as [string, number][]
  }

  const data = useMemo(() => dataToJson(demoData[1][0]), [demoData])

  return (
    <>
      {/* {demoData[0].map((obj, i) => 
        <div className="graph" key={"graph-"+(i+1)}>
          <BarChart data={demoData[1]} info={obj} getFrequency={getFrequency} transforms={{ w: 600, h: 500, mt: 10, mr: 10, mb: 10, ml: 10}} />
        </div>
      )} */}
      <p>Your data: {rawData[0]}...</p>
      <BarChart data={data} info={{
        "graph": "bar",
        "x-axis": "Company Name",
        "y-axis": "frequency",
        "relationship": "Shows the distribution of mobile phone models across different companies."
      }} getFrequency={getFrequency} transforms={{ w: 1000, h: 500, mt: 10, mr: 10, mb: 10, ml: 50, p: 4 }}
        usingFrequency={true} />
    </>
  )
}

export default RenderGraphs