import React from 'react';
import BackgroundHero from '../img/portfolio-4.jpg'

const heroImage = {
    backgroundImage: `url( ${BackgroundHero})`,
    height: '15vh',
    backgroundSize: "cover"
}

function About () {
    return (
        <div>
            <header style={heroImage}>
                <h2>About</h2>
            </header>
        </div>
    )
}

export default About;