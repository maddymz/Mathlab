import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './Student.css';
import Header from '../Header/Header';
import DragnDrop from '../DragnDrop/dragndrop';
import data from '../../Assets/quizzes.json'

/**
 * @author Sajith Thattazhi
 * @version 1.0
 */
class QuizQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: props.location.state.selectedID,
            username: props.location.state.username,
            questions: [],
            currentQuestionNumber: 0,
            submittable: false
        }
        this.loadQuestions();
    }

    loadQuestions() {
        var quizData = data;

        for (var i = 0; i < quizData.length; i++) {
            var quiz = quizData[i];
            if (quiz.quizId === this.props.location.state.selectedID) {
                for (var j = 0; j < quiz.questions.length; j++) {
                    this.state.questions.push(quiz.questions[j])
                }
            }
        }
    }

    nextQuestion() {
        if (this.state.currentQuestionNumber + 1 < this.state.questions.length) {
            this.state.currentQuestionNumber++;
            this.forceUpdate()

            if(this.state.currentQuestionNumber + 1 === this.state.questions.length) {
                this.setState({submittable: true})
            }

        }
    }

    goBackToQuizSelection() {
        this.props.history.push('/student/quiz', this.state)
    }

    submitQuiz() {
        this.props.history.push('/student/quiz', this.state)
    }

    render() {

        return (
            <div className="Question">
                <MuiThemeProvider>
                    <Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />
                    <div style={style}>
                        {this.state.questions[this.state.currentQuestionNumber].question}
                    </div>
                    <div>
                        <Paper style={style}>
                            <div className="drag-n-drop">
                                <DndProvider backend={HTML5Backend}>
                                    <DragnDrop />
                                </DndProvider>
                            </div>
                        </Paper>
                    </div>
                    <div>
                        {
                            (!this.state.submittable)
                            ? 
                            <RaisedButton
                                label="Next"
                                primary={true}
                                style={style}
                                onClick={(event) => this.nextQuestion()}
                            />
                            :
                            <RaisedButton 
                                label="Submit Quiz" 
                                primary={true} 
                                style={style} 
                                onClick={(event) => this.submitQuiz()} 
                            />
                        }
                        <RaisedButton 
                            label="Back" 
                            primary={true} 
                            style={style} 
                            onClick={(event) => this.goBackToQuizSelection()} 
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

export default QuizQuestions;