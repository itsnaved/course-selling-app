import React, { useState } from 'react'
import { Card, Typography, TextField, Button } from '@mui/material';

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div style={{
        paddingTop: 150,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center"
      }}>
        <Typography variant={'h6'}>
          Welcome to Coursera. Sign up below
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth 
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br /><br />
          <TextField
            label="Password"
            variant="outlined"
            type={"password"}
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br /><br />
          <Button
            size='large'
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: email,
                  password: password
                })
              }).then((res) => {
                return res.json();
              }).then((data) => { localStorage.setItem("token", data.token), window.location= "/" });
            }} >
            Signup
          </Button>
        </Card>
      </div>
    </div>
  )
}
