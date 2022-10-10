import React from 'react'
import { Box, Stack } from '@mui/material'
import LogoImage from "../../assets/images/logo/logo.png"

export default function Header() {
  return (
    <React.Fragment>
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            pt={"45px"}
            mr={"45px"}
        >
            <Box>
                <img src={LogoImage} alt='logo_image' height="82px" width="260px"/>
            </Box>
        </Stack>
    </React.Fragment>
  )
}