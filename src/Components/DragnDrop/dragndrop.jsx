import React, { useState, useCallback } from 'react'
import DraggableType from './draggableTypes'
import DropArea from './dropArea'
import Box from './box'
import update from 'immutability-helper'
/**
 * @author: Madhukar Raj
 * @version: 1.0
 * @author: Viraj Khatri
 * @version: 3.0
 */



export default function Container() {
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <DropArea />
        <Box name="1" />
        <Box name="2" />
        <Box name="3" />
        <Box name="4" />
        <Box name="5" />
        <Box name="6" />
        <Box name="7" />
        <Box name="8" />
        <Box name="9" />
        <Box name="0" />
        <Box name="+" />
        <Box name="-" />
        <Box name="*" />
        <Box name="/" />
        <Box name="(" />
        <Box name=")" />
      </div>
    </div>
  )
}