import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BorderBottom from "../../Wrapper/BorderBottom";
import GamesIcon from '@mui/icons-material/Games';

export default function Header() {
  return (
    <BorderBottom>
      <AppBar sx={{bgcolor: 'transparent', position: 'absolute'}} elevation={0} >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItem: "center"}}>
          <Image src="/logo.png" width="120" height="120" />
          <Button variant="contained" color="acent">Login</Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "relative",
          height: "745px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0,0,0,0.4)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)",
          },
        }}
      >
        <Image
          priority
          src="/images/background-netflix.jpg"
          object-fit="cover"
          layout="fill"
          alt="background-stream"
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1000 }}>
          <Typography variant="h2" color="white" fontWeight="600" textAlign='center'>Play streaming games AAA without high spec</Typography>
          <Typography variant="h6" color="white" fontWeight="600" textAlign='center' sx={{mb: 3}}>Ready to play ? Search your games</Typography>
          <Box sx={{display: "flex"}}>
            <TextField variant="filled" label="Find your games...." fullWidth sx={{ bgcolor: "white", border:"none" }} /> 
            <Button variant="contained" size="large" color="acent" inputProps={{disableUnderline: true}} sx={{borderRadius: "2px", color:"white"}}>Search</Button>
          </Box>
        </Container>
      </Box>
    </BorderBottom>
  );
}
