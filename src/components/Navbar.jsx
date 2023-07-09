import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/logo.png";


import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
          <a href="">
            <img src={logo} alt="logo"/>
          </a>
        </Link>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="">
              <Link to="home" spy={true} smooth={true} duration={500} onClick={closeMenu}>
                Home
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <Link to="demo" spy={true} smooth={true} duration={500} onClick={closeMenu}>
                Demo
              </Link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
