import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
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
    this.state={};
  }

  handleClick(type) {
    this.props.history.push("/admin/" + type)
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Admin"
              color="Black"
            />
            <RaisedButton label="Student" primary={true} style={style} onClick={(event) => this.handleClick("student")} />
            <RaisedButton label="Professor" primary={true} style={style} onClick={(event) => this.handleClick("prof")} />
            <RaisedButton label="Quiz" primary={true} style={style} onClick={(event) => this.handleClick("quiz")} />
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