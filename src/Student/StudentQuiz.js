import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Student.css';
import {Link} from 'react-router-dom';

class StudentQuiz extends Component {
	
	sendMessage () {
		// this.props.setHeaderMessage("Welcome Student");
		this.props.history.push('/student')
	}

	render() {
		return (
			<div className = "StudentQuiz">
				<MuiThemeProvider>
					<div>
							<RaisedButton label="Back" primary={true} style={style} onClick = {(event) => this.sendMessage()}/>
					</div>
				</MuiThemeProvider>
			</div>
			
		);
	}
}

const style = {
	margin: 15,
};

export default StudentQuiz;