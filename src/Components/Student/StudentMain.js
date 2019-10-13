import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './Student.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'

class StudentMain extends Component {
	constructor(props) {
		super(props);
		var headerMessage = "Welcome " + this.props.location.state.username;
		this.state = {
			message: headerMessage,
			username: this.props.location.state.username
		}
	}

	logout() {
		this.props.history.push('/')
	}

	loadQuizPage() {
		this.props.history.push('/student/quiz', this.state)
	}

	loadPracticePage() {
		this.props.history.push('/student/practice', this.state)
	}

	render() {
		return (
			<div className="StudentMain">
				<MuiThemeProvider>
					<div>
						<Header message={this.state.message} showLogoutButton = {true} parentProps={this.props} />
						<label>
							Would you like to take the Quiz?
						</label>
						<RaisedButton label="Take Quiz" primary={true} style={style} onClick={(event) => this.loadQuizPage()} />
						<br />
						<br />
						<label>
							Would you like to Practice Expression Building?
						</label>
						<RaisedButton label="Practice!" primary={true} style={style} onClick={(event) => this.loadPracticePage()} />
					</div>
				</MuiThemeProvider>
			</div>

		);
	}
}

const style = {
	margin: 15,
};

export default StudentMain;