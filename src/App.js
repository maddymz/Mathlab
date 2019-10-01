// import React, { Component } from 'react';
// import './App.css';
// import Login from './Login/Loginscreen';
// import Student from './Student/Student'
// import { BrowserRouter, Route } from 'react-router-dom'

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loginPage: []
//     }
//     console.log(props);

//   }
//   // componentDidMount() {
//   //   var loginPage = [];
//   //   loginPage.push(<Login parentContext={this} />);
//   //   this.setState({
//   //     loginPage: loginPage
//   //   })
//   // }
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Login/>
//           <Route path='/' Component={Login}/>
//           <Route path='/student' Component={Student}/>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;



import React, { Component } from 'react';
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;