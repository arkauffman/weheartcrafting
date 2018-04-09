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
  state = {
    shoppingItems: []
  }
  
  componentDidMount() {

  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' render={(props) =>
            <Home
            shoppingItems={this.state.shoppingItems}
            />
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
