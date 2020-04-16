import React from "react";
// import './App.css';
import "./Navigation.css";

function Navigation({ LogoTitle }) {
  const sections = ["Home", "About", "Services", "Products", "Contact"];
  const navLinks = sections.map(section => {
    return (
      <li>
        <a href={"#" + section}>{section}</a>
      </li>
    );
  });

  return (
    <div>
      <nav>
        <h2 className="logo">{LogoTitle}</h2>
        <ul>{navLinks}</ul>
      </nav>
    </div>
  );
}

export default Navigation;
