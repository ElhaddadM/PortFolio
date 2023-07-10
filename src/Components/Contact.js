import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
function Contact() {
    const form = useRef();
const notify= () =>{
    toast.success('message sent thanks 😃', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}
    const sendEmail = (e) => {
      e.preventDefault();
      notify()
      emailjs.sendForm('service_1zd762t', 'template_m7gngj1', form.current, 'v5sxmuvhiuI3ht3Ht')
        .then((result) => {
                notify()
           e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  return (

    <div className='text-light my-5  text-center  shadow-lg p-2 mb-5  rounded ' >
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        <h1> Contact <span style={{ color:"#00DFC0" }} >Me</span> </h1>
        <div className='container ' >
       <form ref={form} className='d-flex justify-content-center flex-wrap  my-2 ' onSubmit={sendEmail } >
       <div className='row my-2 w-75' > 
            <div className='col-12 col-md-6  col-sm-12 col-lg-6 my-2'>
                <TextField id="outlined-basic" label="Full Name" name="user_name" variant="outlined"  className="w-100 text-light"  style={{ color:'red',backgroundColor:"#323744" }}/>
            </div>
            <div className='col-12 col-md-6  col-sm-12 col-lg-6 my-2'>
                <TextField id="outlined-basic" label="Email Address" name="user_email" variant="outlined"  className="w-100 text-light"  style={{ backgroundColor:"#323744" }}/>
            </div>
        </div>
        <div className='row  w-75' > 
            <div className='col-12 col-md-6  col-sm-12 col-lg-6  my-2'>
                <TextField id="outlined-basic" label="Mobile Number" variant="outlined"  className="w-100 text-light" name="user_phone"   style={{ backgroundColor:"#323744" }}/>
            </div>
            <div className='col-12 col-md-6  col-sm-12 col-lg-6 my-2 '>
                <TextField id="outlined-basic" label="Email Subject" variant="outlined" name='user_subject' className="w-100 text-light"  style={{ backgroundColor:"#323744" }}/>
            </div>
        </div>
        <div className='row  w-75' > 
            <div className='col-12 mt-2 '> 
                 <TextField  id="outlined-multiline-static" label="Your Message" name="message"  multiline rows={6} className='w-100 text-light' style={{ backgroundColor:"#323744" ,color:'red'}} />
            </div>
            <div className='col-12 my-3 '> 
            <input type="submit" value=" Send Message "  class="btn  rounded-pill h-100 text-uppercase"   style={{ backgroundColor:"#00DFC0" }} />
            </div>
            
        </div>
       </form>
       
     

         </div>
     </div>
  )
}

export default Contact