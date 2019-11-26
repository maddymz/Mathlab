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
        super(props);
        console.log("sdfatsf");
        
        var headerMessage = "Welcome ";
        // + this.props.location.state.username;
		this.state = {
			message: headerMessage,
		//	username: this.props.location.state.username
		}
    }
    StartQuizPage() {
        console.log(" inside start quiz functions !!");

        this.props.history.push('/teacher/startquiz', this.state)

    }
    QuestionsPage() {
        console.log(" inside Question page !!");
        
        this.props.history.push('/Teacher/Questions', this.state)
        
    }
    render() {
        return (
            <div className="CreateQuiz">
                <div>
                <Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />
                </div>
                <MuiThemeProvider>
                    <div style={style1}>
                    <p> Teacher Instructions </p>
                    <p> 1.Each quiz has two questions </p>
                    <p> 2.Each question carry 3 marks </p>
                    <p> 3.This is Not time based quizzes</p>
                    <p> 4.Questions are based on student level </p>
                    Instructions to create Quiz 
                    <p>1.To add questions please click on add</p>
                    <p>2.Add question in the question field</p> 
                    <p>3.Add answer in the answer field</p>
                    <p>5.To go back please click on Quit </p>
                    </div>
                    <div style={style1}>
                        <label>
                        <Link to = "/" >
                        <RaisedButton label="Back" primary={true} style={style1}/>
                     </Link>
                     </label>
                    <label>
                    <Link to = "/teacher/Questions" >
                        <RaisedButton label="Add" primary={true} style={style1} onClick = {(event) => this.QuestionsPage()}/>
                     </Link>
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