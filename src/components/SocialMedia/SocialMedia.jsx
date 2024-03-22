import React from 'react'
import "./SocialMedia.css"
import facebook from "../assets/facebook_logo.png"
import linkedin from "../assets/linkedin_logo.png"
import github from "../assets/Github_logo.png"

const SocialMedia = () => {
  return (
    <div className='socialmedia' id='socialmedia'>
      <div className="sm">
        {/* <div className="sm-left"> */}
          <div className="sm-boxes">
              <div className="sm-box">
              <a href="https://github.com/Harsh4971" target='blank'><img src={github} alt="" /></a>
                <a href="https://github.com/Harsh4971" target='blank'><div className="sm-link">Github</div></a>
              </div>
              <div className="sm-box">
              <a href="https://www.facebook.com/profile.php?id=100032787145475" target='blank'><img src={facebook} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100032787145475" target='blank'><div className="sm-link">Facebook</div></a>
              </div>
              <div className="sm-box">
              <a href="https://www.linkedin.com/in/harsh-0415-gupta/" target='blank'><img src={linkedin} alt="" /></a>
                <a href="https://www.linkedin.com/in/harsh-0415-gupta/" target='blank'><div className="sm-link">LinkedIn</div></a>
              </div>
          {/* </div> */}
        </div>
        <div className="sm-right">
          <div className="text-1">Connect</div>
          <div className="text-2">With <span>ME!</span></div>
        </div>
      </div>  
    </div>
  )
}

export default SocialMedia
