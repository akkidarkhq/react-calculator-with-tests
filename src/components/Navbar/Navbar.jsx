import React from 'react'
import './Navbar.css'
import svglogo from '../../logo.svg'

import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id='navbar'>
        <div className='logo'><Link to="/profile"> <img src={svglogo} alt="Your SVG" /></Link></div>
        <div className='link'><Link to="/login">Login</Link></div>
        <div className='link'><Link to="/signin">Signup</Link></div>
        <div className='link' id='calc'><Link to="/calc">Calculate</Link> </div>
    </div>
        
   )
}

export default  Navbar