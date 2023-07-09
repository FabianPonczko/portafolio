import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";
import video from "./videos/video.mp4";
import LinkedinLogo from './images/linkedinLogo.png'
import HotmailLogo from './images/hotmailLogo.png'
import GithubLogo from './images/githubLogo.png'

const Hero = () => {

  return (
    <div className="hero" id="home">
      <div className="content">
        <p>Contact us</p>
        <div className="logos">
          <a href="https://www.linkedin.com/in/roberto-fabian-ponczko-62a651232/" target="_blank">
            <img src={LinkedinLogo} alt="linkedin" width={48} />
          </a>
          <a href="https://github.com/FabianPonczko?tab=repositories" target="_blank">
            <img src={GithubLogo} alt="linkedin" width={48} />
          </a>
          <a href="mailto:fabianponczko@live.con.ar">
            <img src={HotmailLogo} alt="linkedin" width={48} />
          </a>
        </div>
        {/* <p>+54-351-8022319</p> */}
        {/* <p>https://www.linkedin.com/in/roberto-fabian-ponczko-62a651232/</p> */}
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
