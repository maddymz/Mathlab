import React, { useState, useCallback } from 'react'
import Dustbin from './dropArea'
import Box from './box'
import DraggableType from './draggableTypes'


/**
 * @author: Madhukar Raj
 * @version: 1.0
 * @author: Viraj Khatri
 * @version: 2.0
 */

const Container = () =>{
  const [dropAreas, setDropAreas] = useState([
    { accepts: [ItemTypes.BOX], lastDroppedItem: null },
    { accepts: [ItemTypes.OPERATOR], lastDroppedItem: null },
  ])
  const [boxes] = useState([
    {name: 'numBox', type: DraggableType.BOX},
    {name: 'operator', type: DraggableType.OPERATOR}
  ])

  const [droppedBoxNames, setDroppedBoxNames] = useState([])
}
// export default function Container() {
//   return (
//     <div>
//       <div style={{ overflow: 'hidden', clear: 'both' }}>
//         <Dustbin />
//         <Box name="1" />
//         <Box name="2" />
//         <Box name="3" />
//         <Box name="4" />
//         <Box name="5" />
//         <Box name="6" />
//         <Box name="7" />
//         <Box name="8" />
//         <Box name="9" />
//         <Box name="0" />
//         <Box name="+" />
//         <Box name="-" />
//         <Box name="*" />
//         <Box name="/" />
//         <Box name="(" />
//         <Box name=")" />
//       </div>
//     </div>
//   )
// }

export default Container