import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

/**
 * @author: Surya Cherukuri
 * @version: 2.0
 */

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

class Login extends Component {

  handleClick() {
    
  }

render() {
  var styleList = {
      height: '350px',
      width: '450px',
      position: 'center', 
      left: '50%', 
      top: '20%',
      transform: 'translate(-50%, 20%)',
      overflow: 'auto'
    };
    var data = require('../../Assets/users.json');
    var obj = JSON.parse(JSON.stringify(data))
    
    var items = [];
    console.log(obj);
    for (const [index, value] of obj.entries()) {
      if(value.role == "teacher") {
        items.push(value.name)
      }
    }
    //const classes = useStyles();
    return (
      
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
             title="Admin"
             color="Black"
            />
            <List style={styleList}>
            {items.map((name, key) => {
            return (
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Findler" src={require('./Findler.jpg')}/>
                </ListItemAvatar>
                <ListItemText
                  primary={name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        
                        color="textPrimary"
                      >
                        Software Engineering
                      </Typography>
                      <br></br>
                      {" - Michael.Findler@asu.edu"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              //<Divider variant="inset" component="li" />           
            )
            })}
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
 transform: 'translate(400%, 400%)',
};
export default Login;