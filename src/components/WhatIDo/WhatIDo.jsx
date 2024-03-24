import React from 'react'
import "./WhatIDo.css"
import web_design from "../assets/Web_design.png"
import mern_image from "../assets/MERN_image.png"
import misce_image from "../assets/Misce_coding.png"

const WhatIDo = () => {
  return (

    //**************************Format 1*************************

    // <div className='what'>
    //   <div className="what-main-text"> 
    //     What I Do
    //   </div>
    //   <div className="what-contents">
    //     <div className="content">
    //         <div className="content-left">
    //             <h2>Web-Design</h2>
    //             <div className="what-text">
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //             </div>
    //         </div>
    //         <div className="content-right">
    //             <img src={web_design} alt="" />
    //         </div>
    //     </div>
    //     <div className="content">
    //         <div className="content-left">
    //             <h2>MERN Stack</h2>
    //             <div className="what-text">
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //             </div>
    //         </div>
    //         <div className="content-right">
    //             <img src={mern_image} alt="" />
    //         </div>
    //     </div>
    //     <div className="content">
    //         <div className="content-left">
    //             <h2>Miscellenaeous</h2>
    //             <div className="what-text">
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //             </div>
    //         </div>
    //         <div className="content-right">
    //             <img src={misce_image} alt="" />
    //         </div>
    //     </div>
    //   </div>
    // </div>

    //********************Format 2*********************

    <div className='what' id='skills'>
      <div className="what-main-text"> 
        What I Do
      </div>
      <div className="what-contents">
        <div className="content">
            <div className="content-left">
                <h2>Web-Design</h2>
                <div className="what-text">
                    Knowledge of HTML, CSS, Javascript, Material UI and other CSS libraries
                </div>
            </div>
            <div className="content-right">
                <img src={web_design} alt="" />
            </div>
        </div>
        <div className="content">
            <div className="content-left">
                <h2>MERN Stack</h2>
                <div className="what-text">
                    Complete knowledge of backend also using Node.js, MongoDb and mongoose
                </div>
            </div>
            <div className="content-right">
                <img src={mern_image} alt="" />
            </div>
        </div>
        <div className="content">
            <div className="content-left">
                <h2>Miscellenaeous</h2>
                <div className="what-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
            <div className="content-right">
                <img src={misce_image} alt="" />
            </div>
        </div>
        <div className="content">
            <div className="content-left">
                <h2>Miscellenaeous</h2>
                <div className="what-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
            <div className="content-right">
                <img src={misce_image} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhatIDo
