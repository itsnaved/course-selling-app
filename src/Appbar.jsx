import { Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';

export const Appbar = () => {

  const [userEmail, setUserEmail]= useState(null);
  useEffect(()=>{
    fetch("http://localhost:3000/admin/me",{ 
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then((res)=>{return res.json()}).then((data)=>{if(data.username) setUserEmail(data.username ) });
  },[]); 

    if(userEmail){
      return <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
      }}>
      <div>
        <Typography variant='h6'>Coursera</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div>{userEmail}</div>
          <div style={{ marginRight: 10 }}>
              <Button variant='contained' onClick={() => { localStorage.removeItem("token"), window.location= "/" }}> Logout </Button>
          </div>
      </div>
    </div>
    }else{
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
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
        <Button variant='contained' onClick={() => { window.location = "/signup" }}> Signup </Button>
        </div><div>
        <Button variant='contained' onClick={() => { window.location = "/signin" }}> Signin </Button>
        </div>
      </div>
    </div>
  )
    }
}
