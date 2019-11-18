import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Student.css';
import data from '../../Assets/quizzes.json'

/**
 * @author Sajith Thattazhi
 * @version 1.0
 */
class QuizList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizzes: [],
            selectedID: ""
        }
    }

    loadQuizzes() {
        var quizData = data;
        for (var i = 0; i < quizData.length; i++) {
            this.state.quizzes.push(quizData[i]);
        }
    }

    selectID(event, ID) {
        this.setState({ selectedID: ID })
    }

    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <List>
                        {this.loadQuizzes()}
                        {this.state.quizzes.map((quiz) => {
                            return (
                                <ListItem
                                    button
                                    onClick={event => this.selectID(event, quiz.quizId)}
                                >
                                    <ListItemText className="QuizList" primary={quiz.quizId} />
                                </ListItem>
                            )
                        })}
                    </List>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default QuizList;