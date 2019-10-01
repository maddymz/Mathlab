



import React, { Component } from 'react';

import { Route, BrowserRouter } from 'react-router-dom'
import Login from './Login/Loginscreen'
import Student from './Student/Student'
import CreateQuiz from './Teacher/CreateQuiz';
import TeacherView from './Teacher/TeacherView';


import { Route, BrowserRouter } from 'react-router-dom'
import Login from './Login/Loginscreen'
import Student from './Student/Student'



class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div className="App">
            <Route exact path='/' component={Login} />
            <Route path='/Student' component={Student} />
            <Route exact path='/TeacherView' component={TeacherView} />
            <Route exact path='/TeacherQuiz' component={CreateQuiz} />
          </div>
        </BrowserRouter>


      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Login} />
          <Route path='/Student' component={Student} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;