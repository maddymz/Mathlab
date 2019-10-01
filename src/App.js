import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './Compnents/Header'
import React, { Component } from 'react';
import Login from './Login/Loginscreen'
import Student from './Student/Student'
import CreateQuiz from './Teacher/CreateQuiz';
import TeacherView from './Teacher/TeacherView';
import StudentMain from './Student/StudentMain';
import StudentQuiz from './Student/StudentQuiz';
import StudentPractice from './Student/StudentPractice';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/student" exact component={StudentMain} />
            <Route path="/student/practice" component={StudentPractice} />
            <Route path="/student/quiz" component={StudentQuiz} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;