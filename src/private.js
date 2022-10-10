// import { Box } from "@mui/material";
import React from "react";
import LogoImage from "./images/TwozoLogo.jpg"
// import DottedImage from "./images/dotted.jpg"
import { Stack, Box, Typography, TextField, Button, Divider } from "@mui/material"
import Background from "./images/wideback.png"
import Header from "./components/Header";
import Content from "./components/Content";
import DaysCalculate from "./components/DaysCalculate";
import Highlight from "./components/Highlight";
import BallImage from "./images/ballwithback.jpg"
import Triangle1Image from "./images/triangle1.jpg"
import RingImage from "./images/ring.png"
import TwoLines from "./images/twolines.png"
import Triangle2Image from "./images/triangle2.png"
import DesignImage from "./images/design.png"
import Dotted from "./images/dotted.jpg"

export default function Twozo(props) {

    return (
        <React.Fragment>
            {/* <Box
                style={{
                    height: "100vh",
                    width: "55.5vw",
                    backgroundColor: "#272937",
                    backgroundImage: "linear-gradient(to bottom right, #272937 50%, #fff 30%)"
                }}      
            >
                <Box
                    position="absolute"
                    top="55px"
                    left="650px"
                    borderRadius="100%"
                >
                    <img src={BallImage} alt="ball_image" height="63px" width="63px"/>
                </Box>
                <Box
                    position="absolute"
                    top="120px"
                    left="175px"
                >
                    <img src={Triangle1Image} alt="triangle1_image" width="70px" height="90px"/>
                </Box>
                <Box
                    position="absolute"
                    top="266px"
                    left="43px"
                >
                    <img src={RingImage} alt="ring_image" height="28px" width="28px"/>
                </Box>
                <Box
                    position="absolute"
                    top="320px"
                    left="0"
                >
                    <img src={TwoLines} alt="two_lines" height="50px" width="50px"/>
                </Box>
                <Box
                    position="absolute"
                    top="350px"
                    left="230px"
                >
                    <img src={Triangle2Image} alt="triangle2_image" width="85px" height="85px"/>
                </Box>
                <Box
                    position="absolute"
                    top="500px"
                    left="7px"
                >
                    <img src={DesignImage} alt="design_image" width="150px" height="33px"/>
                </Box>
                <Box width="100vw">
                    <Header />
                    <Highlight />
                    <Stack direction="row" alignItems="center" justifyContent="center">
                <Content />
                </Stack>
                </Box>
                
               
            </Box> */}

            <Box
                style={{
                    // border: "2px solid red",
                    // backgroundImage: `url(${Background})`,
                    // backgroundRepeat: "no-repeat",
                    // backgroundSize: "100% 100%",
                    // height: "100vh",
                    // width: "100vw",
                    // objectFit: "cover",
                    // position: "absolute",
                    // overflow: "auto"
                }}
            >

                <Box
                    style={{
                        width: "100vw"
                    }}
                >
                    {/* <Header /> */}
                    {/* <Highlight /> */}
                    {/* <Stack pt={5}  alignItems="center" >
                    <Stack spacing={2} pl={30}>
                        
                    <Stack>
                        <Typography fontSize="24px" fontWeight={400} color="#7C7C7C">We are working on a new and exciting product that,</Typography>
                        <Typography fontSize="24px" fontWeight={400} color="#7C7C7C">we think you’ll really like</Typography>
                    </Stack>

                    <Stack direction="row" spacing={0.5}>
                        <Typography fontSize="18px" fontWeight={400} color="#272937" style={{borderBottom: "1.5px solid #272937", paddingBottom: "10px"}} display="inline">Coming</Typography>
                        <Typography fontSize="18px" fontWeight={400} color="#272937" display="inline">Soon</Typography>
                    </Stack>

                    <Typography fontSize="48px" fontWeight={700} color="#272937">
                        Get Notified When We Launch
                    </Typography>

                    <Stack  width="509px">
                        <TextField />
                    </Stack> 
                    </Stack>
                    
                </Stack>
                <Stack  pt={6.5} direction="row" justifyContent="center">
                    <DaysCalculate />
                </Stack>
                <Box
                border= "2px solid red"
                    style={{
                        backgroundImage: `url(${Dotted})`,
                        backgroundRepeat: "no-repeat",
                        height: "100px",
                        width: "200px",
                        backgroundSize: "contain"
                    }}
                >
                   
                </Box>
                <Stack direction="row" alignItems="center" border="2px solid">
                <Divider />

                </Stack> */}
                    {/* <Header />
                
                <Stack
                    direction="row"
                    justifyContent="center"
                    p="53px"
                >
                    <DaysCalculate />
                </Stack>
                <Divider variant="inset" />
                <Stack 
                    direction="row"
                    justifyContent="center"
                    p={2}
                    >
                    <Typography color="#7C7C7C">
                        © Twozo Technologies Private Limited
                    </Typography>
                </Stack>
                <Stack direction="row"  alignItems="center">
                    <Stack>
                        <img src={DottedImage} alt="dotted_image" height="102px" width="241px"/>
                    </Stack>
                    <Stack direction="column" alignItems="center" justifyContent="center">
                    <Stack mb={2} ml={-15} width="85vw">
                        <Divider variant="inset" />
                    </Stack>
                    <Stack>
                        <Typography>© Twozo Technologies Private Limited</Typography>
                    </Stack>
                    </Stack>
                </Stack>
                */}
                </Box>

                <Header/>
                <Box>
                    <Stack direction="row" alignItems="center" justifyContent="center" >
                        <Typography fontWeight={700} fontSize="40px">SOMETHING AWESOME IS IN THE WORKS</Typography>
                    </Stack>
                    
                </Box>
            </Box>
        </React.Fragment>
    );
}



const [timerDays, setTimerDays] = useState(0)
    const [timerHours, setTimerHours] = useState(0)
    const [timerMinutes, setTimerMinutes] = useState(0)
    const [timerSeconds, setTimerSeconds] = useState(0)

    let interval;
    
    const startTimer = () => {
        const countDownDate = new Date("May 1, 2023").getTime();
        
        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));

            const hours = Math.floor(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60);

            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

            const seconds = Math.floor((distance % (60 * 1000)) / (1000));

            if(distance < 0) {
                clearInterval(interval.current)
            } else {
                // setTimerDays(days);
                // setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })
    }

    useEffect(() => {
        startTimer();
    }, [])