import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Teacher extends Component {

    render() {
    return (
        <div>
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Teacher"
                        color="Black"
                    />
                    <p>Want to Create Quiz?</p>
                    <br/>
                    <RaisedButton label="Create Quiz" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                </div>
            </MuiThemeProvider>
        </div>
    );
}
}
const style = {
    margin: 15,
};
export default Teacher;