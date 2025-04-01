import * as d3 from "d3";
import React, { useRef, useEffect, useState } from 'react'
import { ChartPropsType } from '../../types/propsTypes'

type Tooltip = { visible: boolean, x: number, y: number, value: [string, number] }

const BarChart: React.FC<ChartPropsType> = ({ data, info, transforms, usingFrequency }) => {

  if (!usingFrequency) return <></>

  /**
   * Creates a frequency array, this function is shared between all types of graphs
   * @param arr Array of raw repeated data
   * @returns {[string, number][]} String array in this format: [Value, Frequency]
   */
  const getFrequency = (arr: string[]): [string, number][] => {
    let freqObj: { [key: string]: number } = {}
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) continue
      freqObj[arr[i]] = freqObj[arr[i]] === undefined ? 1 : freqObj[arr[i]] + 1
    }
    const result = Object.keys(freqObj).map(key => [key, freqObj[key]])
    return result as [string, number][]
  }

  const [tooltip, setTooltip] = useState<Tooltip>({ visible: false, x: 0, y: 0, value: ["", 0] })

  const gx = useRef(null);
  const gy = useRef(null);

  
  let frequencyArray
  try {
    frequencyArray = getFrequency(data[info['x-axis']])
  } catch {
    console.log(data, info['x-axis'], data[info['x-axis']])
    return <></>
  }

  const xAxisData = frequencyArray.map(v => v[0]) 
  const yAxisData = frequencyArray.map(v => v[1])

  const extent = d3.extent(yAxisData)
  if (extent[0] === undefined || extent[1] === undefined) return <></>

  const x = d3.scaleBand(xAxisData, [transforms.ml, transforms.w - transforms.mr]);
  let y = d3.scaleLinear(extent, [transforms.h - transforms.mb, transforms.mt]);
  const tickDifference = y.ticks()[0]
  extent[1] += tickDifference - extent[1] % tickDifference
  y = d3.scaleLinear(extent, [transforms.h - transforms.mb, transforms.mt]);

  useEffect(() => { if (gx.current) d3.select(gx.current as SVGGElement).call(d3.axisBottom(x)) }, [gx, x]);
  useEffect(() => { if (gy.current) d3.select(gy.current as SVGGElement).call(d3.axisLeft(y)) }, [gy, y]);

  const handleTooltip = (e:React.MouseEvent<SVGRectElement, MouseEvent>, data:[string, number]) => {
    setTooltip(() => ({ visible: true, x: e.clientX, y: e.clientY, value: data }))
  }

  return (
    <>
      <div key={info['x-axis'] + " " + info['y-axis']} className="chart">
          <h2>{info.relationship}</h2>
          {tooltip.visible && (
            <div
              style={{
                position: "fixed",
                left: tooltip.x + 10,
                top: tooltip.y + 10,
                background: "black",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                fontSize: "12px",
                pointerEvents: "none",
              }}
            >
              {tooltip.value[0]} <br/> {tooltip.value[1]}
            </div>
          )}
          <svg width={transforms.w+transforms.ml} height={transforms.h+transforms.mb}>
            <g ref={gx} className="axis" transform={`translate(0, ${transforms.h - transforms.mb})`} />
            <g ref={gy} className="axis" transform={`translate(${transforms.ml}, 0)`} />
            {frequencyArray.map((d, i) => 
              <rect key={info['x-axis']+" "+info['y-axis']+i} 
                    className="bar"
                    x={x(d[0])} 
                    y={y(d[1])-transforms.mb} 
                    width={x.bandwidth()-transforms.p} 
                    height={transforms.h - y(d[1])}
                    onMouseEnter={(e) => handleTooltip(e, d)}
                    onMouseMove={(e) => handleTooltip(e, d)}
                    onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0, value: ["", 0] })} />)}
          </svg>
      </div>
    </>
  )
}

export default BarChart