import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Header from '../Header/Header';
import './Student.css';

class StudentPractice extends Component {
	constructor(props) {
		super(props);
		var headerMessage = "Let's Practice";
		this.state = {
			message: headerMessage,
			username: this.props.location.state.username
		}
	}

	goBackToStudent() {
		this.props.history.push('/student', this.state)
	}

	render() {
		return (
			<div className="StudentPractice">
				<MuiThemeProvider>
					<div>
						<Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />
					</div>
					<div>
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

export default StudentPractice;