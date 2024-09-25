import { NavLink } from "react-router-dom";

import logo from '../Assets/avaSolutionslogo.png'


import '../Homepage.css'
import { useState, useEffect } from "react";


const Navbar = () => {
    const [isFocused, setIsFocused] = useState(true);
    useEffect(() => {
        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => setIsFocused(false);
    
        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);
    
        return () => {
          window.removeEventListener('focus', handleFocus);
          window.removeEventListener('blur', handleBlur);
        };
    })
    return ( 
        <div className={`navbar ${isFocused ? 'focused' : 'blurred'}`}>
            <NavLink  to="">
               
                <label className="avaBytesLabel">AVA BYTES</label>
            </NavLink>
            <div className="navBarMenu">
                <NavLink to="#home">Home </NavLink>
                <NavLink to="#about">About Us</NavLink>
                <NavLink to="#contact">Contact Us </NavLink>
            </div>
        </div>
     );
}
 
export default Navbar;