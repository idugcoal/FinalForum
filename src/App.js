import React, { Component } from 'react';
import ThreadDisplay from './components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const config = 
    {
      apiKey: "AIzaSyAyQ0ORIQHxAHggK0k2-cPsKU_U3hn3Bg0",
      authDomain: "finalforum-c5829.firebaseapp.com",
      databaseURL: "https://finalforum-c5829.firebaseio.com",
      storageBucket: "finalforum-c5829.appspot.com",
      messagingSenderId: "260270446235"
    };
    
    this.app = firebase.initializeApp(config);
    this.database = this.app.database();

  }
  render() {
    return (
      <ThreadDisplay database={this.database}/>
    );
  }
}

export default App;

