import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import Header from '../Header/Header';
import './LoginScreen.css';
import data from '../../Assets/users.json'

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
    var userData = data
    var username = this.state.username
    var password = this.state.password
    var usernameRegex = /^[a-zA-Z1-9]{2,30}$/;
    var passwordRegex = /^[a-zA-Z1-9]{8,20}$/;
    if (usernameRegex.test(username)) {
      if (passwordRegex.test(password)) {
        for (var i = 0; i < userData.length; i++) {
          if (username === userData[i].username) {
            if (password === userData[i].password) {
              switch (userData[i].role) {
                case "student":
                  this.props.history.push('/student', userData[i].name)
                  return
                case "teacher":
                  this.props.history.push('/teacher', userData[i].name)
                  return
                case "admin":
                  this.props.history.push('/admin', userData[i].name)
                  return
                default:
              }
            } else {
              alert("Invalid Password")
              return
            }
          }
        }
        alert("User Not Found!")
      } else {
        alert("Issue with password. Length should be between 8-30 containing alphabets and numbers.")
      }
    } else {
      alert("Issue with username. Length should be between 2-30 containing alphabets and numbers. ")
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className='Login'>
            <Header message="Login" />
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