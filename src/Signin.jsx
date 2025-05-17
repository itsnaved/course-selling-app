import React from 'react'
import { Card, Typography, TextField, Button } from '@mui/material';
 
 export const Signin = () => {
   return (
    <div>
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={'h6'}>
            Welcome Back, Sign in below
            </Typography>
        </div>

    <div style={{display: "flex", justifyContent:"center"}}>
     <Card variant="outlined"style={{width: 400, padding: 20  }}>
        <TextField id="outlined-basic" label="Email" variant="outlined"  fullWidth/>
        <br/><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' fullWidth/>
        <br/><br/>
        <Button size='large' variant="contained"> Signin  </Button>
     </Card>
     </div>
    
     </div>
   )
 }