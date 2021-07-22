import React from 'react'
import "../../App.css";
import Features from "../Features";
import Intro from "../Intro";
import Footer from "../Footer";
import Slider from '../3D_slider';
import Navbar from "../Navbar";
import "../Button.css"



function Home() {
  return (
    <>
    <div className = "bg"></div>
    <Navbar />
    <a class="btn" href="/sign-up">
        SIGN UP
    </a>
    <Features />
    <Intro />
    <Slider />
    <Footer />
    

    </>
  );
}

export default Home;
