import React from 'react';
import Box from './box';
import DropArea from './dropArea';
import { Grid } from '@material-ui/core';
/**
 * @author: Madhukar Raj
 * @version: 1.0
 * @author: Viraj Khatri
 * @version: 3.0
 */

var grade;
export function setUserData(value) {
  grade = value;
}

export default function Container() {
  if (grade == '1') {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <DropArea />
          <div style={styleDiv1}>
            <div style={styleDiv2}>
              <Box name="1" />
              <Box name="2" />
              <Box name="3" />
            </div>
            <div style={styleDiv2}>
              <Box name="4" />
              <Box name="5" />
              <Box name="6" />
            </div>
            <div style={styleDiv2}>
              <Box name="7" />
              <Box name="8" />
              <Box name="9" />
            </div>
            <div style={styleDiv2}>
              <Box name="0" />
            </div>
            <div style={styleDiv2}>
              <Box name="+" />
              <Box name="-" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <DropArea />
          <div style={styleDiv1}>
            <div style={styleDiv2}>
              <Box name="1" />
              <Box name="2" />
              <Box name="3" />
            </div>
            <div style={styleDiv2}>
              <Box name="4" />
              <Box name="5" />
              <Box name="6" />
            </div>
            <div style={styleDiv2}>
              <Box name="7" />
              <Box name="8" />
              <Box name="9" />
            </div>
            <div style={styleDiv2}>
              <Box name="0" />
            </div>
            <div style={styleDiv2}>
              <Box name="+" />
              <Box name="-" />
              <Box name="*" />
            </div>
            <div style={styleDiv2}>
              <Box name="/" />
              <Box name="(" />
              <Box name=")" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styleDiv2 = {
  display: 'flex',
  justifyContent: 'center'
}

const styleDiv1 = {
  display: 'grid',
  justifyContent: 'center',
  marginTop: '50px'
}