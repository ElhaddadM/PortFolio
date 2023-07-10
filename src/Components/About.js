import React from 'react'
import logo from "../assets/about.png"



function About() {
  return (
    <div className='text-light mt-5  shadow-lg p-2 mb-5  rounded '>
         <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6  col-md-6 d-none d-md-block d-lg-block d-sm-block d-xl-block">
            <img src={logo} alt="" className="img-fluid " style={{ height:"95%" }} />
             
            </div>
            <div className="col-12 col-sm-6 col-md-6 mt-5"> 
            <h3> About Me </h3>
              <h2> full-stack developer ! </h2>
              <p className="mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                vero debitis autem veritatis ut, provident minus quae expedita
                culpa ipsam!
              </p>
              <div className="my-5">
              <button type="button" className="btn btn-warning rounded">Read More</button>
              </div>
             </div>
          </div>
        </div>
    </div>
  )
}

export default About