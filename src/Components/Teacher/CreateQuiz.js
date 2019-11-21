import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

import './Teacher.css';
// eslint-disable-next-line 
import Header from '../Header/Header'
/**
 * @author : Bhavana Vakkalagadda(bvakkala)
 * @since : 02 Nov, 2019
 * @version : 2.0
 */

class CreateQuiz extends Component {

    constructor(props) {
        console.log(props);

        super(props);
        var headerMessage = "Welcome ";
       
        this.state = {
            message: headerMessage,
        }
    }
    StartQuizPage() {
        console.log(" inside start quiz functions !!");

        this.props.history.push('/teacher/startquiz', this.state)

    }
    render() {
        return (
            <div className="CreateQuiz">
                						<Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />

                <MuiThemeProvider>
                    <div style={style1}>
                    <p> Teacher Instructions </p>
                    <p> 1.Each quiz has two questions </p>
                    <p> 2.Each question carry 3 marks </p>
                    <p> 3.This is Not time based quizzes</p>
                    <p> 4.Questions are based on student level </p>
                    </div>
                    <div style={style1}>
                        <label>
                        <Link to = "/" >
                        <RaisedButton label="Back" primary={true} style={style1}/>
                     </Link>
                     </label>

                        <label>
                            <RaisedButton label="Continue" primary={true} style={style1} onClick={(event) => this.StartQuizPage()} />
                        </label>
                    </div>
                </MuiThemeProvider>
            </div>

        );
    }
}

const style1 = {
    textAlign: 'center',
};

export default CreateQuiz;