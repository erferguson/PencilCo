import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pencil Co.</h1>
        <p>
        "If the #2 pencil is the most popular, why is it still #2?" - George Carlin"
        </p>
        <Navigation />
      </header>
    </div>
  );
}

export default App;
