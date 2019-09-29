import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


class Teacher extends Component {
    createQuiz(event){
        return;
    }
    render() {
        const customStyle = {marginTop:"150px"}
    return (
        <div>
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Teacher"
                        color="Black">
                        <RaisedButton  label="Logout" primary={true} onClick={(event) => this.createQuiz(event)}/>

                    </AppBar>
                    <p style={customStyle}>Want to Create Quiz?</p>
                    <br/>
                    <RaisedButton label="Create Quiz" primary={true} style={style} onClick={(event) => this.createQuiz(event)}/>
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