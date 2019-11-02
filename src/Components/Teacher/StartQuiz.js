import RaisedButton from 'material-ui/RaisedButton';
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from 'material-ui/styles';
import './Teacher.css';
import {Link} from 'react-router-dom';
import './Teacher.css';
import Header from '../Header/Header';

class StartQuiz extends Component{
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
    LoginPage() {
        console.log(" inside start quiz functions !!");
        
        this.props.history.push('/Login/LoginScreen', this.state)
        
		//this.props.push('./Teacher/StartQuiz', this.state)
	}
    sendMessage () {
        this.props.setHeaderMessage("Lets start the quiz!");
    }
    render(){
        return(

            <div className = "StartQuiz">
            <MuiThemeProvider>
            <div>
						<Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />
					</div>
                <div>
                    <p>1. How much is the addition of 2 and 3 numbers?</p>
                    <p>2.Multiply 2 and 3 numbers.</p>
                    <p>3.Add 2,3,4and 5 numbers.</p>
                    <p>4.Divide 10 and 5.</p>
                    <p>5.Subtract 21from 35 and add 45 to it.</p>
                <label>
                <Link to = "/" >
                        <RaisedButton label="Quit" primary={true} style={style} onClick = {(event) => this.LoginPage()}/>
                    </Link>
                </label>
                <label>
                    <Link to = "/" >
                        <RaisedButton label="Add" primary={true} style={style} onClick = {(event) => this.sendMessage()}/>
                     </Link>
                </label>
                </div>
            </MuiThemeProvider>
        </div>
        );
    }
}
export default StartQuiz;