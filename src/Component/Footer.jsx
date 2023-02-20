import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <h1>
        Do you want to step in to the <br /> future before others
      </h1>
      <button>Request Early Access</button>
      <div className="contact">
        <div className="logo">
          <h1>GPT-3</h1>
          <p>
            Crechterwoord K12 182 DK Alknjkcb,
            <br /> All Rights Reserved
          </p>
        </div>
        <div className="links">
          <div className="link-item">
            <p>Links</p>
            <hr />
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          {/* <==== Third Column */}
          <div className="link-item">
            <p>Company </p>
            <hr />
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          {/* <==== fourth Column */}

          <div className="link-item">
            <p> Get in touch </p>
            <hr />
            <p>GPt-3@gmail.com</p>
            <p>085-132567</p>
            <p>info@payme.net </p>
          </div>
        </div>
      </div>
      <p>© 2021 GPT-3. All rights reserved.</p>
    </div>
  );
};

export default Footer;
