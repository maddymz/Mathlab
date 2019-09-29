import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Student.css';
import StudentMain from './StudentMain';
import StudentQuiz from './StudentQuiz';
import StudentPractice from './StudentPractice';
import Loginscreen from '../Login/Loginscreen';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Student extends Component {
    constructor(props){
        super(props);
        this.state = { message: "Welcome Student" }
    }

    setMessage = (childData) => {
        this.setState({message: childData})
    }

    logout = () => {
        this.setState({message: "Login"})
    }
    
	render() {
			return (
                <Router>
                    <div className = "Student">
                        <MuiThemeProvider>
                            <div>
                                <AppBar title = {this.state.message} color="Black">
                                        <Link to = "/login" >
                                            <RaisedButton label="Logout" primary={true} style = {style} onClick = {(event) => this.logout()}/>  
                                        </Link>
                                </AppBar>
                            </div>
                            <Switch>
                                <Route 
                                    path = "/" exact 
                                    component = {(props) => <StudentMain setHeaderMessage={this.setMessage}/>} 
                                />
                                <Route 
                                    path = "/practice"
                                    component = {(props) => <StudentPractice setHeaderMessage = {this.setMessage} />} 
                                />
                                <Route 
                                    path = "/quiz" 
                                    component = {(props) => <StudentQuiz setHeaderMessage = {this.setMessage} />}  
                                />
                                <Route
                                    path = "/login"
                                    component = {(props) => <Loginscreen setHeaderMessage = {this.setMessage} />}
                                />
                            </Switch>
                        </MuiThemeProvider>
                    </div>
                </Router>
			);
	}
}

const style = {
	margin: 15,
};

export default Student;