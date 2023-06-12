import React from "react";
import "../App.css";
import hero from "../assets/hero.jpg";
import { Stack, Typography } from "@mui/material";
import About from "./About";
import OurServices from "../components/OurServices";
import h1 from "../assets/h1.png";
import { Fade } from "react-reveal";
import ContactFooter from "../components/ContactFooter";
const Home = () => {
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
          <Fade left duration={1000}>
            <Typography
              variant="caption"
              sx={{
                fontSize: "3.5rem",
                fontFamily: "Nunito Sans",
                fontWeight: "900",
              }}
              color={"#012970"}
            >
              Viriya Enterprises
            </Typography>
          </Fade>

          <Fade right duration={1500}>
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
          <Fade right duration={2000}>
            <button className="my-button">About Us</button>
          </Fade>
        </Stack>
        <Fade right duration={3000}>
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

      
    </>
  );
};

export default Home;
