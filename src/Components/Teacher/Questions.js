import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from 'material-ui/styles';
import './Teacher.css';
import {Link} from 'react-router-dom';
import './Teacher.css';
import Header from '../Header/Header';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import data from '../../Assets/users.json'

/**
 * @author : Bhavana Vakkalagadda(bvakkala)
 * @since : 20 Nov, 2019
 */

class Questions extends Component{
    constructor(props) {
        super(props);
        console.log("Welcome message");
        
        var headerMessage = "Welcome ";
        // + this.props.location.state.username;
		this.state = {
			message: headerMessage,
		//	username: this.props.location.state.username
		}
    }
    StartQuizPage() {
        console.log(" inside Question page !!");
        
        this.props.history.push('/Teacher/StartQuiz', this.state)
        
    }
    
    sendMessage () {
        this.props.setHeaderMessage("Lets start the quiz!");
    }
    render(){
        return(

            <div>
            <MuiThemeProvider>
              <div className='AddQuestion'>
                <Header message="addQuestion" /> 
               <div style={style1}>
               <TextField
                  hintText="Enter Question"
                  floatingLabelText="Question"
                  onChange={(event, newValue) => this.setState({ Question: newValue })}
                />
                </div>
                <br />
                <div style={style1}>
                <TextField
                hintText="Enter Answer for question"
                  floatingLabelText="Answer"
                  onChange={(event, newValue) => this.setState({ Answer: newValue })}
                />
                </div>
                <br />
                <p style={style1}>To add more questions click on submit</p>
                <div style={style1}>
                <Link to = "/teacher/startquiz" >
                        <RaisedButton label="Submit" primary={true} style={style} />
                </Link>
                </div>
              </div>
            </MuiThemeProvider>
          </div>
        );
    }
}
const customstyle = {
        textAlign : '250px',
};
const style1 = {
    textAlign: 'center',
};

export default Questions;