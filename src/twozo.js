import React from "react";
import { Box, Button, Divider, InputAdornment, Stack, TextField, Typography, useTheme } from "@mui/material";
import BackgroungImage from "./assets/images/backgroundImage.png";
import IllustrationImage from "./assets/images/illustration.png";
import DottedImage from "./assets/images/dotts.png";
import Header from "./components/Header";
import DaysCalculate from "./components/DaysCalculate";

const styles = {
    text: {
        fontSize: "24px"
    },
    text1: {
        fontSize: "48px",
        fontWeight: 700
    }
}

export default function Twozo() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Box
                position="absolute"
                left="1150px"
                top="280px"
            >
                <img src={IllustrationImage} alt="illustration_image" width="280px" height="260px"/>
            </Box>
            <Box
                sx={{
                    backgroundImage: `url(${BackgroungImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: "85vw",
                }}
            >
                <Stack width="95vw">
                    <Header />
                </Stack>
                <Stack height="80vh" alignItems="center" mt="250px" >
                <Stack 
                    spacing="35px"
                    width="50vw"
                    top="350px"
                    ml="500px"
                >
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
            <Box
                sx={{
                    backgroundImage: `url(${DottedImage})`,
                    width:"280px" ,
                    height:"100px",
                    position:"absolute",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"    
                    }}
                >
                    <Stack width="85vw" left="100px" top="30px" position="absolute">
                        <Divider />
                    </Stack>
                    <Stack color={theme.palette.secondary.contrastText} top="50px" left="650px" position="absolute"  width="300px">
                        <Typography>
                            © Twozo Technologies Private Limited
                        </Typography>
                    </Stack>
            </Box>
        </Box>
            
            
        </React.Fragment>
    )
}