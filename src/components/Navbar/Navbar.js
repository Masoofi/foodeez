import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />
      <div className="nav">
        <ul className="nav-Item">
          <li className="nav-list">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-list">
            <Link to={"/cart"}>Menu</Link>
          </li>
          <li className="nav-list">
            <Link to={"/order"}>Mobile-App</Link>
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
