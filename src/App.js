import React, { Component } from 'react';
import './App.css';
import Loginscreen from './Login/Loginscreen';
import TeacherView from './Teacher/TeacherView';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[]
    }
  }
  componentDidMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        <TeacherView/>
      </div>
    );
  }
}

export default App;