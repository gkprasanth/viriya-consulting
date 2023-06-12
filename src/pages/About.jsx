import { Container, CssBaseline, Stack, Typography } from "@mui/material";
import React from "react";

import img from "../assets/dylan-gillis-KdeqA3aTnBY-unsplash.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import abt1 from "../assets/abt1.png";

const About = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      width={"100vh"}
      height={"auto"}
      id="about"
      sx={{
        bgcolor: "#eff7fe",
        maxWidth: "xl",
        padding: "5rem",
      }}
    >
      <CssBaseline />
      <Stack direction={"column"}
        sx={{
          "@media (max-width: 1200px)": {
            mb: "30px"
          }
        }}
      >
        <Typography
          variant="h2"
          fontWeight={"bold"}
          color={"#012970"}
          textAlign={"center"}
        >
          About Us
        </Typography>
        <div
          style={{
            width: "90px",
            height: "3px",
            backgroundColor: "#569050",
            alignSelf: "center",

            "@media (max-width: 900px)": {
              height: "4px"
            }
          }}
        />
      </Stack>

      <Fade>
        <Stack
          direction={"row"}
          padding={5}
          gap={5}
          width={"100%"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 800px)": {
              flexDirection: "column-reverse",
            },
            "@media (max-width: 900px)": {
              flexDirection: "column-reverse",
            },
            "@media (max-width: 1200px)": {
              flexDirection: "column-reverse",
            },
          }}
        >
          <Stack direction={"column"} gap={3} width={"100%"}>
            <Typography
              textAlign={"justify"}
              sx={{
                fontSize: "1.3rem",
                "@media (max-width: 600px)": {
                  width: "100vw",
                  fontSize: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                },
                "@media (max-width: 800px)": {
                  width: "97%",
                  fontSize: "1.1rem",
                  justifyContent: "center",
                  alignItems: "center",
                },
                "@media (max-width: 400px)": {
                  width: "100vw",
                  fontSize: "1.1rem",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  right: "70px",
                },
              }}
            >
              1 year ago, Viriya Enterprises emerged as a promising startup in
              the realm of organized recruitment. Since then, we have embarked
              on a remarkable journey, successfully shaping the careers of over
              100 talented individuals. At Viriya Enterprises, we take immense
              pride in our accomplishments and the positive impact we have made
              on both job seekers and employers.
            </Typography>

            <Typography
              textAlign={"justify"}
              sx={{
                fontSize: "1.3rem",
                "@media (max-width: 600px)": {
                  width: "100vw",
                  fontSize: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                },
                "@media (max-width: 800px)": {
                  width: "100%",
                  fontSize: "1.1rem",
                  justifyContent: "center",
                  alignItems: "center",
                },

                "@media (max-width: 400px)": {
                  width: "100%",
                  fontSize: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                  position: "relative",
                  right: "70px",
                },
              }}
            >
              Committed to excellence, we offer a comprehensive range of
              services to our valued clients. Our expertise encompasses not only
              recruiting and staffing but also meticulous screening processes
              that ensure we connect you with the most qualified candidates.
              With a widespread presence across India, we cater to the diverse
              recruitment needs of companies spanning various industries and
              sectors.
            </Typography>

            <Link to="/about-us">
              <button className="about-btn">Learn More</button>
            </Link>
          </Stack>

          <img
            src={abt1}
            width={"550px"}

            style={{            
              position: "relative",
              bottom: "50px",
            }}
          />
        </Stack>
      </Fade>
    </Container>
  );
};

export default About;
