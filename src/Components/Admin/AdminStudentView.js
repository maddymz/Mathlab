import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import {Modal} from 'semantic-ui-react';
import Checkbox from '@material-ui/core/Checkbox';
import HeaderBar from '../Header/Header';
import axios from "axios";


/**
 * @author: Surya Cherukuri
 * @version: 2.0
 * @author: Viraj Khatri
 * @version: 3.0
 * @author : Surya Cherukuri
 * @version: 4.0
 * @author : Surya Cherukuri
 * @version: 5.0
 */

class AdminStudentView extends Component {

  constructor(props){
    super(props);
      this.state = {data:null,boxes:[],items:[],check:[],firstname: '', lastname: '', 
        username: '', password: '', grade: '', email: ''};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
      var data = require('../../Assets/users.json');  
      localStorage.setItem('students', JSON.stringify(data));
      this.setState({boxes:[],data:data,check:[]});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    var students = JSON.parse(localStorage.getItem('students'));
    const myObj = {
        name: this.state.firstname + " " + this.state.lastname,
        username: this.state.username,
        password: this.state.password,
        role: "student",
        email: this.state.email
      };
      var flag=0;
      var obj = JSON.parse(JSON.stringify(this.state.data));
      for(var i=0;i<obj.length;i++) {
          if(obj[i].username === this.state.username){
            flag = 1;
          }
      }
      if(flag === 0) {
        students.push(myObj);
        localStorage.setItem('students', JSON.stringify(students));
        alert("Successfully added Student"); 
        axios
        .post('http://localhost:3001/addStudent', students)
        .then(() => { 
          this.setState({data:students});
          var frm = document.getElementsByName('contact-form')[0];
          frm.reset();  // Reset all form data
          this.setState({items:[]});
          this.setState({boxes:[]});
          this.setState({check:[]});
        })
        .catch(err => {
          console.error(err);
        });
      }
      else {
        alert("User already exists with same username");
      }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render(){
    var addButton =  <RaisedButton label="Add Student" primary={true} 
      style={  {marginTop: '200px',marginLeft: '400px',marginRight: '100px',marginBottom: '100px'}}/>;
    var deleteButton = <RaisedButton label="Delete Student" primary={true} 
      style={ {marginTop: '200px',marginLeft: '300px',marginRight: '100px',marginBottom: '100px'}} onClick={(event) => Delete(this)}/>;
    var styleList = {
      height: '350px',
      width: '450px',
      position: 'center', 
      left: '50%', 
      top: '20%',
      transform: 'translate(-50%, 20%)',
      overflow: 'auto'
    };
    var obj = JSON.parse(localStorage.getItem('students'));
    this.state.boxes.length=0;
    this.state.items.length=0;
    for (const [, value] of obj.entries()) {
      if(value.role === "student") {
        this.state.items.push(value);
        this.state.check.push(0);
      }
    }
  
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <HeaderBar message="Admin" showLogoutButton = {true} parentProps={this.props} />
            <List style={styleList}>
              {this.state.items.map((value, key) => {
                this.state.boxes.push(<Checkbox
                  checked= {this.state.check[key]}
                  onChange={handleChange(value.username,this)}
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
                          <Typography component="span" variant="body2" color="textPrimary">
                            Software Engineering
                          </Typography>
                          <br></br>
                          {value.email}
                        </React.Fragment>
                      }
                    />
                    {this.state.boxes[key]}
                  </ListItem>          
                )
              })}
            </List>
            <Modal size= "mini" trigger={addButton} closeIcon style={{ display: "flex",alignItems: "center",  justifyContent: "center"}}>
              <Modal.Header className="ui center aligned" style={{backgroundColor: '#34deeb', color: 'white', alignItems: 'center'}}>
                Add Student
              </Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <form name = 'contact-form' onSubmit={this.handleSubmit}>
                    <TextField  required name="firstname" style = {{marginLeft:"60px"}} id="standard-basic" label="First Name" onChange={this.handleInputChange}/>
                    <br />
                    <br />
                    <TextField  style = {{marginLeft:"60px"}} required name="lastname" id="standard-basic" label="Last Name" onChange={this.handleInputChange}/>
                    <br />
                    <br />
                    <TextField style = {{marginLeft:"60px"}} required name="username"  label="User Name" onChange={this.handleInputChange}/>
                    <br />
                    <br />
                    <TextField required style = {{marginLeft:"60px"}} onChange={this.handleInputChange} label="Password" name = "password" type="password" margin="normal"/>
                    <br />
                    <br />
                    <TextField style = {{marginLeft:"60px"}} required min="1" max="12" name="grade"  type="number" label="Grade" onChange={this.handleInputChange}/>
                    <br />
                    <br />
                    <TextField style = {{marginLeft:"60px"}} required  name="email"  type="email" label="Email address" onChange={this.handleInputChange}/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <RaisedButton style = {{marginLeft:"90px"}} type="submit" label="submit" className="button-submit" primary={true} />
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
  for(var k = 0;k<context.state.boxes.length;k++){
    if(context.state.check[k]){
       listToDelete.push(context.state.boxes[k].props.value);
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
      context.setState({data:students});
      context.setState({check:[]});})
    .catch(err => {
      console.error(err);
    });
}

const handleChange = (name,context) => event => {
  console.log(context.state.boxes);
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
      var newList = context.state.check.slice() //copy the array
      newList[i] = !newList[i]; //execute the manipulations
      context.setState({check: newList}); //set the new state
    }
  }
};

export default AdminStudentView;