import React from 'react'
import { ErrorPropsTypes } from '../types/propsTypes'

const Error: React.FC<ErrorPropsTypes> = ({ error }) => {
  return (
    <>
      {/* Error image */}
      {/* Error message */}
      <button>{error}</button>
    </>
  )
}

export default Error