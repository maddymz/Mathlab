import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Student from '../Student/Student'

// Login Component
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleClick() {
    var username = this.state.username
    var password = this.state.password
    var usernameRegex = /^[a-zA-Z ]{2,30}$/;
    var passwordRegex = /^[a-zA-Z1-9]{8,20}$/;
    if (usernameRegex.test(username)) {
      if (passwordRegex.test(password)) {
        alert("Welcome " + username)
``
      } else {
        alert("Issue with password. Length should be between 8-30 containing alphabets and numbers.")
      }
    } else {
      alert("Issue with username. Length should be between 2-30 containing just alphabets")
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Login"
              color="Black"
            />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
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