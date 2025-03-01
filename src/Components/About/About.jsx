import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"
const About = ({setPlayState}) => {
  return (
    <div className='about '>
        <div className="about-left">
            <img src={about_img} className='about-img' alt="" />
            <img src={play_icon} className='play-icon'onClick={()=>{setPlayState(true)}} alt="" />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomrrow's Leanders Today</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero alias at magnam excepturi possimus? Quibusdam illum sit vero ducimus quos earum dignissimos ut fugit ipsam.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero alias at magnam excepturi possimus? Quibusdam illum sit vero ducimus quos earum dignissimos ut fugit ipsam.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero alias at magnam excepturi possimus? Quibusdam illum sit vero ducimus quos earum dignissimos ut fugit ipsam.</p>
        </div>
      
    </div>
  )
}

export default About
