import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Loginscreen';
import StudentMain from './Components/Student/StudentMain';
import StudentPractice from './Components/Student/StudentPractice';
import StudentQuiz from './Components/Student/StudentQuiz';
import TeacherView from './Components/Teacher/TeacherView'
import CreateQuiz from './Components/Teacher/CreateQuiz'
import StartQuiz from './Components/Teacher/StartQuiz';

/**
 * @author: Madhukar Raj
 * @version: 1.0
 * @author: Viraj Khatri
 * @version: 2.0
 */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />

            <Route exact path="/student" component={StudentMain} />
            <Route exact path="/student/practice" component={StudentPractice} />
            <Route exact path="/student/quiz" component={StudentQuiz} />
            <Route exact path="/teacher" component={TeacherView} />
            <Route exact path='/quiz' component={CreateQuiz}/>

            <Route exact path='/teacher/startquiz' component={StartQuiz}/>
          </Switch>
        </div>  
      </BrowserRouter>
    );
  }
}

export default App;