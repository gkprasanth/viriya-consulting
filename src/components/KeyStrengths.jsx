import React, { useState } from "react";
import { Container, Typography, Stack, CssBaseline } from "@mui/material";

import img from "../assets/images.png";

const str = [
  {
    title: "Quality over Quantity",
    text: "Quality of candidates we supply has always been our core asset. We believe in quality over quantity.",
  },
  {
    title: "Turn Around Time",
    text: "Our less TAT makes our delivery stand apart in the industry. Usually it is 2 hours.",
  },
  {
    title: "Client oriented approach",
    text: "We listen to our clients first. Understand their need state and strive to fill the gaps effectively.",
  },
  {
    title: "Less is more",
    text: "We work with specific number of clients in order toachieve right goals at right time. We are not that start up who neglects your requirement to prioritize others.",
  },
];

const KeyStrengths = () => {
  return (
    <Container
      maxWidth={"false"}
      disableGutters
      sx={{
        padding: 5,
      }}
    >
      <CssBaseline />
      <Typography
        fontSize={"1.7rem"}
        fontFamily={"sans-serif"}
        fontWeight={"bold"}
        color={"#012970"}
        ml={4}
        mb={-4}
      >
        Our Key Strengths
      </Typography>
      <Stack
        direction={"row-reverse"}
        padding={4}
        justifyContent={"center"}
        alignItems={"center"}
        gap={20}
      >
        <img
          src={img}
          style={{
            width: "40%",
          }}
        />

        <ul className="list">
          {str.map((item) => (
            <li
              className="list-li"
              style={{
                padding: "10px",
              }}
            >
              <Typography
                fontSize={"1.3rem"}
                fontWeight={500}
                textAlign={"justify"}
              >
                {item.title}
              </Typography>
              <Typography fontSize={"1.1rem"} color={""} textAlign={"justify"}>
                {item.text}
              </Typography>
            </li>
          ))}
        </ul>
      </Stack>
    </Container>
  );
};

export default KeyStrengths;
