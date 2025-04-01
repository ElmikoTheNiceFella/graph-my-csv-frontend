import { useMemo } from "react"
import { RenderGraphsPropsType } from "../types/propsTypes"
import { demoData } from "./demoData"
import { BarChart, LineChart, ScatterplotChart } from "./charts"
import HistogramChart from "./charts/HistogramChart"

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
        if (rows[j][i]) result[head[i]][j - 1] = rows[j][i]
      }
    }
    return result
  }

  /**
   * This function mainly removes units of measure from a string
   * @param value
   * @returns {number | string} the numeric part of the string
   */
  const extractNumber = (value: string) => {
    const result = value.match(/[0-9]+(\.[0-9]+)?/)
    if (result === null) {
      return "Error"
    } else {
      return +result[0]
    }
  }

  /**
   * Combines elements of 2 arrays into one array of pairs
   * @param arr1 First array
   * @param arr2 Second array
   * @returns {{ x:number, y:number }}Array of pairs of elements from the 2 arrays
   */
  const getPairs = (arr1: number[], arr2: number[]) => {
    const limit = arr1.length <= arr2.length ? arr1.length : arr2.length
    let result: { x: number, y: number }[] = Array(limit)
    for (let i = 0; i < limit; i++) result[i] = { x: arr1[i], y: arr2[i] }
    return result
  }

  const data = useMemo(() => dataToJson(demoData[1][0]), [demoData])
  const defaultTransforms = { w: 1000, h: 500, mt: 10, mr: 10, mb: 10, ml: 100, p: 4 }

  return (
    <>
      {/* {demoData[0].map((obj, i) => 
        <div className="graph" key={"graph-"+(i+1)}>
          <BarChart data={demoData[1]} info={obj} getFrequency={getFrequency} transforms={{ w: 600, h: 500, mt: 10, mr: 10, mb: 10, ml: 10}} />
        </div>
      )} */}
      <p>Your data: {rawData[0]}...</p>
      {/* <BarChart data={data} info={{
        "graph": "bar",
        "x-axis": "Company Name",
        "y-axis": "frequency",
        "relationship": "Shows the distribution of mobile phone models across different companies."
      }}
        transforms={{ w: 1000, h: 500, mt: 10, mr: 10, mb: 10, ml: 50, p: 4 }}
        usingFrequency={true} /> */}
      {/* <LineChart 
        usingFrequency={false}
        data={data}
        info={{
          "graph": "line",
          "x-axis": "Period",
          "y-axis": "Average_cost",
          "relationship": "Average cost trend over time.  Illustrates how the average cost fluctuates across periods.",
          "time-format": "%m.%d.%Y"
        }}
        transforms={{ w: 1000, h: 500, mt: 10, mr: 10, mb: 10, ml: 50, p: 4 }} /> */}
      {/* <ScatterplotChart data={data}
        info={{
          "graph": "scatterplot",
          "x-axis": "Average_cost",
          "y-axis": "Revenue",
          "relationship": "Relationship between average cost and revenue.  Investigates if higher costs correlate with revenue changes."
        }}
        getPairs={getPairs}
        extractNumber={extractNumber}
        transforms={defaultTransforms}
        usingFrequency={false} /> */}
        <HistogramChart data={data}
          info={{
            "graph": "histogram",
            "x-axis": "YearsExperience",
            "y-axis": "frequency",
            "relationship": "This would show the distribution of experience. You could see the most common experience levels and the spread.",
          }}
          getPairs={getPairs}
          extractNumber={extractNumber}
          transforms={defaultTransforms}
          usingFrequency={false}
        />
    </>
  )
}

export default RenderGraphs