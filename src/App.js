import React, { Component } from 'react';
import AuthContext from 'adal-angular';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Hi! You have been authenticated from the Azure Active Directory.</code>
          </p>
          <button className="sign-out" onClick={() => window.authContext.logOut()}>Sign out</button>
        </header>
      </div>
    );
  }
}

export default App;
