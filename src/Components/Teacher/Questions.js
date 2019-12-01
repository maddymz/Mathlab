import React, {Component} from 'react';
import style from 'material-ui/styles';
import './Teacher.css';
import {Link} from 'react-router-dom';
import './Teacher.css';
import Header from '../Header/Header';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from "axios"
import data from '../../Assets/users.json'

/**
 * @author : Bhavana Vakkalagadda(bvakkala)
 * @since : 24 Nov, 2019
 * @version : 1.0
 */

// const theme = createMuiTheme({
//   typography: {
//     useNextVariants: true
//   }
// });
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
    this.state = {
      Question: "",
      Answer: "",
      Points: "",
      error: "",
      Quizno: ""
    };

    this.reset = this.reset.bind(this);
    }

    reset() {
      this.setState({Question: ""});
      
      this.setState({Answer: ""});
      this.setState({Points: ""});
      this.setState({error: ""});
      this.setState({Quizno: ""});

   
   }
   
    
    sendMessage () {
        this.props.setHeaderMessage("Lets start the quiz!");
    }


    AddQuestion() {

      var Question = this.state.Question;
      
      var Answer = this.state.Answer;
      var Points = this.state.Points
      var error = this.state.error
      var Quizno = this.state.Quizno;
  
      var Question =  {
        Question,
        Answer,
        Points,
        Quizno,
      }
      if (Question === "") {
        alert("Please fill Question")
      return;
      }
       if (Answer === "") {
        alert("Please fill Answer")
      return;
      }
  
      
         if (Quizno === "") {
          alert("Please fill Quizno")
      return;
        }
          
        if(Points === "") {
          alert("Please select Points")
      return;
        }
        if(error != "") {
          alert("Please update everyfield")
      return;
        }
  
            axios
        .post('http://localhost:3001/createquiz', Question)
        .then(() => {alert("Succesfully added question")
        this.props.history.goBack()})
        .catch(err => {
          console.error(err);
          alert("Question Already exists")
        });
      }
    render(){
        return(

            <div>
            <MuiThemeProvider>
            <form>
              
              <div className='AddQuestion'>
                <Header message="addQuestion" />
                <div style={style1}>
                 
               <TextField
                  hintText="Enter Quizno"
                  floatingLabelText="Quizno"
                  value={this.state.Quizno}
                  onChange={(event, newValue) => this.setState({ Quizno: event.target.value })}
                />
                </div> 
               <div style={style1}>
                 
               <TextField
                  hintText="Enter Question"
                  floatingLabelText="Question"
                  value={this.state.Question}
                  onChange={(event, newValue) => this.setState({ Question: event.target.value })}
                />
                </div>
                <br />
                <div style={style1}>
                <TextField
                hintText="Enter Answer for question"
                  floatingLabelText="Answer"
                  value={this.state.Answer}
                  onChange={(event, newValue) => this.setState({ Answer: event.target.value })}
                />
                </div>
                <div style={style1}>
                <TextField
                hintText="Enter Student Points for question"
                  floatingLabelText="Points"
                  value={this.state.Points}
                  onChange={(event, newValue) => this.setState({ Points: event.target.value })}
                />
                </div>
                <div>
          <RadioGroup row aria-label="Points" name="Points" style={{marginLeft:"20px"}}  value={this.state.Points} 
          onChange={(event, newValue) =>
                    this.setState({ Points: event.target.value })}>
          {/* <FormControlLabel value="Option1" control={<Radio />} label="Option1" />
          <FormControlLabel value="Option2" control={<Radio />} style={{marginLeft:"115px"}} label="Option2" />
          <FormControlLabel value="Option3" control={<Radio />} style={{marginLeft:"115px"}} label="Option3" />
          <FormControlLabel value="Option4" control={<Radio />} style={{marginLeft:"115px"}} label="Option4" /> */}

          </RadioGroup>
          </div> 
        
                <br />
                <p style={style1}>To add more questions click on submit</p>
                <div style={style1}>
               
               <Link to = "/Teacher/Questions" >
                        <RaisedButton label="Submit" primary={true} style={{margin:"10px 20px"}} onClick={event => this.AddQuestion(event)}/>
                </Link> 
               
               <Link to = "/Teacher/Questions" >
                        <RaisedButton label="Reset" primary={true} style={style} onClick={event => this.reset(event)}/>
                </Link> 
                </div>
              </div>
              </form>
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