import React from "react";
import possibility from "../assets/possibility.png";
import "../Styles/Product.css";

function Product() {
  return (
    <div className="Product flex fdir" id="4">
      <div className="flex">
        <img className="pro-img" src={possibility} alt="" />
        <div className="pro-int flex fdir">
          <p>Request Early Access to Get Started</p>
          <h1>The possibilities are beyond your imagination</h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p>Request Early Access to Get Started</p>
        </div>
      </div>
      <div className="CTA ">
        <div className="text">
          <p>Request Early Access to Get Started</p>
          <h3>Register today & start exploring the endless possiblities.</h3>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Product;
