import React from 'react'
import { ErrorPropsTypes } from '../types/propsTypes'

const Error: React.FC<ErrorPropsTypes> = ({ error }) => {
  return (
    <div className='error'>
      <h1>{error[2]}</h1>
      <p>&nbsp;{error[1]}</p>
      <a href='http://localhost:5173/'>Back</a>
    </div>
  )
}

export default Error