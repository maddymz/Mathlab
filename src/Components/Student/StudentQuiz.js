import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Header from '../Header/Header';
import QuizList from './QuizList';
import './Student.css';
import { clearBoxes } from '../DragnDrop/dropArea';

/**
 * @author: Sajith Thattazhi
 * @version: 3.0
 */
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
		this.props.history.push('/student', this.state.username)
		clearBoxes()
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
							<div>
								Select a quiz:
							</div>
							<div>
								<QuizList parentProps={this.props} />
							</div>
						</Paper>
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


const stylePaper = {
	margin: 15,
	width: 'fit-content',
	display: 'inline-block'
};

export default StudentQuiz;