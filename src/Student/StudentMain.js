import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './StudentMain.css';

class StudentMain extends Component {
	
	render() {
		return (
			<div className = "StudentMain">
				<MuiThemeProvider>
					<div>
						<AppBar
							title="Welcome Student"
							color="Black"
						/>
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