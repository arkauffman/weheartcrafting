import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Preloader} from 'react-materialize';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import './App.css';
import ItemDetails from '../components/Item/ItemDetails'
// import AppController from './../controllers/AppController';

const doAction = async (path) => {
  return await fetch(path)
}

class App extends Component {
  state = {
    shoppingItems: [],
    isLoading:true
  }
  // getChildContext() {
  //   return {
  //     controller: this.controller,
  //   };
  // }


  async componentDidMount() {
    // let results = await AppController.getItems()
    try {
      let results = await doAction('/api/items')
      results = await results.json()
      console.log(results)
      this.setState({
        shoppingItems: results,
        isLoading: !this.state.isLoading
      })
    } catch (e) {
      console.log(e);
      this.setState({ isLoading: !this.state.isLoading })
    } 
  }

  render() {
    return (
      <Router>
        <div className="App">
            <NavBar />
            {this.state.isLoading ? (
              <Preloader size='big' flashing/>
            ) : (
            <Switch>
              <Route exact path='/' render={props => <Home shoppingItems={this.state.shoppingItems} />
              }/>
              <Route exact path='/about' render={props => <About />
              }/>
              <Route path='/items/:id' render={props => <ItemDetails {...props}/>}/>
            </Switch>
            )}
        </div>
      </Router>
    );
  }
}

export default App;

// App.childContextTypes = {
//   controller: PropTypes.instanceOf(AppController),
// };
