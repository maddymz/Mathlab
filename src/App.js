import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import React, { Component } from 'react';
import Login from './Components/Login/Loginscreen'
import Student from './Components/Student/Student'
import CreateQuiz from './Components/Teacher/CreateQuiz';
import TeacherView from './Components/Teacher/TeacherView';
import StudentMain from './Components/Student/StudentMain';
import StudentQuiz from './Components/Student/StudentQuiz';
import StudentPractice from './Components/Student/StudentPractice';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
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