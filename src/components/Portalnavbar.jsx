import React from 'react';
import './dashboard.css';

function Portalnavbar(props){


    return (

    <>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-class">
  <div className="container-fluid">


  <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <span className="navbar-toggler-icon"></span>
</button>



    <a className="navbar-brand fw-bold text-uppercase me-auto" href="#">{props.status} PORTAL</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
         
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success " type="submit">Search <i class="bi bi-person-circle"></i></button>
       
      </form>
    </div>
  </div>
</nav>


    </>
)
}


export default Portalnavbar;
