import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="logo"/>
        </div>
        <div className="body">
          <div className="card-container">
            <div className="card"/>
            <div className="card"/>
            <div className="card"/>
            <div className="card"/>
            <div className="card"/>
            <div className="card"/>
          </div>
        </div>
        <div className="footer"/>
      </div>
    );
  }
}

export default App;
