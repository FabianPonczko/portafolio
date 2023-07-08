import React,{useState}from 'react'
import user3 from './images/user3.jpeg'
import foxx from './images/foxx.png'
import CryptoData from './images/CryptoDataRbg.png'
import './Projects.css'
import { Link } from 'react-scroll'


const Projects = () => {

    const [hover,setHover]= useState(false)

    const handleHover =(cartName)=>{
       setHover(cartName)
    }
    const linkSite =(siteRef)=>{
        window.open(siteRef,"_blank")
    }

    return (
        <div className='testimonials' id='projects'>
            <div className='container'>
                <h2>Projectos</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'  onMouseEnter ={()=>{handleHover("card1_on")}} onMouseLeave={()=>{handleHover(false)}} onClick={()=>{linkSite("https://foxxcomputacion.netlify.app/")}}>
                        {hover ==="card1_on"?
                        (<div className='data-hover' >
                            <div className='card-text'>
                                <p>Tecnologias Utilizadas</p>
                                <p>Html - Css - Sass - Javascript</p>
                            </div>
                        
                        </div>):
                        null}
                        <p>E-commerce</p>
                        <img src={foxx} alt='foxx' width={500}/>
                        {/* <p>It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!</p>
                        <p><span>Johnson.M.J.</span></p> */}
                    </div>
                    <div className='card' onMouseEnter ={()=>{handleHover("card2_on")}} onMouseLeave={()=>{handleHover(false)}} onClick={()=>{linkSite("https://foxxcomputacion.netlify.app/")}}>
                    {hover ==="card2_on"?
                        (<div className='data-hover' >
                            <div className='card-text'>
                                <p>Tecnologias Utilizadas</p>
                                <p>Html - Css - React Native</p>
                            </div>
                        
                            </div>):
                        null}
                        <p>Crypto Data </p>
                        <img src={CryptoData} alt="CryptoData" width={200}/>
                        {/* <img src={user2} alt='user1'/>
                        <p>In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p>
                        <p><span>Carol Harper</span></p>
                        <p>Director at Risktec Solutions Ltd</p> */}
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Managing Director of BPW Global</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
