import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


class Teacher extends Component {

    render() {
        const Customstyle = {float : "left"}
        const rightstyle = {float : "right"}
    return (
        <div>
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Teacher"
                        color="Black"
                    />
                    <RaisedButton label="LogOut" primary={true} style={rightstyle} onClick={(event) => this.handleClick(event)}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Want to Create Quiz?</p>
                    <br/>
                    <RaisedButton label="Create Quiz" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    <br/>
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