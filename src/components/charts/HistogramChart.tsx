import * as d3 from "d3";
import React, { useRef, useEffect, useState } from 'react'
import { ChartPropsType } from '../../types/propsTypes'

type Tooltip = { visible: boolean, x: number, y: number, value: [string, number] }

const HistogramChart: React.FC<ChartPropsType> = ({ data, info, transforms, usingFrequency, extractNumber }) => {
  try {

    if (!usingFrequency) return <></>
    if (!extractNumber) return <></>
    const [tooltip, setTooltip] = useState<Tooltip>({ visible: false, x: 0, y: 0, value: ["", 0] })
  
    const gx = useRef(null);
    const gy = useRef(null);
  
    if (!data[info['x-axis']]) return <></>
  
    const uncheckedXAxisData = data[info['x-axis']]?.map((d:string) => extractNumber(d || ""))
    if (uncheckedXAxisData.includes("Error")) return <></>
  
    const xAxisData = uncheckedXAxisData as number[]
  
    const xExtent = d3.extent(xAxisData)
    if (xExtent[0] === undefined || xExtent[1] === undefined) return <></>
  
  
    let x = d3.scaleLinear(xExtent, [transforms.ml, transforms.w - transforms.mr]);
    
    const bin = d3.bin().domain(x.domain() as [number, number]).thresholds(x.ticks(d3.min([10, Math.floor(xAxisData.length/2)])));
    
    const finalData = bin(xAxisData)
    console.log(finalData)
  
    let maxVal = 0
    for(let arr of finalData) {
      if (arr.length > maxVal) maxVal = arr.length
    }
  
    let y = d3.scaleLinear([0, maxVal], [transforms.h - transforms.mb, transforms.mt]).nice()
  
    useEffect(() => { if (gx.current) d3.select(gx.current as SVGGElement).call(d3.axisBottom(x)) }, [gx, x]);
    useEffect(() => { if (gy.current) d3.select(gy.current as SVGGElement).call(d3.axisLeft(y)) }, [gy, y]);
  
    const handleTooltip = (e:React.MouseEvent<SVGRectElement, MouseEvent>, data:number) => {
      setTooltip(() => ({ visible: true, x: e.clientX, y: e.clientY, value: [info['x-axis'], data] }))
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
            {finalData.map((bin, i) => {
                console.log(bin, bin.length)
                return <rect
                  key={info['x-axis'] + " " + info['y-axis'] + i} 
                  className="histogram-bar"
                  x={x(bin.x0 || 0)} // Corrected from x(bin[0])
                  width={x(bin.x1 || 0) - x(bin.x0 || 0)} // Corrected width calculation
                  y={y(bin.length)}
                  height={(transforms.h - transforms.mb) - y(bin.length)}
                  onMouseEnter={(e) => handleTooltip(e, bin.length)}
                  onMouseMove={(e) => handleTooltip(e, bin.length)}
                  onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0, value: ["", 0] })} />})}
                
            </svg>
        </div>
      </>
    )
  } catch {
    return <></>
  }
}

export default HistogramChart