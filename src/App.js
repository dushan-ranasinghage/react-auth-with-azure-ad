import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Hi! You have been authenticated from Azure Active Directory.</code>
          </p>
          <button className="sign-out">Sign out</button>

        </header>
      </div>
    );
  }
}

export default App;
