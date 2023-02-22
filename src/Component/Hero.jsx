import React from "react";
import { discount, robot } from "../assets/index.js";
import "../Styles/Hero.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="textSection">
        <div className="discount">
          <img src={discount} alt="" />
          <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
        </div>
        <div className="title">
          <h1>The Next</h1>
          <h2></h2>
          <h1 className="gradientText">Generation</h1>
          <h1> Payment Method.</h1>
        </div>
        <p>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <img src={robot} alt="" />
      <div className="details">
        <div>
          <h2>3800+</h2>
          <p className="gradientText">User Active</p>
        </div>
        <div>
          <h2>230+</h2>
          <p className="gradientText">TRUSTED BY COMPANY</p>
        </div>
        <div>
          <h2>$230M+</h2>
          <p className="gradientText">TRANSATION</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
