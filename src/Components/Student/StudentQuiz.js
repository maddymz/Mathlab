import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './Student.css';
import Header from '../Header/Header';

class StudentQuiz extends Component {

	constructor(props) {
		super(props);
		var headerMessage = "Let's take the quiz";
		this.state = {
			message: headerMessage,
			username: this.props.location.state.username
		}
	}

	goBackToStudent() {
		this.props.history.push('/student', this.state)
	}

	submitQuiz() {
		//TODO: Handle this case.
	}

	render() {
		return (
			<div className="StudentQuiz">
				<MuiThemeProvider>
					<div>
						<Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />
					</div>
					<div>
						<Paper style={style}>
							This is where the quiz will go.
						</Paper>
					</div>
					<div>
						<RaisedButton label="Submit Quiz" primary={true} style={style} onClick={(event) => this.submitQuiz()} />
						<RaisedButton label="Back" primary={true} style={style} onClick={(event) => this.goBackToStudent()} />
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