import React from "react";

import BackgroundHero from "../img/portfolio-4.jpg";
import "./Products.css";

const heroImage = {
  backgroundImage: `url( ${BackgroundHero})`,
  height: "15vh",
  backgroundSize: "cover",
  border: "2px solid red",
  marginTop: "-120px"
};

function Products() {
  return (
    <div className="products">
      <header style={heroImage}>
        <h2>Our Products</h2>
      </header>
      <div className="row">
        <IconObj
          icon={icons[0].icon}
          title={icons[0].title}
          description={icons[0].description}
        />
        <IconObj
          icon={icons[1].icon}
          title={icons[1].title}
          description={icons[1].description}
        />
        <IconObj
          icon={icons[2].icon}
          title={icons[2].title}
          description={icons[2].description}
        />
        <IconObj
          icon={icons[3].icon}
          title={icons[3].title}
          description={icons[3].description}
        />
      </div>
    </div>
  );
}

export default Products;

const icons = [
  {
    icon: <ion-icon name="pencil-outline"></ion-icon>,
    title: "Pencils",
    description: "Lead or Graphite"
  },
  {
    icon: <ion-icon name="paper-plane-outline"></ion-icon>,
    title: "Paper",
    description: "Made from Bamboo"
  },
  {
    icon: <ion-icon name="cut-outline"></ion-icon>,
    title: "Scissors",
    description: "Stainless Steel"
  },
  {
    icon: <ion-icon name="mail-outline"></ion-icon>,
    title: "Envelopes",
    description: "All Sizes"
  }
];

function IconObj(props) {
  return (
    <div>
      <span>{props.icon}</span>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}
