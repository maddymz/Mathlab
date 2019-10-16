import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Loginscreen';
import StudentMain from './Components/Student/StudentMain';
import StudentPractice from './Components/Student/StudentPractice';
import StudentQuiz from './Components/Student/StudentQuiz';
import TeacherView from './Components/Teacher/TeacherView'

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
            <Route path="/teacher" component={TeacherView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;