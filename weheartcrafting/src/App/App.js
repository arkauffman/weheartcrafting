import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import About from '../About/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' render={(props) =>
            <Home />
          }/>
          <Route exact path='/about' render={(props) => 
             <About /> 
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
