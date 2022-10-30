import { useTheme, Box, Typography, Divider, Stack } from '@mui/material'
import Dotted_Image from "../../assets/images/dotts.png"
import React from 'react'

export default function Footer() {
    const theme = useTheme();
  return (
        <Box sx={{
            height: "15vh",
            width: "250px",
            backgroundImage: `url(${Dotted_Image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        }}>
            <Stack
                width="100vw"
                height="50%"
                alignItems="center"
                justifyContent="center"
            >
                <Stack width="90vw">
                    <Divider />
                </Stack>
            </Stack>
            <Stack width="100vw" alignItems="center">
                <Typography color={theme.palette.secondary.contrastText}>© Twozo Technologies Private Limited</Typography>
            </Stack>
        </Box>
    )
}