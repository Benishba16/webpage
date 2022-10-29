import React from 'react'
import BackgroundImage from "./assets/images/backgroundImage.png"
import Header from './components/Header'
import { Box, Stack } from "@mui/material"
import Description from './components/Description'

function New() {
  return (
    <Box
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        height: "100vh",
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
  )
}

export default New