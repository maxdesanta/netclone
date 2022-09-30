import React from "react";
import BorderBottom from "../../Wrapper/BorderBottom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";

const Card = ({ text, gambar, altCaption }) => (
  <Box
    SX={{
      display: "flex",
      flexDirection: "row",
    }}
  >
    <Image src={gambar} width="200" height="300" alt={altCaption} />
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
          <Card text="Mortal Kombat 11" gambar="/images/mortal-kombat-11.jpg" altCaption="mortal-kombat-11" />
          <Card text="Fortnite" gambar="/images/fortnite.jpg" altCaption="fortnite" />
          <Card text="Assasin's Creed : Valhalla" gambar="/images/valhalla.png" altCaption="valhalla" />
          <Card text="God of War" gambar="/images/god.jfif" altCaption="god-of-war" />
          <Card text="Genshin Impact" gambar="/images/geshin-impactt.jfif" altCaption="genshinimpact" />
          <Card text="Biomutant" gambar="/images/biomutant.jfif" altCaption="biomutant" />
        </Box>
      </Box>
    </BorderBottom>
  );
}
