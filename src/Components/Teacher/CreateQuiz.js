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
 */

class CreateQuiz extends Component {

    // sendMessage () {
    //     this.props.setHeaderMessage("Welcome Teacher");
    // }
    // StartQuiz (event) {
    //     this.props.setHeaderMessage("Have fun");
    // }

    constructor(props) {
        console.log(props);

        super(props);
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
    render() {
        const customStyle = { marginright: "150px" }
        return (
            <div className="CreateQuiz">
                						<Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />

                <MuiThemeProvider>
                <p> Teacher Instructions </p>
                    <p> 1.Total 5 questions </p>
                    <p> 2.Each question carry 3 marks </p>
                    <p> 3.Not time based</p>
                    <p> 4.Expected to know arthematic operations </p>
                    <div>
                        <label>
                        <Link to = "/" >
                        <RaisedButton label="Back" primary={true} style={style}/>
                     </Link>
                     </label>

                        <label>
                            <RaisedButton label="Continue" primary={true} style={style} onClick={(event) => this.StartQuizPage()} />
                        </label>
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