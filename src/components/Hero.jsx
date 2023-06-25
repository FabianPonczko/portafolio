import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <p>Call us</p>
                <p>+54-351-8022319</p>
                <p>Roberto Fabián Ponczko</p>
                <p>Full Stack Developer</p>
                <a href="#projects">
                <button href='#projects' className='button'>Projects
                </button>
                </a>
            </div>
        </div>
    )
}

export default Hero
