import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const styles = {
    textNumber: {
        fontSize: 86,
        fontWeight: 700,
        color: "#272937"
    },
    textCalc: {
        fontSize: 24,
        fontWeight: 400,
        color: "#989797"
    }
}

export default function DaysCalculate() {
    const theme = useTheme();
    const date = new Date();
    const newDate = new Date("05/01/2023");

    const [timerDays, setTimerDays] = useState("03")
    const [timerHours, setTimerHours] = useState("12")
    const [timerMinutes, setTimerMinutes] = useState("53")
    const [timerSeconds, setTimerSeconds] = useState("34")
    
    
   const numberOfDays = Math.round(getDifferenceInDays(date, newDate))
   const numberofHours = Math.round(getDifferenceInHours(date, newDate))
   const numberOfMinutes = Math.round(getDifferenceInMinutes(date, newDate))
   const numberOfSeconds = Math.round(getDifferenceInSeconds(date, newDate))

    function getDifferenceInDays(difference) {
        return difference / (1000 * 60 * 60 * 24);
    }

    function getDifferenceInHours(difference) {
        return difference / (1000 * 60 * 60);
    }

    function getDifferenceInMinutes(difference) {
        return difference / (1000 * 60);
    }

    function getDifferenceInSeconds (difference) {
        return difference / 1000;
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSeconds(numberOfSeconds)
    //     }, 1000)
    //     return () => clearInterval(interval)
    // },[numberOfSeconds])

    let interval;

    const startTimer = () => {
        interval = setInterval(() => {
            const difference = Math.abs(newDate - date);

            const days = Math.round(getDifferenceInDays(difference));
    
            const hours = Math.round(getDifferenceInHours(difference));
    
            const minutes = Math.round(getDifferenceInMinutes(difference));
    
            const seconds = Math.round(getDifferenceInSeconds(difference));
            
            if(difference < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })
    
    }
    useEffect(() => {
        startTimer()
    })
    // startTimer()

  return (
    <React.Fragment>
        <Stack
            direction="row"
            alignItems="center"
            spacing="147px"
        >
            <Stack
                direction="column"
                alignItems="center"
            >
                <Typography style={styles.textNumber}>{timerDays}</Typography>
                <Typography style={styles.textCalc}>DAYS</Typography>
            </Stack>

            <Stack
                direction="column"
                alignItems="center"
            >
                <Typography style={styles.textNumber}>{timerHours}</Typography>
                <Typography style={styles.textCalc}>HOURS</Typography>
            </Stack>

            <Stack
                direction="column"
                alignItems="center"
            >
                <Typography style={styles.textNumber}>{timerMinutes}</Typography>
                <Typography style={styles.textCalc}>MINUTES</Typography>
            </Stack>

            <Stack
                direction="column"
                alignItems="center"
            >
                <Typography style={styles.textNumber}>{timerSeconds}</Typography>
                <Typography style={styles.textCalc}>SECONDS</Typography>
            </Stack>
        </Stack>
        <Stack position="absolute" top="255px" width="85vw">
            <Divider />
        </Stack>
        <Stack top="290px" position="absolute">
            <Typography color={theme.palette.secondary.contrastText}>© Twozo Technologies Private Limited</Typography>
        </Stack>
    </React.Fragment>
  )
}