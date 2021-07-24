import React from 'react';
import {ProgressBar,Button} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
// import './Quiz.css'
import './Modal.css'

function Modelgen(){

const history=useHistory();
var state =useLocation();
// console.log(state.state)


const goBack=()=>{
    history.push(
      {
        pathname:'/quiz',
       
      }
    )
  }



return(
   <>
   <div className="full-area">
    <div className="parent">

        <div className="left-bhai">
      <div className="modal-dialog dark">
        <div className="modal-content">
          <div className="modal-header dark">
            {/* <h5 className="modal-title" id="exampleModalLabel">Your Quiz Result</h5> */}

            <img height='170px' width='460px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7xDrp0hxGmwS8Q3YXXLJgaoaFWUVfhGM3g&usqp=CAU" alt="" />
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body dark">
          <ProgressBar now={state.state} label={`${state.state}%`}/> 
          <h5>Your Quiz score is :  {(state.state/100)*10}/10</h5>
          </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
            <Button variant="success" onClick={goBack}>Go Back</Button>
          </div>
        </div>
      </div>
      </div>


  {/* <div className="right-bhai">
      <img src="https://i.gifer.com/7nK2.gif" alt="" />

      </div> */}

      </div>




      <svg viewBox="0 0 1250 300">
	<path fill-opacity="0.7" d="
	M0,192
	C220,100,440,100,660,192
	C880,290,1100,290,1320,192
	L1320 500
	L0 500
	" fill="rgb(250, 33, 87)"/>
	<path fill-opacity="0.7" d="
	M0,192
	C220,100,440,100,660,192
	C880,290,1100,290,1320,192
	L1320 500
	L0 500
	" fill="rgb(255, 107, 38)"/>
	<path fill-opacity="0.7" d="
	M0,192
	C220,100,440,100,660,192
	C880,290,1100,290,1320,192
	L1320 500
	L0 500
	" fill="rgb(23, 221, 106)"/>
	<path fill-opacity="0.7" d="
	M0,192
	C220,100,440,100,660,192
	C880,290,1100,290,1320,192
	L1320 500
	L0 500
	" fill="rgb(251, 255, 35)"/>
</svg>
</div>
    </>
);

}

export default Modelgen;