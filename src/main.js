import { Box, Stack, Typography, TextField, useTheme, InputAdornment, Button } from "@mui/material";
import React from "react";
import LogoImage from "./assets/images/logo/logo.png"
import illustartion_image from "./assets/images/illustration.png"
import backgroundImage from "./assets/images/backgroundImage.png"

const styles = {
    text: {
        fontSize: "24px"
    },
    text1: {
        fontSize: "48px",
        fontWeight: 700
    }
}

export default function Main() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Stack position="absolute">
                <img src={backgroundImage} alt="background_image" />
            </Stack>
            <Stack border="2px solid red" p="15px" alignItems="flex-end">
                <Box>
                    <img src={LogoImage} alt='logo_image' height="82px" width="260px"/>
                </Box>
            </Stack>
            <Stack alignItems="center" p="15px">
                <Typography textTransform="uppercase" fontWeight={700} fontSize="40px">Something awesome is in the works</Typography>
            </Stack>

            <Stack alignItems="flex-end" height="50vh" border="2px solid green" p="20px">
                <Stack direction="row" alignItems="flex-start" spacing="25px">
                    <Stack border="2px solid yellow" spacing="35px">
                        <Typography color={theme.palette.secondary.contrastText} fontWeight={400} fontSize="24px">We are working on a new and exciting product that,<br/> we think you’ll really like!</Typography>
                        <Typography fontWeight={400} fontSize="18px">Coming Soon</Typography>
                        <Typography fontWeight={700} fontSize="48px">Get Notified When We Launch</Typography>
                        <Stack width="509px">
                            <TextField />
                        </Stack>
                    </Stack>
                    <Stack border="2px solid purple">
                        <img src={illustartion_image} alt="illustration_image" width="288px" height="238px"/>
                    </Stack>
                </Stack>

                {/* <Stack>
                    <Typography fontWeight={700} fontSize="48px">Get Notified When We Launch</Typography>
                    <Stack width="509px">
                        <TextField />
                    </Stack>
                </Stack> */}
            </Stack>
        </React.Fragment>
    )
}