import React from "react";

function NavBar() {
  return (
   <div className="">
     <nav class="navbar navbar-expand-lg  " style={{ backgroundColor:' #20232F'  }} >
      <div class="container-fluid  " >
        <a class="navbar-brand text-light" href="#">
          Elhaddad 
        </a>
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav  " >
            <li class="nav-item">
              <a class="nav-link active  text-light" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
              About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                PortFolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  text-light">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </div>
  );
}

export default NavBar;
