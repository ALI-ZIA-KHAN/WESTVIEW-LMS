import React from 'react';
import "./Intro.css"

function Intro() {
  return (

    <div>

    <section className = "intro">
    
    <div className = "video">
    <video  src = "https://media.istockphoto.com/videos/man-using-smartphone-and-desktop-working-in-home-video-id1264167505" autoPlay loop muted />
    </div>

    <div className = "content">
    <h3>Why choose us?</h3>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>  
    </section>    
    </div>

    
    
  )
}

export default Intro
