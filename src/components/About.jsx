import React from 'react'
import john from './images/john-doe.png'
import fabian from './images/fabianbg1.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={fabian} alt='fabian foto' width={400} />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Soy un apasionado Full Stack Developer especializado en el stack MERN (MongoDB, Express.js, React.js y Node.js). Tengo amplia experiencia en el desarrollo de aplicaciones web y móviles, así como en la creación de API RESTful y la implementación de bases de datos NoSQL. 
                    </p>
                    <p>Lenguajes de programación: JavaScript, HTML, CSS Frontend: React.js, Redux, HTML5, CSS3 Backend: Node.js, Express.js Bases de datos: MongoDB, Mongoose Herramientas y tecnologías adicionales: Git, RESTful APIs, JSON, JWT, Webpack, Babel</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
