import React from 'react';
// import './App.css';
import './Navigation.css'

function Navigation () {
  return (
    <div>
        <nav>
        <h2 className='logo'>Pencil Co</h2>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        </nav>
    </div>
  );
}

export default Navigation;
