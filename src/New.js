import React from 'react'
import BackgroundImage from "./assets/images/backgroundImage.png"
import Dotted_Image from "./assets/images/dotts.png"
import Header from './components/Header'
import { Box, Stack } from "@mui/material"
import Description from './components/Description'

function New() {
  return (
    <Box>
    <Box
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        height: "100vh",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        objectFit: "cover"
      }}
    >
      
      <Header />
      <Stack
        sx={{
          // float: "right",
          position: "absolute",
          right: "10%",
          top: "35%"
        }}
      >
          <Description />
      </Stack>
    </Box>
    </Box>
  )
}

export default New