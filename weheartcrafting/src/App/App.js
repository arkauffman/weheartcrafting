import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />

            <Home />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
