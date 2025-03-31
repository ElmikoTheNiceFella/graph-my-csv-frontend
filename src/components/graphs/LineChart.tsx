import * as d3 from "d3";
import React, { useRef, useEffect } from 'react'
import { ChartPropsType } from '../../types/propsTypes'

const LineChart: React.FC<ChartPropsType> = ({ data, info, getFrequency, transforms, usingFrequency }) => {

  const gx = useRef(null)
  const gy = useRef(null)

  let frequencyArray
  let xAxisData
  let yAxisData

  if (usingFrequency) {
    frequencyArray = getFrequency(data[info['x-axis']])
    xAxisData = frequencyArray.map(v => v[0])
    yAxisData = frequencyArray.map(v => v[1])
  } else {
    
  }

  const extent = d3.extent(yAxisData)
  if (extent[0] === undefined || extent[1] === undefined) return <p className="graph-error">{info['x-axis']} Column is empty</p>

  const x = d3.scaleBand(xAxisData, [transforms.ml, transforms.w - transforms.mr]);
  let y = d3.scaleLinear(extent, [transforms.h - transforms.mb, transforms.mt]);
  const tickDifference = y.ticks()[0]
  extent[1] += tickDifference - extent[1] % tickDifference
  y = d3.scaleLinear(extent, [transforms.h - transforms.mb, transforms.mt]);

  useEffect(() => { if (gx.current) d3.select(gx.current as SVGGElement).call(d3.axisBottom(x)) }, [gx, x]);
  useEffect(() => { if (gy.current) d3.select(gy.current as SVGGElement).call(d3.axisLeft(y)) }, [gy, y]);

  return (
    <svg style={{marginTop: "50px"}} width={transforms.w+transforms.ml} height={transforms.h+transforms.mb}>
      <g ref={gx} className="axis" transform={`translate(0, ${transforms.h - transforms.mb})`} />
      <g ref={gy} className="axis" transform={`translate(${transforms.ml}, 0)`} />
      {frequencyArray.map((d, i) => <rect key={info['x-axis']+" "+info['y-axis']+i} className="bar" x={x(d[0])} y={transforms.h - y(d[1]) - transforms.mb} width={x.bandwidth()-transforms.p} height={y(d[1])} />)}
    </svg>
  )
}

export default LineChart