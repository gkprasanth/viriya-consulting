import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import logo from "../assets/logo.png";

import { Link, animateScroll as scroll } from "react-scroll";
import { Link as L } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = React.useState(false);
  const [selected, setSelected] = React.useState("home");

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <Box
      sx={{
        bgcolor: color ? "#fff" : "transparent",
        transition: "all 0.5s ease",
        position: "sticky",
        top: 0,
        padding: "0.8rem",
        zIndex: 1,
        justifyContent: "center",
        boxShadow: color ? "0px 0px 10px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          width: "88%",
          mx: "auto",
          height: "8vh",
        }}
      >
        <L to={"/"}>
          <img src={logo} width={"170px"} />
        </L>

        <Stack
          justifyContent={"flex-end"}
          mr={10}
          gap={6}
          direction={"row"}
          alignItems={"center"}
        >
          <Link
            to={"home"}
            style={{ textDecoration: "none" }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Typography
              fontSize={"1rem"}
              color={selected === "home" ? "#ff7294" : "#134091"}
              sx={{ "&:hover": { color: "#ff7294", cursor: "pointer" } }}
              fontWeight={500}
              className="hover-underline-animation"
              smooth
              onClick={() => {
                setSelected("home");
              }}
            >
              Home
            </Typography>
          </Link>

          <Link
            to={"about"}
            style={{ textDecoration: "none" }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Typography
              variant="body1"
              fontSize={"1rem"}
              color={selected === "about" ? "#ff7294" : "#134091"}
              sx={{ "&:hover": { color: "#ff7294", cursor: "pointer" } }}
              fontWeight={500}
              onClick={() => {
                setSelected("about");
              }}
            >
              About
            </Typography>
          </Link>

          <Link
            to={"services"}
            style={{ textDecoration: "none" }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Typography
              variant="body1"
              fontSize={"1rem"}
              color={selected === "services" ? "#ff7294" : "#134091"}
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              fontWeight={500}
              onClick={() => {
                setSelected("services");
              }}
            >
              Our Services
            </Typography>
          </Link>

          <button className="my-button2">Contact us</button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
