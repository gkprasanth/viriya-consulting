import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Container, TextField } from '@mui/material';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0fkd61h', 'template_z8v430u', form.current, 'r1GNZLJBcZrDU5fRj')
      .then((result) => {
        console.log(result.text);
        
      }, (error) => {
        console.log(error.text);
      });
      e.target.value = "";
  };
  return (
    <>
      <Container maxWidth={"xl"} 
        sx={{
          bgcolor: "",
          padding: 5
        }}
        
      >
      <div className="container mt-5 bg-light "   
      
        style={{
          width: "50%",
          padding: "50px",
          borderRadius: '10px',

          
        }}
      >
        <h2 className="mb-3    ">Contact Us</h2>
        <form onSubmit={sendEmail} ref={form} >
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" name="user_name" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" name="user_email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" name='message' id="message" required />
          </div>
          <button className="btn btn-danger" type="submit" value={'send'} >
            Send Message
          </button>
        </form>
      </div>
      </Container>
    </>

  );


};

export default Contact;
