import React from "react";
import BorderBottom from "../../Wrapper/BorderBottom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";

const Card = ({ text, gambar }) => (
  <Box
    SX={{
      display: "flex",
      flexDirection: "row",
    }}
  >
    <Image src={gambar} width="200" height="300" alt="mortal-kombat-11" />
    <Typography sx={{ fontSize: "1rem", textAlign: "center", mb: 3 }}>
      {text}
    </Typography>
    <Button variant="contained" color="acent" sx={{ px: 8 }}>
      Play Now
    </Button>
  </Box>
);

export default function Collection() {
  return (
    <BorderBottom>
      <Box sx={{ bgcolor: "Black", color: "White", py:6}}>
        <Typography variant="h3" textAlign="Center" sx={{ mb: 6 }}>
          Get Even More Games
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap:"wrap", maxWidth: 700, m: '0 auto', gap: 5}}>
          <Card text="Mortal Kombat 11" gambar="/images/mortal-kombat-11.jpg" />
          <Card text="Mortal Kombat 11" gambar="/images/mortal-kombat-11.jpg" />
          <Card text="Mortal Kombat 11" gambar="/images/mortal-kombat-11.jpg" />
          <Card text="Mortal Kombat 11" gambar="/images/mortal-kombat-11.jpg" />
          <Card text="Mortal Kombat 11" gambar="/images/mortal-kombat-11.jpg" />
          <Card text="Mortal Kombat 11" gambar="/images/mortal-kombat-11.jpg" />
        </Box>
      </Box>
    </BorderBottom>
  );
}
