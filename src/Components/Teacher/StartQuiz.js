import RaisedButton from 'material-ui/RaisedButton';
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from 'material-ui/styles';
import './Teacher.css';
import {Link} from 'react-router-dom';
import './Teacher.css';
import Header from '../Header/Header';

/**
 * @author : Bhavana Vakkalagadda(bvakkala)
 * @since : 19 Nov, 2019
 */

class StartQuiz extends Component{
    constructor(props) {
        super(props);
        console.log("sdfatsf");
        
        var headerMessage = "Welcome ";
        // + this.props.location.state.username;
		this.state = {
			message: headerMessage,
		//	username: this.props.location.state.username
		}
    }
    LoginPage() {
        console.log(" inside start quiz functions !!");
        
        this.props.history.push('/Login/LoginScreen', this.state)
        
		//this.props.push('./Teacher/StartQuiz', this.state)
    }
    QuestionsPage() {
        console.log(" inside Question page !!");
        
        this.props.history.push('/Teacher/Questions', this.state)
        
    }
    
    sendMessage () {
        this.props.setHeaderMessage("Lets start the quiz!");
    }
    render(){
        return(

            <div className = "StartQuiz">
            <MuiThemeProvider>
            <div>
						<Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />
					</div>
                <div style={style1}>
                  Instructions to create Quiz 
                  <p>1.To add questions please click on add</p>
                  <p>2.Add question in the question field</p> 
                  <p>3.Add answer in the answer field</p>
                  <p>5.To go back please click on Quit </p>
                <label>
                <Link to = "/teacher/createquiz" >
                        <RaisedButton label="Quit" primary={true} style={style} />
                    </Link>
                </label>
                <label>
                    <Link to = "/teacher/Questions" >
                        <RaisedButton label="Add" primary={true} style={style} onClick = {(event) => this.QuestionsPage()}/>
                     </Link>
                </label>
                </div>
            </MuiThemeProvider>
        </div>

        
        );
    }
}
const style1 = {
    textAlign: 'center',
};
  
export default StartQuiz;