import React from "react";
import ecomerce from "../assets/Projects/ecomerce.png";
import Jeux from "../assets/Projects/jeux.png"
import rdv from "../assets/Projects/rdv.png"
import gestion from "../assets/Projects/gestion.png"
import library from "../assets/Projects/library.png"
function Project() {
  const projects = [
    {
      name: "Mini Projet Ecomerce",
      img: ecomerce,
    },
    {
      name: "Jeux",
      img: Jeux,
    },
    {
      name: "Prise de Rendez-vous",
      img: rdv,
    },
    {
      name: "Gestion Eau",
      img: gestion,
    },
    {
      name: "Library",
      img: library,
    },
  ];
  return (
    <div>
      <div className="text-light mt-5  shadow-lg p-2 mb-5  rounded">
        <h1 className="text-center"> PortFolio </h1>
        <div className="d-flex justify-content-center flex-wrap  mt-4 gap-4">
          {projects.map((proj, i) => {
            return (
              <div
              key={i}
                className="card  mb-3 w-50"
                style={{
                  maxWidth: "18rem",
                  border: "1px solid #00DFC0",
                  backgroundColor: "#323744",
                }}
              >
                <div className="card-header  text-center text-light">
                  <h6> {proj.name} </h6>
                  <h5 className="text-light"> </h5>
                </div>
                <div className="card-body text-light">
                  {/* <h5 className="card-title"></h5> */}
                  <p className="card-text">
                    <img src={proj.img} className="img-fluid w-100 h-100" alt="" />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
