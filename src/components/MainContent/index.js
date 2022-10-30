import React from 'react'
import { Stack, Typography, useTheme } from '@mui/material'

export default function MainContent() {
    const theme = useTheme();
    
    return (
        <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
        >
            <Stack p={1} spacing={3} direction="row" borderTop="7px solid #FFFFFF" borderBottom="7px solid #FFFFFF">
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
    )
}