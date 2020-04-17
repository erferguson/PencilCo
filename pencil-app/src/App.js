import React from 'react';
import './App.css';

import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Services from './Services/Services'

function App() {
  return (
    <div className="App">
        <Navigation LogoTitle='Pencil Co.'/>
        <Header title='Pencil Co.' button='Graphium'/>
        <Services />
    </div>
  );
}

export default App;
