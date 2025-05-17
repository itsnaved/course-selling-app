import React from 'react'
import { Typography, Button } from '@mui/material';

export const Appbar = () => {
  return (
        <div 
        style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4
        }}>
        <div>
        <Typography variant='h6'>Coursera</Typography>
        </div>
        <div style={{display:"flex"}}>
        <Button variant='contained' style={{marginRight:10}}> Signup </Button>
        <Button variant='contained'> Signin </Button>
        </div>
    </div>
  )
}
