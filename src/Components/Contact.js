import React from 'react'

import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
function Contact() {
  return (
    <div className='text-light my-5  text-center  shadow-lg p-2 mb-5  rounded ' >
        <h1> Contact <span style={{ color:"#00DFC0" }} >Me</span> </h1>
        <div className='container d-flex justify-content-center flex-wrap  my-2' >
        <div className='row my-2 w-75' > 
            <div className='col-12 col-md-6  col-sm-12 col-lg-6 my-2'>
                <TextField id="outlined-basic" label="Full Name" variant="outlined"  className="w-100 text-light"  style={{ color:'red',backgroundColor:"#323744" }}/>
            </div>
            <div className='col-12 col-md-6  col-sm-12 col-lg-6 my-2'>
                <TextField id="outlined-basic" label="Email Address" variant="outlined"  className="w-100 text-light"  style={{ backgroundColor:"#323744" }}/>
            </div>
        </div>
        <div className='row  w-75' > 
            <div className='col-12 col-md-6  col-sm-12 col-lg-6  my-2'>
                <TextField id="outlined-basic" label="Mobile Number" variant="outlined"  className="w-100 text-light"  style={{ backgroundColor:"#323744" }}/>
            </div>
            <div className='col-12 col-md-6  col-sm-12 col-lg-6 my-2 '>
                <TextField id="outlined-basic" label="Email Subject" variant="outlined"  className="w-100 text-light"  style={{ backgroundColor:"#323744" }}/>
            </div>
        </div>
        <div className='row  w-75' > 
            <div className='col-12 mt-2 '> 
                 <TextField  id="outlined-multiline-static" label="Your Message" multiline rows={6} className='w-100 text-light' style={{ backgroundColor:"#323744" ,color:'red'}} />
            </div>
            <div className='col-12 mt-2 '> 
            <Fab variant="extended"  style={{ backgroundColor:"#00DFC0" }} > Send Message </Fab>
            </div>
            
        </div>
       
     

        </div>
    </div>
  )
}

export default Contact