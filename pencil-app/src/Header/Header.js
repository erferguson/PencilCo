import React from "react";
import BackgroundHero from '../img/bg-masthead.jpg'

const heroImage = {
    backgroundImage: `url( ${BackgroundHero})`,
    height: '80vh',
    backgroundSize: "cover"
}

function Header (){
   return (
        <div>
            <header style={heroImage}></header>
        </div>
    )
}

export default Header;