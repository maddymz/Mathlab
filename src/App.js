import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Loginscreen';
import StudentMain from './Components/Student/StudentMain';
import StudentPractice from './Components/Student/StudentPractice';
import StudentQuiz from './Components/Student/StudentQuiz';
import TeacherView from './Components/Teacher/TeacherView'
import CreateQuiz from './Components/Teacher/CreateQuiz'
import StartQuiz from './Components/Teacher/StartQuiz';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' exact component={Login} />
            <Route path="/student" exact component={StudentMain} />
            <Route path="/student/practice" exact component={StudentPractice} />
            <Route path="/student/quiz" exact component={StudentQuiz} />
            <Route path="/teacher" exact component={TeacherView} />
            <Route path='/quiz' exact component={CreateQuiz} />
            <Route path='/teacher/startquiz' exact component={StartQuiz} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;