import React from 'react'
import { Card, Typography, TextField, Button } from '@mui/material';
 
 export const Signup = () => {
   return (
    <>
    <center>
        <div style={{
            paddingTop: 150,
            marginBottom: 10
        }}>
            <Typography variant={'h6'}>
            Welcome to Coursera. Sign up below
            </Typography>
        </div>
    </center>
    <center>
     <Card variant="outlined"style={{width: 400, padding: 20  }}>
        <TextField id="outlined-basic" label="Email" variant="outlined"  fullWidth/>
        <br/><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' fullWidth/>
        <br/><br/>
        <Button size='large' variant="contained">Contained</Button>
     </Card>
     </center>
    
     </>
   )
 }
 