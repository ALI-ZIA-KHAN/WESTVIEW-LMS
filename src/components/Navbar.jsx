import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => { /*Everytime the pages was reloaded the signup button would show up at the center therefore we used this hook so that the signp button is only rendered once*/
        showButton();
    }, []);

    window.addEventListener("resize", showButton);
    return (
       <> {/*THESE ARE FRAGMENTS REPLACED WITH DIV*/}
       <nav className="navbar">
           <div className="navbar-container">
           <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
               Westview Junior School 
               <i class="fas fa-chalkboard-teacher"></i>
           </Link>
           <div className = "menu-icon" onClick = {handleClick}>
               <i className ={click ? "fas fa-times" : "fas fa-bars"} />
           </div>
           <ul className = {click ? "nav-menu active" : "nav-menu"} >
           <li className = "nav-item">
                   <Link to = "/" className = "nav-links" onClick = {closeMobileMenu}>
                       Home
                   </Link>
               </li>

               <li className = "nav-item">
                   <Link to = "/about-us" className = "nav-links" onClick = {closeMobileMenu}>
                       About Us
                   </Link>
               </li>

               <li className = "nav-item">
                   <Link to = "/contact-us" className = "nav-links" onClick = {closeMobileMenu}>
                       Contact Us
                   </Link>
               </li>

               <li className = "nav-item">
                   <Link to = "/gallery" className = "nav-links" onClick = {closeMobileMenu}>
                       Gallery
                   </Link>
               </li>

               <li className = "nav-item">
                   <Link to = "/forum" className = "nav-links" onClick = {closeMobileMenu}>
                       Student Forum
                   </Link>
               </li>

               <li className = "nav-item">
                   <Link to = "/log-out" className = "nav-links-mobile" onClick = {closeMobileMenu}>
                       Log Out
                   </Link>
               </li>
           </ul>
           </div>
       </nav>
       </>
    )
}

export default Navbar

/*rcfe*/
