import React from "react";
import { Link } from 'react-router-dom';
function NavBar() {
  return (

     <nav className="navbar navbar-expand-lg mt-2 shadow-lg p-2 mb-5  rounded" style={{ backgroundColor:' #20232F'  }} >
      <div className="container-fluid   " >
        <Link className="navbar-brand text-light" to="/">
          Elhaddad 
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " style={{ marginLeft:"30%" }} id="navbarNav">
          <ul className="navbar-nav  " >
            <li className="nav-item ">
              <Link className="nav-link   text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="about">
              About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="PortFolio">
                PortFolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  );
}

export default NavBar;
