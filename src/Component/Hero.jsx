import { useEffect } from "react";
import { discount, robot } from "../assets/index.js";
import "../Styles/Hero.scss";
import { gsap } from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    let timeline = gsap.timeline();
    timeline.to(".ball", { filter: "invert" }).to(".ball", {
      transformOrigin: "50% 50%",
      xPercent: -50,
      yPercent: -50,
      yoyo: true,
      motionPath: {
        path: "#path",
        // autoRotate: true,
        align: "#path",
        alignOrigin: [0.5, 0.5],
        start: 0.1,
        end: 0.9,
      },
      keyframes: {
        "0%": { scale: 1 },
        "33%": { zIndex: -1 },
        "50%": { scale: 0.7, backgroundColor: "cyan" }, // finetune with individual eases
        "100%": {
          zIndex: 10,
          boxshadow:
            " 17px -19px 15px 33px#557dff inset, 88px -82px 35px -81px #119cddb4 inset",
        },
        easeEach: "power1.out",
      },
      duration: 10,
      repeat: -1,
      yoyo: true,
    });
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
    gsap.fromTo(
      ".discount",
      {
        opacity: 0,
        x: 500,
      },
      {
        delay: 0.7,
        ease: "back",
        opacity: 1,
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
        <p className="Ex">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="heroImgWrapper">
        <h1 className="ball"></h1>
        <svg
          width="100%"
          height="100%"
          viewBox="-100 150 557 190"
          id="svg"
          fill="none"
        >
          <path
            id="path"
            d="M261 0.5C266.5 77 127.462 36.6013 21 83C-85.4618 129.399 265.236 161.737 362.545 189.858C459.854 217.978 225.108 263.265 73.2192 346.923C-78.6701 430.581 190.648 496 190.648 496"
            stroke="white"
            strokeWidth="5"
          />
        </svg>
        <img className="HeroImg" src={robot} alt="" />
      </div>
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
