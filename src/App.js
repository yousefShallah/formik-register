import React from 'react';
import "./App.css";
import Login from './Components/login';
import Signup from './Components/signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

  render(){
    return (
          <div className="app">
            <Router>
              <Switch>
                <Route exact path='/' >
                  <Login  />
                </Route>
                <Route path='/login' >
                  <Login  />
                </Route>
                <Route path="/signup"> 
                  <Signup />
                </Route>
              </Switch>
            </Router>
          </div>
    );
  }
}

export default App;
