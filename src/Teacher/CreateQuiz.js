import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './Teacher.css';
import {Link} from 'react-router-dom';

class CreateQuiz extends Component {

    sendMessage () {
        this.props.setHeaderMessage("Welcome Teacher");
    }
    StartQuiz (event) {
        this.props.setHeaderMessage("Have fun");
    }

    render() {
        return (
            <div className = "CreateQuiz">
                <MuiThemeProvider>
                    <p> Quiz Instructions </p>
                    <p> 1.Total 5 questions </p>
                    <p> 2.Each question carry 3 marks </p>
                    <p> 3.Not time based</p>
                    <p> 4.Expected to know arthematic operations </p>
                    <div>
                    <Link to = "/" >
                            <RaisedButton label="Back" primary={true} style={style} onClick = {(event) => this.sendMessage()}/>
                            <RaisedButton label="Continue" primary={true} style={style} onClick = {(event) => this.StartQuiz()}/>
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