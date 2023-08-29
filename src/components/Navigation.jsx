import "../App.css";
import React from "react";
import brandlogo from "../../public/images/brand_logo.png";
const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={brandlogo} alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About Us</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
