import React, { useState } from 'react'
import "./Navbar.css";
import {Link} from 'react-scroll';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='navbar-main'>
      <div className="navbar-left">
        <div className="navbar-circle">

        </div>
        <div className="navbar-initial">
            <p>H</p>
        </div>
        <div className="navbar-fullname">
            Harsh 
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-contents">
            <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} className="navbar-topic">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-45} className="navbar-topic">About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-45} className="navbar-topic">Skills</Link>
            <Link activeClass='active' to='socialmedia' spy={true} smooth={true} offset={-45} className="navbar-topic">Digital Platforms</Link>
            <Link activeClass='active' to='contactme' spy={true} smooth={true} offset={-45} className="navbar-topic">Contact Me</Link>
        </div>
      </div>

    {/* Burger Menu */}
      <div className="navbar-right-b">
      <i className="fa-solid fa-bars bars" onClick={()=>setShowMenu(!showMenu)}></i>
        <div className="navbar-contents-b" style={{display: showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} className="navbar-topic-b" onClick={()=> setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-45} className="navbar-topic-b" onClick={()=> setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-45} className="navbar-topic-b" onClick={()=> setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='socialmedia' spy={true} smooth={true} offset={-45} className="navbar-topic-b" onClick={()=> setShowMenu(false)}>Digital Platforms</Link>
            <Link activeClass='active' to='contactme' spy={true} smooth={true} offset={-45} className="navbar-topic-b" onClick={()=> setShowMenu(false)}>Contact Me</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
