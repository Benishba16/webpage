import React from 'react';
import { Box, Stack, useTheme } from '@mui/material';
import Header from './components/Header';
import Description from "./components/Description";
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Ball from "./assets/images/ballwithback.jpg";
import Triangle1 from "./assets/images/triangle1.png";
import Triangle2 from "./assets/images/triangle2.png";
import Design from "./assets/images/design.png";
import Ring from "./assets/images/Ring.png";
import Lines from "./assets/images/lines.png";

export default function WebPage() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Box
                sx={{
                    // border: "2px solid red",
                    width: "50vw",
                    height: "85vh",
                    backgroundImage: `linear-gradient(to bottom right, ${theme.palette.secondary.main} 50%, white 50%)`,
                    position: "relative"
                }}
            >
                <Stack position="absolute" right="15%" top="5%">
                    <img src={Ball} alt="ball" height="63px" width="63px" />
                </Stack>
                <Stack position="absolute" right="75%" top="10%">
                    <img src={Triangle1} alt="triangle1" height="80px" width="80px"/>
                </Stack>
                <Stack  position="absolute" right="65%" top="45%">
                    <img src={Triangle2} alt="triangle2" height="80px" width="80px"/>
                </Stack>
                <Stack position="absolute" left="4%" top="32%">
                    <img src={Ring} alt="ring" height="28px" width="28px" />
                </Stack>
                <Stack position="absolute" top="40%">
                    <img src={Lines} alt="lines" height="40px" width="40px"/>
                </Stack>
                <Stack position="absolute" top="70%">
                    <img src={Design} alt="design"  />
                </Stack>

                <Box sx={ {width: "100vw" }}>
                    <Header />
                    <MainContent />
                    
                    <Box sx={{ width: "70vw", float: "right" }}>
                        <Description />
                    </Box>
                </Box>
            </Box>
            
            <Footer />

        </React.Fragment>
    )
}