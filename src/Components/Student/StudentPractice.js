import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './Student.css';
import Header from '../Header/Header';
import DragnDrop from '../DragnDrop/dragndrop';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { validExpression, result, setValidExpression, setExpression } from '../DragnDrop/box'
import Avatar from '@material-ui/core/Avatar';
import { clearBoxes } from '../DragnDrop/dropArea';
/**
 * @author: Sajith Thattazhi
 * @version: 1.0
 * @author: Madhukar Raj
 * @version: 2.0
 */

class StudentPractice extends Component {
	constructor(props) {
		super(props);
		var headerMessage = "Let's Practice";
		this.state = {
			message: headerMessage,
			username: this.props.location.state.username,
			validity: validExpression,
			result: result
		}
		setInterval(() => {
			this.setState({ validity: validExpression })
			this.setState({ result: result })
		}, 1000);
	}

	goBackToStudent() {
		this.props.history.push('/student', this.state.username)
	}

	getImage() {
		if (this.state.validity) {
			return <Avatar src={require('../../Assets/Images/True.png')} />
		} else {
			return <Avatar src={require('../../Assets/Images/False.png')} />
		}
	}

	clearDropArea() {
		setValidExpression(false);
		setExpression('');
		clearBoxes();
	}

	setValidity(value) {
		this.setState({ validity: value })
	}

	render() {
		return (
			<div className="StudentPractice">
				<MuiThemeProvider>
					<div>
						<Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />
					</div>
					<div>
						<Paper style={stylePaper}>
							<div className="drag-n-drop" style={style}>
								<DndProvider backend={HTML5Backend}>
									<DragnDrop />
								</DndProvider>
							</div>
						</Paper>
					</div>
					<div style={styleDiv}>
						{this.state.validity ? <Avatar style={styleDiv} src={require('../../Assets/Images/True.png')} /> : <Avatar style={styleDiv} src={require('../../Assets/Images/False.png')} />}
						<br />
						{this.state.result}
					</div>
					<div>
						<RaisedButton label="Back" primary={true} style={style} onClick={(event) => this.goBackToStudent()} />
						<RaisedButton label="Clear" primary={true} style={style} onClick={(event) => this.clearDropArea()} />
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

const styleDiv = {
	margin: 'auto',
	fontWeight: 'Bold',
	fontSize: 20
}
export default StudentPractice;