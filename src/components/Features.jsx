
import "./Features.css";
import video from "../videos/video-1.mp4";
import HomeSharpIcon from '@material-ui/icons/HomeSharp';



function Features() {
  return (
    <div className = "hero-container">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet" />
      <video src="https://media.istockphoto.com/videos/circle-of-happy-children-different-races-video-id1265011454" autoPlay loop muted />
      
      <h1>Welcome To Westview Junior School</h1>
      <p>Play, learn</p>
      <p>and grow together </p>

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