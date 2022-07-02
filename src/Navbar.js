import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';
import { AiFillCaretDown } from "react-icons/ai";
import { SiAnaconda } from "react-icons/si";

function Navbar(){
  
    const[showMenu, setMenu]=useState(true);
    const[showDropMenu, setDropMenu]=useState(true);

    return (
        <>
    <div className="header">
        <div className="logoimgcontainer">
        <Link to='/'>
           <SiAnaconda className="logoimg"/> 
           {/*  <img src={logo} alt="logo" className="logoimg"/> */}
           </Link>
        </div>
    
       <div className="header-right">
        <ul className={showMenu? "menu-disable": "menu-enable"}>
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li  className="drop" onClick={()=>setDropMenu(!showDropMenu)}>
        <Link to="/project">Project</Link>
        <AiFillCaretDown className="drop-icon"/>
        <ul className={showDropMenu? "drop-disable": "dropdown"}>
            <li><Link to="/reactjs">Reactjs</Link> </li>
            <li><Link to="/bootstrap">Bootstrap</Link> </li>
        </ul>   
        </li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="burger" onClick={()=>setMenu(!showMenu)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    </div>
  
        </div>
      
        </>
    );
}

export default Navbar;