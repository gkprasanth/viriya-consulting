import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Container, TextField } from "@mui/material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import contact from "../assets/img-01.webp";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3r1k0ul",
        "template_d1rz48q",
        form.current,
        "r1GNZLJBcZrDU5fRj"
      )
      .then(
        (result) => {
          console.log(result.text);

          e.target.reset();
          alert("Message Sent, We will reach out to you shortly");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Container
        maxWidth={"xl"}
        sx={{
          bgcolor: "",
          padding: 5,
          backgroundColor: "#00c5ff"
        }}
      >
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
          }}
        >
          <img src={contact} width={"40%"} />
          <div
            className="container mt-5 "
            style={{
              width: "50%",
              padding: "50px",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          >
            <h2 className="mb-3 text-center mx-auto ">Contact Us</h2>
            <form onSubmit={sendEmail} ref={form}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="user_name"
                  id="name"
                  style={{
                    borderRadius: "20px",
                    height: "50px",
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" style={{
                }} htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  
                  style={{
                    borderRadius: "20px",
                    height: "50px",
                  }}
                  name="user_email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Enter your message here..."
                  style={{
                    borderRadius: "20px",
                    height: "100px",
                    
                  }}
                  id="message"
                  required
                />
              </div>
              <button  style={{
                margin: "auto",
                position: "relative",
                left: "35%",
                backgroundColor: '#57b846',
                border:"none",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: "1.2rem",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
                
              }} type="submit" value={"send"}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
