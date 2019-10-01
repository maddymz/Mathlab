import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
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
    return (

      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
             title="Admin"
             color="Black"
           />
            <List style={styleList}>
                <ListItem primaryText="Student1"  />
                <ListItem primaryText="Student2"  />
                <ListItem primaryText="Student3"  />
                <ListItem primaryText="Student4"  />
                <ListItem primaryText="Student5" />
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
};
export default Login;