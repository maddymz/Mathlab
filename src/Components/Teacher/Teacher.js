import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './Teacher.css';
import TeacherView from './TeacherView';
import CreateQuiz from './CreateQuiz';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class Teacher extends Component {
    constructor(props){
        super(props);
        this.state = { message: "Welcome Teacher" }
    }

    setMessage = (childData) => {
        this.setState({message: childData})
    }

    render() {
        return (
            <Router>
                <div className = "Teacher">
                    <MuiThemeProvider>
                        {/* <div>
                            <AppBar
                                title = {this.state.message}
                                color="Black"
                            />
                        </div> */}
                        <Switch>
                            <Route
                                path = "/" exact
                                component = {(props) => <TeacherView setHeaderMessage={this.setMessage}/>}
                            />

                            <Route
                                path = "/quiz"
                                component = {(props) => <CreateQuiz setHeaderMessage = {this.setMessage} />}
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

export default Teacher;