import React from "react";
import "../App.css";


import { Stack, Typography } from "@mui/material";
import About from "./About";
import OurServices from "../components/OurServices";
import h1 from "../assets/h1.png";
import { Fade } from "react-reveal";
import ContactFooter from "../components/ContactFooter";




const Home = () => {

  function scroll(){
  const height = window.innerHeight;
  const vhPixels = height * 1
  window.scrollBy(0, vhPixels);
  }


  return (
    <>
      <Stack
        direction={"row"}
        height={"90vh"}
        width={"88%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mx={"auto"}
        id="home"
        sx={{
          bgcolor: "transparent",
        }}
      >
        <Stack
          direction={"column"}
          width={"50%"}
          justifyContent={"center"}
          p={5}
          gap={2}
        >
          <Fade left duration={500}>
            <Typography
              variant="caption"
              sx={{
                fontSize: "3.5rem",
                fontFamily: "Nunito Sans",
                fontWeight: "900",
              }}
              color={"#012970"}
            >
              Talentlink Enterprises
            </Typography>
          </Fade>

          <Fade right duration={1000}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "2rem",
                fontFamily: "Nunito Sans",
              }}
            >
              Expert Recruitment Consultants at Your Service
            </Typography>
          </Fade>
          <Fade right duration={1000}>
            <button className="my-button"  onClick={scroll} >
            
              About Us
              
              </button>
          </Fade>
        </Stack>
        <Fade right duration={2000}>
          <img
            src={h1}
            alt="hero.png"
            style={{
              objectFit: "contain",
              boxSizing: "border-box",
              width: "45%",
            }}
          />
        </Fade>
      </Stack>
      <About />
      <OurServices />
      <ContactFooter/>
      
    </>
  );
};

export default Home;
