import React from 'react';
// import './App.css';
import './Navigation.css'

function Navigation ({LogoTitle}) {
  return (
    <div>
        <nav>
        <h2 className='logo'>{LogoTitle}</h2>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#products'>Products</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        </nav>
    </div>
  );
}

export default Navigation;
