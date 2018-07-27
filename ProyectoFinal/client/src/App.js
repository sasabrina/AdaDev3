import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Items from './components/Items'
import Itemid from './components/Itemid'
import {
  BrowserRouter as Router,
  Route,
  Switch
  } from 'react-router-dom' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><Search/></div>
        </header>
        <div className="App-main">
          <Router>
            <Switch>
            <Route exact path="/items" component={Items}/>
            <Route path="/items/:id" component={Itemid}/>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
