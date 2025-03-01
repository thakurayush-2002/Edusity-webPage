import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contects from './Components/Contects/Contects.jsx'
import Footer from './Components/Footer/Footer.jsx'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx'

const App = () => {

const[playState,setPlayState]=useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="contenar">
      <Title  subTitle="Our PROGRAM" title="What We Offer"/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title  subTitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title  subTitle="TESTIMONIALS" title="What Student Says"/>
      <Testimonials/>
      <Title  subTitle="Contect Us" title="Get in Touch"/>
      <Contects/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState}  setPlayState={setPlayState}/>
    </div>
  )
}

export default App
