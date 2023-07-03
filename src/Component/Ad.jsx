import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import "../Styles/Ad.scss";
import {
  star,
  people01,
  people02,
  people03,
  shield,
  arrowUp,
  apple,
  google,
  bill,
  card,
  quotes,
  binance,
  coinbase,
  airbnb,
  dropbox,
} from "../assets";
import { gsap } from "gsap";
const Ad = () => {
  const feedCard = [
    {
      text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      at: "Founder & Leader",
      img: people01,
    },
    {
      text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      at: "Founder & Leader",
      img: people02,
    },
    {
      text: "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      at: "Founder & Leader",
      img: people03,
    },
  ];


  return (
    <>
      <div className="Ad white">
        <div className="business">
          <h1>You do the business, we’ll handle the money.</h1>
          <p className="comment">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button>Get Started</button>
        </div>
        <div className="stats">
          <div className="item">
            <span style={{ backgroundImage: `url("${star}")` }} alt="icon" />
            <div className="text">
              <p className="white">Rewards</p>
              <p className="comment">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
          <div className="item">
            <span style={{ backgroundImage: `url("${shield} ")` }} alt="icon" />
            <div className="text">
              <p className="white">100% Secured</p>
              <p className="comment">
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </div>
          <div className="item">
            <span
              style={{ backgroundImage: `url("${arrowUp}  ")` }}
              alt="icon"
            />
            <div className="text">
              <p className="white">Balance Transfer</p>
              <p className="comment">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="billing">
        <span
          className="mainImg"
          style={{ backgroundImage: `url("${bill}")` }}
          alt="icon"
        />
        <div className="billing-text">
          <h1 className="white">Easily control your billing & invoicing. </h1>
          <p className="comment">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="stores">
            <img src={apple} alt="icon" />
            <img src={google} alt="icon" />
          </div>
        </div>
      </div>
      <div className="dealing">
        <div className="business">
          <h1 className="white">Find a better card deal in few easy steps.</h1>
          <p className="comment">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button>Get Started</button>
        </div>
        <span
          className="mainImg"
          style={{ backgroundImage: `url("${card}")` }}
          alt="icon"
        />
      </div>
      <div className="feed">
        <h1 className="white">What people are saying about us</h1>
        <p className="comment">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="card-feed">
        {feedCard.map((value, index) => {
          return (
            <div className="card" key={`card-${index}`}>
              <img src={quotes} alt="" />
              <p className="comment">{value.text}</p>
              <div className="profile">
                <span style={{ backgroundImage: `url("${value.img}")` }}></span>
                <div className="text">
                  <h4 className="white">{value.name}</h4>
                  <p className="comment">{value.at}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="brands">
        <img src={airbnb} alt="" />
        <img src={binance} alt="" />
        <img src={coinbase} alt="" />
        <img src={dropbox} alt="" />
      </div>
      <div className="get-started">
        <span>
          <h1 className="white">Let’s try our service now!</h1>
          <p className="comment">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </span>
        <button>Get Started</button>
      </div>
    </>
  );
};

export default Ad;
