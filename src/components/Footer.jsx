import React from 'react'
import { Link } from "react-scroll";
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                    <a href="">
                        <Link to="home" smooth={true} duration={500} >
                        Home
                        </Link>
                    </a>
                    </li>
                    <li className='nav-item'>
                    <a href="">
              <Link to="about" smooth={true} duration={500} >
                About
              </Link>
            </a>
                    </li>
                    <li className='nav-item'>
                    <a href="">
              <Link to="projects" smooth={true} offset={-50} duration={500} >
                Projects
              </Link>
            </a>
                    </li>
                    <li className='nav-item'>
                    <a href="">
              <Link to="demo" smooth={true} duration={500} >
                Demo
              </Link>
            </a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2020 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
