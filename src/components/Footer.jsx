import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <><Box
    component="footer"
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      p: 6,
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We are a company that offers comprehensive hiring solutions to our clients.          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            123 Main Street, Anytown, USA
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: info@example.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: +1 234 567 8901
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}  >
          <Typography variant="h6" color="text.primary" gutterBottom>
            Follow Us
          </Typography>
          
          <Link href="https://www.facebook.com/" color="inherit" style={{
            marginRight: "15px"
          }} >
            <AiOutlineLinkedin/>
          </Link>
          <Link
            href="https://www.instagram.com/"
            color="inherit"
            sx={{ pl: 1, pr: 1 }}
            style={{
              marginRight: "15px"
            }}
          >
           <AiOutlineFacebook/>
          </Link>
          <Link href="https://www.twitter.com/" color="inherit" style={{
            marginRight: "15px"
          }} >
          <FiTwitter/>
          </Link>
          
        </Grid>
      </Grid>
      <Box mt={5}>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            talentlinks.in
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Container>
  </Box></>
  );
};

export default Footer;
