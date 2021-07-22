import React from 'react'
import {Link} from "react-router-dom";

function Menu(props) {
  return (
    <div>
      <li className = "nav-item">
        <Link to = {props.path} className = "nav-links" onClick = {props.action}>
            {props.name}
        </Link>
      </li>
    </div>
  )
}

export {Menu};
