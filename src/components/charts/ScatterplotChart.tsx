import * as d3 from "d3";
import React, { useRef, useEffect, useState } from 'react'
import { ChartPropsType } from '../../types/propsTypes'

type Tooltip = { visible: boolean, x: number, y: number, value: [string, string] }

const ScatterplotChart: React.FC<ChartPropsType> = ({ data, info, transforms, usingFrequency, getPairs, extractNumber }) => {
  try {

    if (usingFrequency) return <></>
    if (!extractNumber || !getPairs) return <></>
    const [tooltip, setTooltip] = useState<Tooltip>({ visible: false, x: 0, y: 0, value: ["", ""] })
  
    const gx = useRef(null);
    const gy = useRef(null);
  
    if (!data[info['x-axis']] || !data[info['y-axis']]) return <></>
  
    const uncheckedXAxisData = data[info['x-axis']]?.map((d:string) => extractNumber(d || ""))
    const uncheckedYAxisData = data[info['y-axis']]?.map((d: string) => extractNumber(d || ""))
    if (uncheckedXAxisData.includes("Error") || uncheckedYAxisData.includes("Error")) return <></>
  
    const xAxisData = uncheckedXAxisData as number[]
    const yAxisData = uncheckedYAxisData as number[]
  
    let xExtent = d3.extent(xAxisData)
    if (xExtent[0] === undefined || xExtent[1] === undefined) return <></>
    if (xExtent[0] === xExtent[1]) {
      xExtent = [xExtent[0] - 1, xExtent[1] + 1];
    }
    let yExtent = d3.extent(yAxisData)
    if (yExtent[0] === undefined || yExtent[1] === undefined) return <></>
    if (yExtent[0] === yExtent[1]) {
      yExtent = [yExtent[0] - 1, yExtent[1] + 1];
    }
  
    let x = d3.scaleLinear(xExtent, [transforms.ml, transforms.w - transforms.mr]);
    let y = d3.scaleLinear(yExtent, [transforms.h - transforms.mb, transforms.mt]);
    
    const xTickValues = x.ticks();
    const yTickValues = y.ticks();
    const xTickDifference = xTickValues.length > 0 ? xTickValues[1] - xTickValues[0] : 1;
    const yTickDifference = yTickValues.length > 0 ? yTickValues[1] - yTickValues[0] : 1;
  
    xExtent[1] += xTickDifference - xExtent[1] % xTickDifference
    yExtent[1] += yTickDifference - yExtent[1] % yTickDifference
  
    x = d3.scaleLinear(xExtent, [transforms.ml, transforms.w - transforms.mr]);
    y = d3.scaleLinear(yExtent, [transforms.h - transforms.mb, transforms.mt]);
  
    const result = getPairs(xAxisData, yAxisData)
  
    useEffect(() => { if (gx.current) d3.select(gx.current as SVGGElement).call(d3.axisBottom(x)) }, [gx, x]);
    useEffect(() => { if (gy.current) d3.select(gy.current as SVGGElement).call(d3.axisLeft(y)) }, [gy, y]);
  
    const handleTooltip = (e:React.MouseEvent<SVGCircleElement, MouseEvent>, data:{x:number, y:number}) => {
      setTooltip(() => ({ visible: true, x: e.clientX, y: e.clientY, value: [info['y-axis'] + ": " + data.y, info['x-axis'] + ": " + data.x] }))
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
          <svg width={transforms.w + transforms.ml + transforms.mr} height={transforms.h + transforms.mt + transforms.mb}>
            <g ref={gx} className="axis" transform={`translate(0, ${transforms.h - transforms.mb})`} />
            <g ref={gy} className="axis" transform={`translate(${transforms.ml}, 0)`} />
              {result.map((d, i) => 
                <circle key={info['x-axis']+" "+info['y-axis']+i} 
                      className="circle"
                      cx={x(d.x)} 
                      cy={y(d.y)-transforms.mb} 
                      r={5}
                      fill="black"
                      onMouseEnter={(e) => handleTooltip(e, d)}
                      onMouseMove={(e) => handleTooltip(e, d)}
                      onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0, value: ["", ""] })} />)}
            </svg>
        </div>
      </>
    )
  } catch {
    return <p></p>
  }
}

export default ScatterplotChart