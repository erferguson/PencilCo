import React from 'react';
import './App.css';

import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Products from './Products/Products'

function App() {
  return (
    <div className="App">
        <Navigation LogoTitle='Pencil Co.'/>
        <Header title='Pencil Co.' button='Graphium'/>
        <Products />
    </div>
  );
}

export default App;
