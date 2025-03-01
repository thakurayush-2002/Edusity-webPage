import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
import { Link } from 'react-scroll'
import menu_icon from "../../assets/menu-icon.png"
const Navbar = () => {

const[sticky,setSticky]=useState(false);
useEffect(()=>{
  window.addEventListener("scroll",()=>{
    window.scrollY >50 ? setSticky(true) : setSticky(false);
  })
},[]);

const [mobileMenu,setMobileMenu]=useState(false);
const toggleMenu=()=>{
  mobileMenu ? setMobileMenu(false) :setMobileMenu(true)
}


  return (
    <nav className={`contenar ${sticky?"dark-nav":""}`}>
      <img className='logo' src={logo} alt="" />
      <ul className={mobileMenu ? "" :"hide-mobile-menu"}>
        <li><Link to="Hero" smooth={true} duration={500} offset={0}>Home</Link></li>
        <li> <Link to="programs" smooth={true} duration={500} offset={-260}>Program</Link></li>
        <li> <Link to="about" smooth={true} duration={500} offset={-150}>About us</Link></li>
        <li><Link to="campus" smooth={true} duration={500} offset={-260}>Campus</Link></li>
        <li><Link to="testimonials " smooth={true} duration={500} offset={-260}>Tastimonials</Link></li>
        <li><Link to="contect " smooth={true} duration={500} offset={-260}><button className='btn'>Contect us</button></Link></li>
      </ul>
      <img src={menu_icon} className='menu-icon' onClick={toggleMenu} alt="" />
    </nav>
    
  )
}

export default Navbar
