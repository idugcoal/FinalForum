import React, { Component } from 'react';
import ThreadDisplay from './components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import config from './config.js'

class App extends Component {
  constructor(props) {
    super(props);

    var keys = config

    this.app = firebase.initializeApp(keys);
    this.database = this.app.database();

  }
  render() {
    return (
      <ThreadDisplay database={this.database}/>
    );
  }
}

export default App;

