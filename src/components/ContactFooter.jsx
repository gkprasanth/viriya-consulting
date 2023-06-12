import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ContactFooter = () => {
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
          <button className="my-button1">Contact</button>
        </Stack>
      </Box>
  )
}

export default ContactFooter