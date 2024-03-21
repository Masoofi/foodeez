import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />
      <div className="nav">
        <ul className="nav-Item">
          <li className="nav-list">
            <a href="/">Home</a>
          </li>
          <li className="nav-list">
            <a href="/">Menu</a>
          </li>
          <li className="nav-list">
            <a href="/">Mobile-App</a>
          </li>
          <li className="nav-list">
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
