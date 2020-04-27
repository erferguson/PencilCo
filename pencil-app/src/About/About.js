import React from 'react';
import BackgroundHero from '../img/PencilCo..png'

const heroImage = {
    backgroundImage: `url( ${BackgroundHero})`,
    height: '30vh',
    backgroundSize: "cover"
}

function About () {
    return (
        <div>
            <header style={heroImage}>
            </header>
            <p>The funny thing about being a family-owned, 100-year-old pencil factory is that a pencil is an enduring object in the midst of change — including technology and major shifts to American manufacturing.
            </p>
            <p>Through steady management, a dedicated team of employees, loyal customers, and a vibrant manufacturing community in our hometown of Napa, CA, we’re stronger than ever providing manufacturing jobs and an American-made product.
            </p>
            <p>A pencil is simple, utilitarian, and yet the starting point for creativity, education, and human connection. We’re proud of our product and our capabilities as a manufacturer, and we are eager to help you create a high-quality, American-made pencil just right for your company or brand.
            </p>

        </div>
    )
}

export default About;