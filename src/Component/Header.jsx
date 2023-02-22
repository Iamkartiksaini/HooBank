import React from "react";
import { logo } from "../assets/index";
import "../Styles/Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="" />
      <div>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Feature</a>
        <a href="#">Solution</a>
      </div>
    </div>
  );
};

export default Header;
