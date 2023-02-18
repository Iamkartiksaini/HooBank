import React from "react";
import "../Styles/Intro.css";
import ai from "../assets/ai.png";
import people from "../assets/people.png";
import google from "../assets/google.png";
import slack from "../assets/slack.png";
import atlassian from "../assets/atlassian.png";
import dropbox from "../assets/dropbox.png";
import shopify from "../assets/shopify.png";

const Intro = () => {
  return (
    <div className="Intro" id="1">
      <div className="text">
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="input">
          <input type="text" />
          <button>Get Started</button>
        </div>
        <div className="connected">
          <img alt="" src={people} height={"10px"} width={"100px"} />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>
      <img src={ai} alt="" />
      <div className="brands">
        <img src={slack} alt="" />
        <img src={shopify} alt="" />
        <img src={atlassian} alt="" />
        <img src={dropbox} alt="" />
        <img src={google} alt="" />
      </div>
    </div>
  );
};

export default Intro;
