import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Login extends Component {
  constructor() {
    super();
    //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    // };
  }
  
render() {
  var styleList = {
      height: '150px',
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