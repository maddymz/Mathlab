import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './Student.css';
import Header from '../Header/Header';
import DragnDrop from '../DragnDrop/dragndrop';

/**
 * @author: Sajith Thattazhi
 * @version: 1.0
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
							<div>
								Implement 4 + 5
							</div>
							<div>
								<DndProvider backend={HTML5Backend}>
									<DragnDrop />
								</DndProvider>
							</div>
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