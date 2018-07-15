import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Repository from './components/Repository'


class App extends Component {
  render() {
    return (<div><Header/><Repository/></div>);
  }
}

export default App;
