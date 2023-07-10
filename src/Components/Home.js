import React from "react";
import Button from '@mui/material/Button';
import About from "./About";
import logo from "../assets/logo.png"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <section className=" text-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <h3> Hello ,it's Me </h3>
              <h2> Elhaddad Abdelmounaim </h2>
              <h2> And I'm a 
                <span style={{ color: "#04BFCE" }}>
                  full-stack developer
                </span>
              </h2>
              <p className="mt-4">
              A passionate Full Stack developer  from Morroco, Tahanaout,marrakech.  
              </p>
              <div className="my-5">
                <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=212775504195" target="_blank" > <span className="ms-1" style={{cursor:"pointer"}}> <WhatsAppIcon sx={{ fontSize: 40 }} color="success" /> </span> </a>
                <a rel="noopener noreferrer" href="https://github.com/ElhaddadM" target="_blank" > <span className="ms-1" style={{cursor:"pointer"}}><GitHubIcon sx={{ fontSize: 40 }}  /></span>  </a>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/elhaddad-abdelmounaim-013494174/" target="_blank" > <span className="ms-1" style={{cursor:"pointer"}}><LinkedInIcon sx={{ fontSize: 40 }} color="primary"  /></span> </a>
                <a rel="noopener noreferrer" href="https://www.instagram.com/abdelmounaimelhaddad/?utm_source=qr" target="_blank" > <span className="ms-1" style={{cursor:"pointer"}}><InstagramIcon sx={{ fontSize: 40 }} color=""  /></span> </a>
                <a rel="noopener noreferrer" href="https://web.facebook.com/mounim.elhaddad.7?mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank" > <span className="ms-1" style={{cursor:"pointer"}}><FacebookRoundedIcon sx={{ fontSize: 40 }} color="light"  /></span> </a>
              </div>
              <div className="mt-5" ><Button variant="contained"  endIcon={<CloudDownloadTwoToneIcon />} > Download CV  </Button></div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 text-end"> 
            <img src={logo} alt="" className="img-fluid " style={{ height:"90%" }} />
             </div>
          </div>
        </div>
      </section>
      <section>
            <About />
      </section>
      <section>
            <Skills />
      </section>
      <section>
            <Project />
      </section>
      <section>
            <Contact />
      </section>

    </div>
  );
}

export default Home;
