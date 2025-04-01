import * as d3 from "d3";
import React, { useRef, useEffect, useState } from 'react'
import { ChartPropsType } from '../../types/propsTypes'

type Tooltip = { visible: boolean, x: number, y: number, value: [string, string] }

const HistogramChart: React.FC<ChartPropsType> = ({ data, info, transforms, usingFrequency, getPairs, extractNumber }) => {

  if (!usingFrequency) return <p className="graph-error">Poggers</p>
  if (!extractNumber || !getPairs) return <p className="graph-error">Missing functions</p>
  const [tooltip, setTooltip] = useState<Tooltip>({ visible: false, x: 0, y: 0, value: ["", ""] })

  const gx = useRef(null);
  const gy = useRef(null);

  if (!data[info['x-axis']] || !data[info['y-axis']]) return <p className="graph-error">{info['x-axis']} Column is empty</p>

  console.log(data[info['y-axis']])

  const uncheckedXAxisData = data[info['x-axis']]?.map((d:string) => extractNumber(d || ""))
  const uncheckedYAxisData = data[info['y-axis']]?.map((d: string) => extractNumber(d || ""))
  if (uncheckedXAxisData.includes("Error") || uncheckedYAxisData.includes("Error")) return <p className="graph-error">Wrong chart by LLM hallucinations</p>

  const xAxisData = uncheckedXAxisData as number[]
  const yAxisData = uncheckedYAxisData as number[]

  const xExtent = d3.extent(xAxisData)
  if (xExtent[0] === undefined || xExtent[1] === undefined) return <p className="graph-error">{info['x-axis']} Column is empty</p>
  const yExtent = d3.extent(yAxisData)
  if (yExtent[0] === undefined || yExtent[1] === undefined) return <p className="graph-error">{info['y-axis']} Column is empty</p>

  let x = d3.scaleLinear(xExtent, [transforms.ml, transforms.w - transforms.mr]);
  let y = d3.scaleLinear(yExtent, [transforms.h - transforms.mb, transforms.mt]);
  
  const xTickDifference = x.ticks()[0]
  const yTickDifference = y.ticks()[0]

  xExtent[1] += xTickDifference - xExtent[1] % xTickDifference
  yExtent[1] += yTickDifference - yExtent[1] % yTickDifference

  x = d3.scaleLinear(xExtent, [transforms.ml, transforms.w - transforms.mr]);
  y = d3.scaleLinear(yExtent, [transforms.h - transforms.mb, transforms.mt]);

  const result = getPairs(xAxisData, yAxisData)

  useEffect(() => { if (gx.current) d3.select(gx.current as SVGGElement).call(d3.axisBottom(x)) }, [gx, x]);
  useEffect(() => { if (gy.current) d3.select(gy.current as SVGGElement).call(d3.axisLeft(y)) }, [gy, y]);

  const handleTooltip = (e:React.MouseEvent<SVGRectElement, MouseEvent>, data:{x:number, y:number}) => {
    setTooltip(() => ({ visible: true, x: e.clientX, y: e.clientY, value: [info['y-axis'] + ": " + data.y, info['x-axis'] + ": " + data.x] }))
  }

  return (
    <>
      <div className="chart">
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
              <rect key={info['x-axis']+" "+info['y-axis']+i} 
                    className="circle"
                    x={x(d[0])}
                    y={y(d[1]) - transforms.mb}
                    width={x.bandwidth() - transforms.p}
                    height={transforms.h - y(d[1])}
                    onMouseEnter={(e) => handleTooltip(e, d)}
                    onMouseMove={(e) => handleTooltip(e, d)}
                    onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0, value: ["", ""] })} />)}
          </svg>
      </div>
    </>
  )
}

export default HistogramChart