import React from "react";
import BackgroundHero from '../../img/bg-masthead.jpg'
import './Header.css'

const heroImage = {
    backgroundImage: `url( ${BackgroundHero})`,
    height: '50vh',
    backgroundSize: "cover"
}

function Header ({title, button}){
   return (
        <div>
            <header style={heroImage}>
                <h1>{title}</h1>
                <p>Made in America since 1887</p>
                <button>{button}</button>
            </header>
        </div>
    )
}

export default Header;