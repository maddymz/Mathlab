import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Student.css';
import {Link} from 'react-router-dom';

class StudentMain extends Component {

	sendQuizMessage () {
		this.props.setHeaderMessage("Lets take the quiz!");
	}

	sendPracticeMessage () {
		this.props.setHeaderMessage("Lets Practice!");
	}
	
	render() {
		return (
			<div className = "StudentMain">
				<MuiThemeProvider>
					<div>
						<label>
							Would you like to take the Quiz?
						</label>
						<Link to = "/quiz" >
							<RaisedButton label="Take Quiz" primary={true} style={style} onClick = {(event) => this.sendQuizMessage()}/>
						</Link>
						<br/>
						<br/>
						<label>
							Would you like to Practice Expression Building?
						</label>
						<Link to = "/practice" >
								<RaisedButton label="Practice!" primary={true} style={style} onClick = {(event) => this.sendPracticeMessage()}/>
						</Link>
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