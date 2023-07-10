import React from "react";
import logo from "../assets/about.png";

function About() {
  return (
    <div className="text-light mt-5  shadow-lg p-2 mb-5  rounded ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6  col-md-6 d-none d-md-block d-lg-block d-sm-block d-xl-block">
            <img
              src={logo}
              alt=""
              className="img-fluid "
              style={{ height: "95%" }}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-6 mt-5">
            <h3> About Me </h3>
            <h2> full-stack developer ! </h2>
            <p className="mt-4">
              My name is <span className="text-uppercase text-decoration-underline text-info fs-5">Elhaddad Abdelmounaim</span> , and I am a dedicated Full Stack Web
              Developer based Morroco, Tahanaout,marrakech. I have a passion for
              learning and creating new site webs  with fast, secure, and
              clean code. My primary expertise lies in PHP, Laravel, JavaScript,
              HTML, CSS, MySQL, React, and Tailwind CSS. I specialize in
              programming and maintaining responsive websites that provide a
              seamless user experience. I take pride in crafting dynamic and
              engaging interfaces by writing optimized and clean code. I stay up
              to date with the latest development tools and techniques to ensure
              that I deliver cutting-edge web applications. Collaboration is an
              essential aspect of my work, and I thrive in team environments. I
              enjoy working with cross-functional teams to create outstanding
              web applications.
            </p>
            <div className="my-5">
              <button type="button" className="btn btn-warning rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
