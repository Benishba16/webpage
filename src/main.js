import { Box, Stack, Typography, TextField, useTheme, InputAdornment, Button } from "@mui/material";
import background_Image from "./assets/images/bbbbb.png"
import React from "react";
import Header from "./components/Header";

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
            {/* <Box
                sx={{
                    backgroundImage: `url(${background_Image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "0px 0px ",
                    width:"100vw"
                }}
            >
                <Stack>
                    <Header />
                </Stack>

                <Stack>
                <Stack display="inline" border="2px solid red" height="100%">

                <Stack>
                        <Typography style={styles.text} color={theme.palette.secondary.contrastText}>
                            We are working on a new and exciting product that, 
                            <br/>
                            we think you’ll really like!
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Typography pb="10px" borderBottom="1px solid">Coming</Typography>
                        <Typography>Soon</Typography>
                    </Stack>
                    <Stack>
                        <Typography style={styles.text1} color={theme.palette.secondary.main}>
                            Get Notified When We Launch
                        </Typography>
                    </Stack>
                    <Stack width="509px">
                        <TextField
                            placeholder="Enter your email address "
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Stack mr="-10px">
                                            <Button style={{boxShadow: "none"}} variant="contained">GET STARTED</Button>
                                        </Stack>
                                    </InputAdornment>
                            )}}
                        />
                    </Stack>

                </Stack>
                </Stack>
            </Box> */}
        </React.Fragment>
    )
}