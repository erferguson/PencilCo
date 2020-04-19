import React from 'react';
import './App.css';

import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Products from './Products/Products'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
        <Navigation LogoTitle='Pencil Co.'/>
        <Header title='Pencil Co.' button='Graphium'/>
        <Products />
        <Footer />
    </div>
  );
}

export default App;
