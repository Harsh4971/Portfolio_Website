import React from 'react'
import "./Hero.css"
// import my_photo from "../assets/Harsh_Photo-wbg.png"
import my_photo_2 from "../assets/Harsh_2.png"
// import {Link} from 'react-scroll';

const Hero = () => {
  return (
    // <div className="hero-container">
        
    //     <div className="hero-above">

    //     </div>
    // </div>
    <div className="hero-main" id='hero'>
        <div className="hero-quote">
            <div className="hero-first">Let's learn, Let's thrive</div>
            <div className="hero-second">Let's grow together</div>
        </div>
        <div className="hero-above">
            <div className="hero-left">
                
            </div>
            <div className="hero-right">
                <img src={my_photo_2} alt="" />
            </div>
        </div>
        <div className="hero-below">
            <div className="hero-info">
                Hey there! I am
            </div>
            <div className="hero-name"> Harsh Gupta </div>
            <hr></hr>
            <div className="hero-text">
                I am a skilled and passionate web-developer with experience in creating visually appealing websites. I have a good understanding of design and developement.
            </div>
            {/* <button><Link activeClass='active' to='contactme' spy={true} smooth={true} offset={-45}>Contact me <i className="fa-solid fa-arrow-right"></i></Link></button> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
            
        </div>
    </div>
        
  )
}

export default Hero
