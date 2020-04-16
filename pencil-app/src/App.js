import React from 'react';
import './App.css';

import Navigation from './Navigation/Navigation'
import Header from './Header/Header'

function App() {
  return (
    <div className="App">
        <Navigation LogoTitle='Pencil Co.'/>
        <Header />
    </div>
  );
}

export default App;
