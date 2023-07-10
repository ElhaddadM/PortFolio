import React from "react";
import frontEnd from "../assets/icons/front.png"
import backend from "../assets/icons/backend.png"
import other from "../assets/icons/other.png"
function Skills() {
  const skils = [
    {
      icon:  frontEnd ,
      service: "front-end",
      langue: ["HTML", "CSS", "JavaScript","React","Bootstrap","Tailwind css"],
    },
    {
      icon: backend,
      service: "Backend",
      langue: ["PHP", "Laravel", "Symfony (Basic)"],
    },
    {
      icon: other,
      service: "other",
      langue: ["Informaticien", "Installation Camera", "Bureautique"],
    },
  ];
  return (
    <div className="text-light mt-5  shadow-lg p-2 mb-5  rounded">
      <h1 className="text-center"> My Skills </h1>
      <div className="d-flex justify-content-center flex-wrap  mt-4 gap-2">
     
          {skils.map((e, i) => {
            return (
              <div class="card  mb-3 w-50" style={{ maxWidth: "18rem",border:'1px solid #00DFC0' ,backgroundColor:"#323744" }} >
                <div class="card-header  text-center">
                  <h6> <img src={e.icon} className="img-fluid" width={40} alt="" /> </h6>
                  <h5 className="text-light" > {e.service} </h5>
                </div>
                <div class="card-body text-light">
                  {/* <h5 class="card-title"></h5> */}
                  <p class="card-text">
                    <ul>
                    {
                        e.langue.map((lang,i)=>{
                            return(
                                <li key={i}> {lang} </li>
                            )
                        })
                    }
                    </ul>
                  </p>
                </div>
              </div>
            );
          })}
    
      </div>
    </div>
  );
}

export default Skills;
