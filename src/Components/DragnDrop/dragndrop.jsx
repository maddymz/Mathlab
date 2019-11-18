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


const DragnDrop = () =>{
  const [dropAreas, setDropAreas] = useState([
    { accepts: [DraggableType.BOX], lastDroppedItem: null },
    { accepts: [DraggableType.OPERATOR], lastDroppedItem: null },
  ])
  const [boxes] = useState([
    {name: 'numBox', type: DraggableType.BOX},
    {name: 'operator', type: DraggableType.OPERATOR}
  ])

  const [droppedBoxNames, setDroppedBoxNames] = useState([])

  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setDropAreas(
        update(dropAreas, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedBoxNames, dropAreas],
  )
  
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {dropAreas.map(({ accepts, lastDroppedItem }, index) => (
          <DropArea
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={item => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {boxes.map(({ name, type }, index) => (
          <Box
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default DragnDrop