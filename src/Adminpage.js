import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Login extends Component {

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Admin"
             color="Black"
           />
             <RaisedButton label="Student" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Professor" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Quiz" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Add Student" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Add Professor" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
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