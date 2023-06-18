import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const ContactFooter = () => {
  

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  }

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <Box width={"100%"} bgcolor={"#9AC5F4"} padding={5}>
        <Stack direction={"column"} gap={1}>
          <Typography
            fontFamily={"Nunito Sans"}
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            textAlign={"center"}
            color={"#012970"}
          >
            Get in touch
          </Typography>

          <Typography textAlign={"center"}>
            Want to know how we can help you find your potential employees?
            Let's discuss!
          </Typography>
          
          
          <button  onClick={handleClick} className="my-button1">Contact</button> 
        </Stack>
      </Box>
  )
}

export default ContactFooter