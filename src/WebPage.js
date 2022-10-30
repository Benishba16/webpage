import { Box, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Header from './components/Header';
import Description from "./components/Description"
import Dotted_Image from "./assets/images/dotts.png"

export default function WebPage() {
    const theme = useTheme();

    return (
        <React.Fragment>
        <Box
            sx={{
                // border: "2px solid red",
                width: "50vw",
                height: "85vh",
                // backgroundColor: theme.palette.secondary.main,
                backgroundImage: `linear-gradient(to bottom right, ${theme.palette.secondary.main} 50%, white 50%)`
            }}
        >
            <Box
                sx={{
                    // border: "2px solid red",
                    width: "100vw"
                }}
            >
                <Header />
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Stack spacing={3} direction="row" borderTop="7px solid #FFFFFF" borderBottom="7px solid #FFFFFF">
                    <Stack>
                        <Typography color="white" fontSize="40px" fontWeight={700}>SOMETHING</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={theme.palette.primary.main} fontSize="40px" fontWeight={700}>AWESOME</Typography>
                    </Stack>
                    <Stack>
                        <Typography fontSize="40px" fontWeight={700}>IS IN THE WORKS</Typography>
                    </Stack>
                    </Stack>
                </Stack>
                <Box sx={{
                // border: "2px solid red",
                width: "68vw",
                float: "right"
            }}>
                    <Description />
                </Box>
            </Box>
            
        </Box>
        <Box sx={{
            // border: "2px solid red",
            height: "15vh"
        }}>
            <Stack>
                <img src={Dotted_Image} alt="dotted_image" height="100%" width="250px"/>
            </Stack>
        </Box>
        </React.Fragment>
    )
}