import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import illustartion_image from "../../assets/images/illustration.png"
import React from 'react'

const styles= {
    text1: {
        fontSize: "24px",
        color: "#7C7C7C"
    },
    text2: {
        fontSize: "18px",
        color: "#272937"
    },
    text3: {
        fontSize: "48px",
        fontWeight: 700,
        color: "#272937"
    }
}

export default function Description() {
  return (
    <Stack>
        <Stack
            direction="row"
            alignItems="flex-end"
            spacing={5}
            // style={{
            //     border: "2px solid red"
            // }}
        >
            <Stack
                spacing={2}
            >
                <Typography style={styles.text1}>
                    We are working on a new and exciting product that, <br/>
                    we think you’ll really like!
                </Typography>
                <Stack
                    direction="row" 
                    style={styles.text2}
                    spacing={1}
                >
                    <Typography
                        style={{
                            borderBottom: "1.5px solid #272937",
                            paddingBottom: "10px"
                        }}
                    >
                        Coming
                    </Typography>
                    <Typography>Soon</Typography>
                </Stack>
            </Stack>
            <Stack>
                <img src={illustartion_image} alt="illustrationImage" height="238px" width="288px"/>
            </Stack>
        </Stack>
        <Stack spacing={2} mt={1}>
            <Typography style={styles.text3}>Get Notified When We Launch</Typography>
            <Stack
                sx={{
                    width: "509px"
                }}
            >
                <TextField
                    placeholder='Enter your email address'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <Stack mr={-1.2}>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            boxShadow: "none"
                                        }}
                                    >
                                        GET STARTED
                                    </Button>
                                </Stack>
                            </InputAdornment>
                        )
                    }}
                />
            </Stack>
        </Stack>
    </Stack>
  )
}