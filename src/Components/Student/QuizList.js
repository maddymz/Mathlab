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
            valuesToSend: {
                selectedID: "",
                username: this.props.parentProps.location.state.username
            }
        }
    }

    loadQuizzes() {
        var quizData = data;
        for (var i = 0; i < quizData.length; i++) {
            this.state.quizzes.push(quizData[i]);
        }
    }

    startQuiz(event, ID) {
        this.state.valuesToSend.selectedID = ID
        this.props.parentProps.history.push('/student/quiz/questions', this.state.valuesToSend)
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
                                    onClick={event => this.startQuiz(event, quiz.quizId)}
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

const style = {
    margin: 15,
};

export default QuizList;