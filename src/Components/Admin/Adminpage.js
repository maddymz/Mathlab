import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Header from '../Header/Header';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * @author: Surya Cherukuri
 * @version: 1.0
 * @author: Viraj Khatri
 * @version: 2.0
 */

class AdminPage extends Component {

  constructor(props) {
		super(props);
		var headerMessage = "Welcome Admin";
		this.state = {
			message: headerMessage
		}
  }

  handleClick(type) {
    this.props.history.push("/admin/" + type)
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <Header message={this.state.message} showLogoutButton = {true} parentProps={this.props} />
            <RaisedButton label="Student" primary={true} style={style} onClick={(event) => this.handleClick("student")} />
            <RaisedButton label="Professor" primary={true} style={style} onClick={(event) => this.handleClick("prof")} />
            {/* <RaisedButton label="Quiz" primary={true} style={style} onClick={(event) => this.handleClick("quiz")} /> */}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default AdminPage;