import React from "react";
import { logo } from "../assets";
import "../Styles/Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="contact">
        <div className="logo">
          <img src={logo} alt="" />
          <p className="comment">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="links">
          <div className="link-item">
            <p className="white">Links</p>
            <hr />
            <p className="comment">Overons</p>
            <p className="comment">Social Media</p>
            <p className="comment">Counters</p>
            <p className="comment">Contact</p>
          </div>
          {/* <==== Third Column */}
          <div className="link-item">
            <p className="white">Company </p>
            <hr />
            <p className="comment">Terms & Conditions</p>
            <p className="comment">Privacy Policy</p>
            <p className="comment">Contact</p>
          </div>
          {/* <==== fourth Column */}

          <div className="link-item">
            <p className="white"> Get in touch </p>
            <hr />
            <p className="comment">GPt-3@gmail.com</p>
            <p className="comment">085-132567</p>
            <p className="comment">info@payme.net </p>
          </div>
        </div>
      </div>
      <p className="comment">Copyright © 2021 HooBank. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
