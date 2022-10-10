import { Box, Button, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Illustration from "../../images/illustration.jpg"
import moment from "moment"

const styles = {
    text: {
        fontSize: "24px",
        color: "#7C7C7C"
    }
}

export default function Content() {
    const [data, setData] = useState("");
    // const date = new Date();

    // var date1 = moment()
    // console.log(date1.toLocaleString())
    // var date2 = moment("2023-05-01 11:06:55")
    // console.log(date2.toLocaleString())

    // date2.diff(date1)
    // console.log(date2.diff(date1, 'days')) 
    // console.log(moment().format('YYYY-MMMM-Do, h:mm:ss'))

    // const handleClick = () => {
    //     console.log({data})
    //     setData("")
    // }

  return (
    <React.Fragment>
        <Stack direction="column" spacing="25px">
            <Stack>
                <Typography fontSize="24px" fontWeight={400} color="#7C7C7C">We are working on a new and exciting product that,</Typography> 
                <Typography fontSize="24px" fontWeight={400} color="#7C7C7C">we think you’ll really like!</Typography>  
            </Stack>
            {/* <Stack direction="row" spacing={0.5}>
                <Typography fontSize="18px" fontWeight={400} color="#272937" style={{borderBottom: "1.5px solid #272937", paddingBottom: "10px"}} display="inline">Coming</Typography>
                <Typography fontSize="18px" fontWeight={400} color="#272937" display="inline">Soon</Typography>
            </Stack> */}
            {/* <Typography fontSize="48px" fontWeight={700} color="
#272937">
                Get Notified When We Launch
            </Typography> */}
            {/* <Stack  width="509px">
                <TextField />
            </Stack> */}
        </Stack>
        {/* <Stack mt={15} ml={50}>
            <Stack
                direction="row"
                alignItems="flex-end"
                spacing="70px"
            >
                <Stack direction="column" spacing="35px">
                    <Stack width="40vw">
                        <Typography style={styles.text}>
                            We are working on a new and exciting product that, 
                            <br/>
                            we think you’ll really like!
                        </Typography>
                    </Stack>
                    <Stack display="inline">
                        <Typography pb={1} style={{borderBottom: "1.5px solid #272937"}} display="inline" fontSize={18} color="#272937">
                            Coming Soon
                        </Typography>
                    </Stack>
            </Stack>
            <Box>
                <img src={Illustration} alt="illustartion_image" width="260px" height="260px"/>
            </Box>
            
        </Stack>

        <Stack direction="column" spacing="35px" mt={"25px"}>
        <Stack>
            <Typography fontWeight={700} fontSize={48} color="#272937">
                Get Notified When We Launch
            </Typography>
        </Stack>

        <Stack>
            <TextField 
                sx={{
                    width: '509px'
                }}
                placeholder="Enter your email address "
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <Stack mr={-1}>
                                <Button onClick={handleClick} sx={{boxShadow: "none"}} variant="contained">GET STARTED</Button>
                            </Stack>
                        </InputAdornment>
                    )
                }}
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </Stack>
        </Stack>
        </Stack> */}
    </React.Fragment>
  )
}