import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutMe from '../components/AboutMe/AboutMe'
import WhatIDo from '../components/WhatIDo/WhatIDo'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import ContactMe from '../components/ContactMe/ContactMe'
import Footer from '../components/Footer/Footer'

const Main = () => {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <WhatIDo/>
      <SocialMedia/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Main
