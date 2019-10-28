import React from 'react'
import Dustbin from './dropArea'
import Box from './box'
export default function Container() {
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
        <Box name="4" />
        <Box name="3" />
        <Box name="20" />
      </div>
      
    </div>
  )
}