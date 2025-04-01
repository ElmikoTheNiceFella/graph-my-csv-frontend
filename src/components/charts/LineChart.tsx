import * as d3 from "d3";
import React, { useRef, useEffect } from 'react'
import { ChartPropsType } from '../../types/propsTypes'

const LineChart: React.FC<ChartPropsType> = ({ data, info, extractNumber, transforms, usingFrequency }) => {

  if (usingFrequency) return <p className="graph-error">LLM hallucination error</p>
  if (!extractNumber) return <p className="graph-error">Missing parameter</p>

  /**
   * Converts date string to a date object
   * @param dateStr date string
   * @returns {Date} date string as a date object
   */
  const normalizeDate = (dateStr: string) => {
    const date = d3.timeParse(info["time-format"]!)(dateStr);
    if (date) return date;
    throw new Error("Unknown date format: " + dateStr);
  }

  const gx = useRef(null)
  const gy = useRef(null)

  const xData = data[info['x-axis']].map((str: string) => normalizeDate(str))
  if (xData[0] === undefined || xData[1] === undefined) return <p className="graph-error">{info['x-axis']} Column is empty or Unknown date format</p>
  const times = xData[0] === undefined || xData[1] === undefined ? [new Date(), new Date()] : xData
  const yAxisData = data[info['y-axis']].map((d: string) => extractNumber(d))

  let xExtent = d3.extent(times)
  if (xExtent[0] === undefined || xExtent[1] === undefined) xExtent = [new Date(), new Date()]

  if (yAxisData.includes("Error")) return <p className="graph-error">Wrong chart by LLM hallucinations</p>

  const yExtent = d3.extent(yAxisData as number[])
  if (yExtent[0] === undefined || yExtent[1] === undefined) return <p className="graph-error">{info['y-axis']} Column is empty</p>

  const x = d3.scaleTime(xExtent, [transforms.ml, transforms.w - transforms.mr]);
  let y = d3.scaleLinear(yExtent, [transforms.h - transforms.mb, transforms.mt]);
  const tickDifference = y.ticks()[0]
  yExtent[1] += tickDifference - yExtent[1] % tickDifference
  y = d3.scaleLinear(yExtent, [transforms.h - transforms.mb, transforms.mt]);

  let lineData = []
  for (let i = 0; i < (d3.min([xData.length, yAxisData.length]) as number); i++) {
    if (!times[i] || !yAxisData[i] || yAxisData[i] === "Error") continue
    lineData.push({ Date: times[i], Close: yAxisData[i] as number })
  }
  const line = d3.line((d: { Date: Date, Close: number }) => x(d.Date), (d) => y(d.Close));

  useEffect(() => { if (gx.current) d3.select(gx.current as SVGGElement).call(d3.axisBottom(x)) }, [gx, x]);
  useEffect(() => { if (gy.current) d3.select(gy.current as SVGGElement).call(d3.axisLeft(y)) }, [gy, y]);

  return (
    <div className="chart">
      <h2>{info.relationship}</h2>
      <svg style={{ marginTop: "50px" }} width={transforms.w + transforms.ml} height={transforms.h + transforms.mb}>
        <g ref={gx} className="axis" transform={`translate(0, ${transforms.h - transforms.mb})`} />
        <g ref={gy} className="axis" transform={`translate(${transforms.ml}, 0)`} />
        <path className="line" d={line(lineData) || ""} stroke="#443627" />
      </svg>
    </div>
  )
}

export default LineChart