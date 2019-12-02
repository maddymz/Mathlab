import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './Student.css';
import Header from '../Header/Header';
import DragnDrop from '../DragnDrop/dragndrop';
import data from '../../Assets/Server/quizqus.json'
import { Avatar } from 'material-ui';
import { result, setExpression, clearResult } from '../DragnDrop/box'
import { clearBoxes } from '../DragnDrop/dropArea';


/**
 * @author Sajith Thattazhi
 * @version 1.0
 */
class QuizQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Quiz " + props.location.state.selectedID,
            username: props.location.state.username,
            questions: [],
            answers: [],
            currentQuestionNumber: 0,
            validity: false,
            result: ''
        }
        this.loadQuestions();
        setInterval(() => {
            this.evaluate();
        }, 500);
    }

    loadQuestions() {
        var quizData = data;

        for (var i = 0; i < quizData.length; i++) {
            var quiz = quizData[i].quiz;
            if (quiz.Quizno === this.props.location.state.selectedID) {
                this.state.questions.push(quiz.Question);
                this.state.answers.push(quiz.Answer);
            }
        }
    }

    nextQuestion() {
        if (this.state.currentQuestionNumber + 1 < this.state.questions.length) {
            this.state.currentQuestionNumber++;
            this.forceUpdate()
        }
        clearResult();
        setExpression('');
        this.setState({ result: '' })
        clearBoxes();
    }

    goBackToQuizSelection() {
        this.props.history.push('/student/quiz', this.state);
        clearResult();
        setExpression('');
        this.setState({ result: '' })
        clearBoxes();
    }

    submitQuiz() {
        clearResult();
        setExpression('');
        this.setState({ result: '' })
        this.props.history.push('/student/quiz', this.state)
        clearBoxes();
    }

    evaluate() {
        if (this.state.questions[this.state.currentQuestionNumber].answer === String(result)) {
            this.setState({ validity: true })
        } else {
            this.setState({ validity: false })
        }
        this.setState({ result: result })
    }

    evaluate() {
        if (this.state.answers[this.state.currentQuestionNumber] === String(result)) {
            this.setState({ validity: true })
        } else {
            this.setState({ validity: false })
        }
        this.setState({ result: result })
    }

    render() {
        return (
            <div className="Question">
                <MuiThemeProvider>
                    <Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />
                    <div style={style}>
                        {this.state.questions[this.state.currentQuestionNumber]}
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
                    <div >
                        {
                            (!(this.state.currentQuestionNumber + 1 === this.state.questions.length))
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

const styleDiv = {
    margin: 'auto',
    fontWeight: 'Bold',
    fontSize: 20
}


const stylePaper = {
    margin: 15,
    width: 'fit-content',
    display: 'inline-block'
};

export default QuizQuestions;