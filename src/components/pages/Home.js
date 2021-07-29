import React from 'react'
import "../../App.css";
import Features from "../Features";
import Intro from "../Intro";
import Footer from "../Footer";
import Slider from '../3D_slider';
import Navbar from "../Navbar";
import "../Button.css";
import "../Navbar.css";
import {Link} from "react-router-dom";
import WhyUs from "../WhyUs";



function Home() {
  const styling = {
    webkitBordeRadius: "20px",
    mozBorderRadius: "20px",
    borderRadius: "6px",
    color: "#0F9E94",
    fontFamily: "Bebas Neue, cursive",
    fontWeight:"bold",
    fontSize: "20px",
    padding: "15px",
    /*backgroundColor:" #0F9E94",*/
    backgroundColor: "transparent",
    border: "solid #FFBE0F 5px",
    textDecoration: "none",
    display: "inline-block",
    cursor:" pointer",
    textAlign: "center",
    left:"1350px",
    position:"absolute",
    top:"30px",
    zIndex: "1",
  }
  return (
    <>
    
    <div className = "bg"></div>
    
    <Navbar />
    <a className ="btn" href="/login" style = {styling}>
        SIGN UP
    </a>
    <Link className = "banner" >WESTVIEW JUNIOR SCHOOL </Link>
    <Features />
    <WhyUs />
    <Intro />
    <Slider />
    <Footer />
    

    </>
  );
}

export default Home;
