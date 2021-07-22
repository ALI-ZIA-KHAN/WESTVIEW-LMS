
import "./Features.css";
import video from "../videos/video-1.mp4";


function Features() {
  return (
    <div className = "hero-container">
      <video src={video} autoPlay loop muted />
      <h1>EDUCATION FROM HOME</h1>
      <p>What are you waiting for?</p>
      <div className = "hero-btns">
      </div>
    </div>
  )
}

export default Features;

/*<Button 
className = "btns"
buttonStyle = "btn--outline"
buttonSize = "btn--large"
>
  GET STARTED
</Button> 

<Button 
className = "btns"
buttonStyle = "btn--primary"
buttonSize = "btn--large"
>
  ABOUT US
  <i className = "far fa-play-circle" />
</Button>*/