import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';


import './Teacher.css';
// eslint-disable-next-line 
import Header from '../Header/Header'
import { white } from 'material-ui/styles/colors';
/**
 * @author : Bhavana Vakkalagadda(bvakkala)
 * @since : 02 Nov, 2019
 * @version : 2.0
 */

class CreateQuiz extends Component {

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
    StartQuizPage() {
        console.log(" inside start quiz functions !!");

        this.props.history.push('/teacher/startquiz', this.state)

    }
    QuestionsPage() {
        console.log(" inside Question page !!");
        
        this.props.history.push('/Teacher/Questions', this.state)
        
    }
    render() {
        return (
            <div className="CreateQuiz">
                <div>
                <Header message={this.state.message} showLogoutButton={true} parentProps={this.props} />
                </div>
                <MuiThemeProvider>
                <div style={style1}>
                <div style={{marginLeft:"600px" }}>
                <h1>
                <ListItem>
                  <ListItemText color={white}
                    
                    primary="Information about quiz questions "
                  />
                </ListItem></h1>
                    <ListItem>
                  <ListItemText
                    primary="1.Each quiz has two questions "
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="2.Each question carry 3 marks"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="3.This is Not time based quizzes"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="4.Questions are based on student level "
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    
                    primary="Instructions to create Quiz "
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="1.To add questions please click on add"
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="2.Add question in the question field"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="3.Add answer in the answer field"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="5.To go back please click on Quit "
                  />
                </ListItem>

                </div>
                  </div>
                    <div style={{marginLeft:"600px"}}>
                        <label>
                        <Link to = "/" >
                        <RaisedButton label="Back" primary={true} style={{margin:"10px 20px"}}/>
                     </Link>
                     </label>
                    <label>
                    <Link to = "/Teacher/Questions" >
                        <RaisedButton label="Add" primary={true} style={style1} onClick = {(event) => this.QuestionsPage()}/>
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

export default CreateQuiz;