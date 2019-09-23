import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './StudentMain.css';

class StudentMain extends Component {
	
	takeQuiz(event) {
		return;
	}
	
	practice(event) {
		return;
	}
	
	render() {
		return (
			<div className = "StudentMain">
				<MuiThemeProvider>
					<div>
						<AppBar
							title="Welcome Student"
							color="Black"
						/>
						<br/>
						<label>
							Would you like to take the Quiz?  
							<RaisedButton label="Take Quiz" primary={true} style={style} onClick={(event) => this.takeQuiz(event)}/>
						</label>
						<br/>
						<label>
							Would you like to Practice Expression Building?  
							<RaisedButton label="Practice!" primary={true} style={style} onClick={(event) => this.practice(event)}/>
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

export default StudentMain;