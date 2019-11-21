import React from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from '../DragnDrop/draggableTypes'
import EvaluationLogic from './EvaluationLogic'

/**
 * @author: Madhukar Raj
 * @version: 1.0
 * @author: Viraj Khatri
 * @version: 2.0
 * @author: Sajith Thattazhi
 * @version: 3.0
 */

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

export var validExpression = true;
export var result;
var expression = '';

export function setValidExpression(value) {
  validExpression = value
}

export function setExpression(value) {
  expression = value
}

const renderBox = (name) => {
  return (
    <Box
      name={name}
    />
  )
}
const Box = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: ItemTypes.BOX },
    end: (item) => {
      console.log("item", item)
      if (item) {        
        alert(`You dropped ${item.name}`);
        renderBox(name)
        var logic = new EvaluationLogic();
        expression = expression + item.name
        var res = logic.evaluate(expression);
        validExpression = !isNaN(res)
        console.log(expression, res, validExpression);
        result = null;
        if (validExpression) {
          result = res;
        }
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  )
}
export default Box
