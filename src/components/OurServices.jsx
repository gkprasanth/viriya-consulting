import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import img from "../assets/hero.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import KeyStrengths from "./KeyStrengths";

const imageSX = {
  "&:hover": {
    transform: "Scale(0.9)",
  },
};

const services1 = [
  {
    title: "Permanent Staffing",
    image: `${four}`,
    description:
      "We provide permanent staffing solutions to our clients. We have a large database of candidates who are looking for permanent jobs.",
  },
  {
    title: "Temporary Staffing",
    image: `${three}`,
    description:
      "We provide temporary staffing solutions to our clients. We have a large database of candidates who are looking for temporary jobs.",
  },

  {
    title: "Recruitment Process Outsourcing",
    image: `${six}`,
    description:
      "Our RPO method is designed to bring qualified candidates to a potential employer with minimal involvement from human resources (HR) staff. ",
  },

  // {
  //   title: "Payroll Management",
  //   image: `${img}` ,
  //   description:
  //     "We provide services for administration of the financial record of employees' salaries, wages, bonuses, net pay, and deductions.",
  // },
  // {
  //   title: "HR Consulting",
  //   image: { img },
  //   description:
  //     "We are dedicated to unlocking organizational potential through strategic talent acquisition and people-centric solutions.",
  // },
  // {
  //   title: "Executive Search",
  //   image: { img },
  //   description:
  //     "We are committed to identifying exceptional leaders who can drive your organization's success to new heights.",
  // },
];

const services2 = [
  {
    title: "Payroll Management",
    image: `${five}`,
    description:
      "We provide services for administration of the financial record of employees' salaries, wages, bonuses, net pay, and deductions.",
  },
  {
    title: "HR Consulting",
    image: `${one}`,
    description:
      "We are dedicated to unlocking organizational potential through strategic talent acquisition and people-centric solutions.",
  },
  {
    title: "Executive Search",
    image: `${two}`,
    description:
      "We are committed to identifying exceptional leaders who can drive your organization's success to new heights.",
  },
];

const ServiceCard = ({ title, description, img }) => {
  return (
    <Card
      sx={{
        width: "25%",
        "@media (max-width: 800px)": {
          width: "70%",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
        },
        "@media (max-width: 500px)": {
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
        },
        "@media (max-width: 400px)": {
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
        },
      }}
    >
      <CardMedia
        image={img}
        style={{
          height: "250px",
          padding: "3%",
          objectFit: "contain",
          transition: "all ease 0.5s",
          "@media (max-width: 500px)": {
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
          },
        }}
        component="img"
        alt="image.png"
        sx={imageSX}
      />
      <CardContent>
        <Typography
          textAlign={"center"}
          variant="h5"
          fontFamily={"roboto"}
          py={2}
          color={"#012970"}
        >
          {title}
        </Typography>
        <Typography textAlign={"justify"}>{description}</Typography>
      </CardContent>
    </Card>
  );
};

const OurServices = () => {
  return (
    <Container
      id="services"
      maxWidth={"xl"}
      height={"auto"}
      sx={{
        width: "100%",
        height: "auto",
        objectFit: "contain",
        overflowX: "hidden",
        padding: "50px",
      }}
    >
      <Stack
        direction={"column"}
        width={"100%"}
        overflowX={"hidden"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
      >
        <Typography
          fontWeight={"bold"}
          color={"#0e62a8"}
          textAlign={"center"}
          position={"relative"}
          bottom={"-30px"}
        >
          Our Services
        </Typography>
        <Typography
          fontSize={"2.5rem"}
          color={"#012970"}
          fontFamily={"Open Sans"}
          textAlign={"center"}
          fontWeight={600}
        >
          {" "}
          Here's what we offer{" "}
        </Typography>

        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"center"}
          gap={5}
          sx={{
            "@media (max-width: 800px)": {
              flexDirection: "column",
            },
          }}
        >
          {services1.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              img={item.image}
            />
          ))}
        </Stack>

        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"center"}
          gap={5}
          sx={{
            "@media (max-width: 800px)": {
              flexDirection: "column",
            },
          }}
        >
          {services2.map((item, index) => (
            <ServiceCard
              key={item.index}
              title={item.title}
              description={item.description}
              img={item.image}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default OurServices;
