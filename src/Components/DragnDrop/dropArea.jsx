import React from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from '../DragnDrop/draggableTypes'
import Box from './box'
import { renderComponent } from 'recompose'
/**
 * @author: Madhukar Raj
 * @version: version 1.0
 * @author: Sajith Thattazhi
 * @version: version 2.0
 */
const style = {
  height: '25rem',
  width: '25rem',
  color: 'white',
  padding: '2rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'right',
  color: 'black'
}
var showBox = false;
var boxName = "";
var boxes = [];

export function clearBoxes() {
  console.log("bhwf")
  boxes = [];
  showBox = false;
  renderComponent(DropArea)
}

const DropArea = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item) {
      boxName = item.name;
      showBox = true;
      boxes.push(<Box name={boxName} />)
      return 'DropArea'
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  let backgroundColor = '#00BCD4'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {showBox ? boxes.map((value, key) => {
        return value
      }) : (isActive ? 'Release to drop' : 'Drag a box here')}
    </div>
  )
}
export default DropArea
