import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './Student.css';
import {Link} from 'react-router-dom';

class CreateQuiz extends Component {

    sendMessage () {
        this.props.setHeaderMessage("Welcome Teacher");
    }

    render() {
        return (
            <div className = "CreateQuiz">
                <MuiThemeProvider>
                    <div>
                        <Link to = "/" >
                            <RaisedButton label="Back" primary={true} style={style} onClick = {(event) => this.sendMessage()}/>
                        </Link>
                    </div>
                </MuiThemeProvider>
            </div>

        );
    }
}

const style = {
    margin: 15,
};

export default CreateQuiz;