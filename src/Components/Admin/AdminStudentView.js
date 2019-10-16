import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import myData from './studentList';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
class Login extends Component {

render() {
  var styleList = {
      height: '150px',
      width: '450px',
      position: 'absolute', 
      left: '50%', 
      top: '20%',
      transform: 'translate(-50%, 0%)',
      overflow: 'auto'
    };
    var data = require('./studentList.json');
    var obj = JSON.parse(JSON.stringify(data))
    const elements = obj.Students;
    const items = [];

    for (const [index, value] of elements.entries()) {
      items.push(<ListItem primaryText={value}/>)
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
             title="Admin"
             color="Black"
            />
            <List style={styleList}>
              {items}
            </List>
            <RaisedButton label="Add Student" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            <RaisedButton label="Delete Student" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
 transform: 'translate(400%, 0%)',
};
export default Login;