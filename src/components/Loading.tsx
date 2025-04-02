import React from 'react'
import { LoadingPropsType } from '../types/propsTypes'

const Loading: React.FC<LoadingPropsType> = ({ image, status } ) => {
  return (
    <div className='loading'>
      <div className='loading-animation'>
        <div className='loading-circle'></div>
        <img src={image} height={100} alt="" />
      </div>
      <p>{status}</p>
    </div>
  )
}

export default Loading