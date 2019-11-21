import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RadioButton from '@material-ui/core/Radio';
import React, { Component } from 'react';
import {AddStudentPopUp} from './AddStudentPopUp';
import {Modal, Button, Header, Row, Col, Form} from 'semantic-ui-react';
import {ButtonToolbar} from 'react-bootstrap';
import {render} from 'react-dom';
import Checkbox from '@material-ui/core/Checkbox';
import { len } from 'gl-matrix/src/gl-matrix/vec2';
import StudentModal from './StudentModal';
import HeaderBar from '../Header/Header';
//var Modal = require('react-bootstrap-modal');

/**
 * @author: Surya Cherukuri
 * @version: 2.0
 * @author: Viraj Khatri
 * @version: 3.0
 * @author : Surya Cherukuri
 * @version: 4.0
 */


class AdminProfView extends Component {


  constructor(props){
    super(props);
    //this.state = {students:[], addModalShow : false}
      this.state = {data:null,boxs:[],firstname: '', lastname: '', username: '', password: '', grade: '', email: ''}
      this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    console.log('First this called');
    console.log(this.state);
      var data = require('../../Assets/users.json');  
      //var obj = JSON.parse(JSON.stringify(data));
      localStorage.setItem('students', JSON.stringify(data));

      this.setState({boxs:[],data:data});
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("yoooooooooooo");
    var students = JSON.parse(localStorage.getItem('students'));
    const myObj = {
        name: this.state.firstname + " " +this.state.lastname,
        username: this.state.username,
        password: this.state.password,
        role: "teacher",
        email:this.state.email
      };
      students.push(myObj);
      console.log(students);
      localStorage.setItem('students', JSON.stringify(students));
      alert("Successfully added Professor");
      this.setState({data:students});
      var frm = document.getElementsByName('contact-form')[0];
      frm.reset();  // Reset all form data
      
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
  var addButton =  <RaisedButton label="Add Professor" primary={true} style={  {marginTop: '200px',marginLeft: '400px',marginRight: '100px',marginBottom: '100px'}} onClick={(event) => studentModal(addButton)}/>;
    var deleteButton = <RaisedButton label="Delete Professor" primary={true} style={ {marginTop: '200px',marginLeft: '300px',marginRight: '100px',marginBottom: '100px'}} onClick={(event) => Delete(boxes,obj,this)}/>;
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
      var items = [];
      var boxes = [];
      console.log(obj);
      for (const [index, value] of obj.entries()) {
        console.log(index);
        
        if(value.role === "teacher") {
          items.push(value)
        }
  
      }
      return (
        
        <div>
          <MuiThemeProvider>
            <div>
            <HeaderBar message={this.state.message} showLogoutButton = {true} parentProps={this.props} />
              <List style={styleList}>
              
              {items.map((value, key) => {
               console.log("dbox",boxes);
               var i =0;
                boxes.push(<Checkbox
                  defaultChecked={false}
                  onChange={handleChange(value.username, boxes,this)}
                  value={value.username} 
                  inputProps={{
                    'aria-label': 'uncontrolled-checkbox',
                    'ischeck': 'false'
                  }}
                />)
                
                console.log("key", key);
                console.log("boxs",boxes[key]);
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
                 {boxes[key]}
                </ListItem>
                //<Divider variant="inset" component="li" />           
              )
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

function Delete(boxes, obj, context){


  var students = JSON.parse(localStorage.getItem('students'));
  var listToDelete = [];
  for(var i = 0;i<boxes.length;i++){
    if(boxes[i].props.inputProps.ischeck==='true'){
       listToDelete.push(boxes[i].props.value);
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
      boxes=[];
      context.setState({data:students});
      
      
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
      <form>
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
  console.log(boxes);
  
  for(var i=0;i<boxes.length;i++)
  {
    console.log("====>" + boxes[i].props.value + " " + name);
    if(boxes[i].props.value === name)
    {
      if(boxes[i].props.inputProps.ischeck === 'false'){
        boxes[i].props.inputProps.ischeck='true';
      }
      else{
        boxes[i].props.inputProps.ischeck='false';
      }
      
    }
  }
  
};

export default AdminProfView;