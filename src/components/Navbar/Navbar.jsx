import React from 'react'
import './Navbar.css'
import svglogo from '../../logo.svg'

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id='navbar'>
        <div className='logo'><Link to="/profile"> <img src={svglogo} alt="Your SVG"/></Link></div>
        <button className='link'><Link id='calclink' to="/login">Login</Link></button> 
        <button className='link'><Link id='calclink' to="/signin">Signup</Link></button> 
        <button className='link'><Link id='calclink' to="/calc">Calculate</Link></button> 
    </div>
        
   )
}

export default  Navbar