import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Student.css';
import Header from '../Header/Header';
import data from '../../Assets/quizzes.json'

/**
 * @author Sajith Thattazhi
 * @version 1.0
 */
class QuizQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <Header message="XYZ" showLogoutButton={true} parentProps={this.props} />
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default QuizQuestions;