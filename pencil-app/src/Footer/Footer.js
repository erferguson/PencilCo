import React from "react";
import './Footer.css'
// import BackgroundHero from '../img/bg-masthead.jpg'

// const heroImage = {
//     backgroundImage: `url( ${BackgroundHero})`,
//     height: '50vh',
//     backgroundSize: "cover"
// }

function Footer (){
   return (
        <div className='social'>
            <footer>
                <div className='row'>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-no-smoking"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <p>Copyright Pencil Co. 2020</p>
            </footer>
        </div>
    )
}

export default Footer;