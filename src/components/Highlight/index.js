import { Stack, Typography } from '@mui/material'
import React from 'react'

const styles = {
    textDecoration: {
        fontWeight: 700,
        fontSize: "40px"
    }
}

export default function Highlight() {
  return (
    <React.Fragment>
        <Stack direction="row" alignItems="center" justifyContent="center">
            <Stack direction="row" alignItems="center" spacing={2} p="10px" pl="20px" fontWeight={700} fontSize="40px" style={{borderTop: "7px solid #ffffff", borderBottom: "7px solid #ffffff"}} >
                <Typography style={styles.textDecoration} color="#fff" display="inline">SOMETHING</Typography> <Typography style={styles.textDecoration} display="inline" color="#4E8F68">AWESOME</Typography> <Typography style={styles.textDecoration} display="inline">IS IN THE WORKS</Typography>
                <Typography display="inline"></Typography>
            </Stack>
        </Stack>
    </React.Fragment>
  )
}