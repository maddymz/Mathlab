'use strict'; 
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import {Modal, Button, Header, Row, Col, Form} from 'semantic-ui-react';
import Checkbox from '@material-ui/core/Checkbox';
import HeaderBar from '../Header/Header';
import axios from "axios"


/**
 * @author: Surya Cherukuri
 * @version: 2.0
 * @author: Viraj Khatri
 * @version: 3.0
 * @author : Surya Cherukuri
 * @version: 4.0
 */


class AdminStudentView extends Component {

  constructor(props){
    super(props);
    //this.state = {students:[], addModalShow : false}
      this.state = {data:null,boxes:[],items:[],check:[],flag:0,firstname: '', lastname: '', username: '', password: '', grade: '', email: ''}
      
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    console.log('First this called');
    console.log(this.state);
      var data = require('../../Assets/users.json');  
      //var obj = JSON.parse(JSON.stringify(data));
      localStorage.setItem('students', JSON.stringify(data));
      this.setState({boxes:[],data:data,check:[]});
      // var obj = JSON.parse(localStorage.getItem('students'));
      // this.state.boxes.length=0;
      // console.log("+++++++++", this.state);
      // for (const [index, value] of obj.entries()) {
      //   if(value.role === "student") {

      //     //this.state.items.push(value);
      //     this.state.check.push(0);
       
      //   }
      // }
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log("yoooooooooooo");
    //var fs = require('react-native-fs');
    var students = JSON.parse(localStorage.getItem('students'));
    const myObj = {
        name: this.state.firstname + " " +this.state.lastname,
        username: this.state.username,
        password: this.state.password,
        role: "student",
        email:this.state.email
      };
      students.push(myObj);
      console.log(students);
      localStorage.setItem('students', JSON.stringify(students));
      alert("Successfully added Student");
      // this.setState({data:students});
      // var frm = document.getElementsByName('contact-form')[0];
      // frm.reset();  // Reset all form data
      // this.setState({flag:0});
      // this.setState({items:[]});
      // this.state.boxes.length=0;
      // this.state.items.length=0;
      // this.setState({check:[]});
      axios
        .post('http://localhost:3001/addStudent', students)
        .then(() => { 
        this.setState({data:students});
        var frm = document.getElementsByName('contact-form')[0];
        frm.reset();  // Reset all form data
        this.setState({flag:0});
        this.setState({items:[]});
        this.state.boxes.length=0;
        this.state.items.length=0;
        this.setState({check:[]});})
        .catch(err => {
          console.error(err);
        });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name);
    this.setState({
      [name]: value
    });
  }
render(){
  console.log("second");
  var addButton =  <RaisedButton label="Add Student" primary={true} style={  {marginTop: '200px',marginLeft: '400px',marginRight: '100px',marginBottom: '100px'}} onClick={(event) => studentModal(addButton)}/>;
    var deleteButton = <RaisedButton label="Delete Student" primary={true} style={ {marginTop: '200px',marginLeft: '300px',marginRight: '100px',marginBottom: '100px'}} onClick={(event) => Delete(this)}/>;
    var styleList = {
        height: '350px',
        width: '450px',
        position: 'center', 
        left: '50%', 
        top: '20%',
        transform: 'translate(-50%, 20%)',
        overflow: 'auto'
      };
      //var data = require('../../Assets/users.json');
      var obj = JSON.parse(localStorage.getItem('students'));
      this.state.boxes.length=0;
      console.log("+++++++++", this.state);
      if(this.state.flag===0){
        console.log("obj",obj);
      for (const [index, value] of obj.entries()) {
        if(value.role === "student") {

          this.state.items.push(value);
          this.state.check.push(0);
        }
      }
    }

      return (
        
        <div>
          <MuiThemeProvider>
            <div>
            <HeaderBar message="Admin" showLogoutButton = {true} parentProps={this.props} />
              <List style={styleList}>
              
              {this.state.items.map((value, key) => {
               var i =0;
               this.state.boxes.push(<Checkbox
                checked= {this.state.check[key]}
                onChange={handleChange(value.username, this.state.boxes,this)}
                value={value.username} 
                inputProps={{
                  'aria-label': 'uncontrolled-checkbox',
                  'ischeck': 'false'
                }}  
              />);
            
              return (
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Findler" src={require('./Findler.jpg')}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          
                          color="textPrimary"
                        >
                          Software Engineering
                        </Typography>
                        <br></br>
                        {value.email}
                      </React.Fragment>
                    }
                  />
                 {this.state.boxes[key]}
                </ListItem>
                //<Divider variant="inset" component="li" />           
              )
              i++;
              })}
              </List>

              <Modal trigger={addButton} closeIcon>
          <Modal.Header>

            Add Student
          </Modal.Header>
          <Modal.Content>
          <Modal.Description>
          <form name = 'contact-form' onSubmit={this.handleSubmit}>
            <label>
              FirstName:
              <input name="firstname" type="text" onChange={this.handleInputChange}  />
            </label>
            <br />
            <label>
              LastName:
              <input name="lastname" type="text"  onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              UserName:
              <input name="username" type="text" onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Password:
              <input name="password" type="text" onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Grade:
              <input name="grade" type="text" onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Email:
              <input name="email" type="text" onChange={this.handleInputChange} />
            </label>
            <br />
      
            <input type="submit" value="Submit" />
          </form>
    
            </Modal.Description>
          </Modal.Content>
        </Modal>
      
              {deleteButton}
            </div>
           </MuiThemeProvider>
        </div>

      );

    }
}

function Delete(context){


  var students = JSON.parse(localStorage.getItem('students'));
  var listToDelete = [];
  for(var i = 0;i<context.state.boxes.length;i++){
    if(context.state.check[i]){
      console.log("enter");
       listToDelete.push(context.state.boxes[i].props.value);
    }
  }
  for( var i=0; i< students.length; i++){
    var x = students[i];
    for(var j=0;j<listToDelete.length;j++){
    if (x.username===listToDelete[j]){
      students.splice(i,1);
      i--;
    }
  }
}
      localStorage.setItem('students', JSON.stringify(students));
      
      axios
        .post('http://localhost:3001/deleteStudent', students)
        .then(() => {context.state.boxes.length=0;
          context.state.items.length=0;
          console.log("test", context.state.boxes);
          context.setState({data:students});
          console.log("test1", context.state.items);
          context.setState({flag:0});
          context.setState({check:[]});})
        .catch(err => {
          console.error(err);
        });
}


function studentModal(props){
  console.log(props);
  return (
    <Modal trigger = {props} closeIcon>
      <Modal.Header>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
        Add Student
      </Modal.Header>
      <Modal.Content>
      <Modal.Description>
      <form >
        <label>
          FirstName:
          <input type="text"  />
        </label>
        <br />
        <label>
          LastName:
          <input type="text"  />
        </label>
        <br />
        <label>
          UserName:
          <input type="text"  />
        </label>
        <br />
        <label>
          Password:
          <input type="text"  />
        </label>
        <br />
        <label>
          Grade:
          <input type="text"  />
        </label>
        <br />
        <label>
          Email:
          <input type="text"  />
        </label>
        <br />
  
        <input type="submit" value="Submit" />
      </form>

        </Modal.Description>
      </Modal.Content>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}



const handleChange = (name,boxes,context) => event => {
  
  console.log("here");

  for(var i=0;i<context.state.boxes.length;i++)
  {
    if(context.state.boxes[i].props.value === name)
    {


      if(context.state.boxes[i].props.inputProps.ischeck === 'false'){
        context.state.boxes[i].props.inputProps.ischeck='true';
      }
      else{
        context.state.boxes[i].props.inputProps.ischeck='false';
      }
      var newIds = context.state.check.slice() //copy the array

      newIds[i] = !newIds[i]; //execute the manipulations
      console.log("yoo",newIds);
      //context.state.check.length=0;
      context.setState({check: newIds}); //set the new state
      context.setState({flag:1});
      //context.state.check[i]=1;
      console.log("yoo",context.state.check);
      
    }
  }
  
};

export default AdminStudentView;