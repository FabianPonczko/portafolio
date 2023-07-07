import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";
import video from "./videos/video1.mp4";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="content">
        <p>Call us</p>
        <p>+54-351-8022319</p>
        <p>Roberto Fabián Ponczko</p>
        <p>Full Stack Developer</p>
        {/* <a href="#projects"> */}
          <video src={video} autoPlay loop muted />
          <Link to="projects" smooth={true} offset={-50} duration={500}>
            <button className="button">Projects</button>
          </Link>
        {/* </a> */}
      </div>
    </div>
  );
};

export default Hero;
