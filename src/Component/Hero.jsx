import { useLayoutEffect } from "react";
import { discount, robot } from "../assets/index.js";
import "../Styles/Hero.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const x = gsap.fromTo(
      "p",
      {
        x: 100,
      },
      {
        ease: "elastic",
        x: 0,
      }
    );
    gsap.to("p", {
      ease: "elastic",
      x: 0,
    });

    x.kill();
    gsap.set(".details", {
      y: 100,
      opacity: 0,
    });

    gsap.to(".details", {
      scrollTrigger: {
        trigger: ".details",
        start: "top bottom",
        toggleActions: "restart none none reverse",
        end: "bottom bottom",
      },
      opacity: 1,
      y: 0,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".details",
        start: "top bottom",
        end: "+=500",
        toggleActions: "play none none reverse",
      },
    });
    tl.fromTo(
      ".Ad p,.Ad h1,.Ad span ,.Ad button",
      {
        x: 100,
        opacity: 0,
      },
      {
        delay: 0.2,
        stagger: 0.05,
        ease: "back",
        x: 0,
        opacity: 1,
      }
    );
    const pop = gsap.timeline({
      scrollTrigger: {
        trigger: ".get-started",
        start: "-=400 center",
        end: "+=100 bottom",
        toggleActions: "restart none none reverse",
        ease: "elastic",
      },
    });
    pop.fromTo(
      ".get-started",
      {
        y: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <div className="Hero">
      <div className="textSection">
        <div className="discount">
          <img src={discount} alt="" />
          <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
        </div>
        <div className="title">
          <h1>The Next</h1>
          <h2 className="lightUp"></h2>
          <h1 className="gradientText">Generation</h1>
          <h1> Payment Method.</h1>
        </div>
        <p>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <img className="HeroImg" src={robot} alt="" />
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
