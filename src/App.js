import React, { Component } from 'react';
import './App.css'; 

// Component import
import { Header } from './components/Header.jsx'
import { Home } from './components/Home.jsx' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
