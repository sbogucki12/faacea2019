import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="/api/currentuser">Sign in with google</a>
      </div>
    );
  }
}

export default App;
