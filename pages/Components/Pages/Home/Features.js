import React from "react";
import Image from "next/image";
import BorderBottom from "../../Wrapper/BorderBottom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Judul = ({ text }) => (
  <Typography variant="h3" sx={{ pb: 1.3 }}>
    {text}
  </Typography>
);

const Description = ({ text }) => <Typography variant="h5">{text}</Typography>;

export default function Features() {
  return (
    <Box sx={{ bgcolor: "black", color: "white" }}>
      <BorderBottom>
        <Container
          sx={{
            py: 6,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box>
            <Judul text="Pro Membership" />
            <Description text="You can start from 10$ to keep playing these games" />
          </Box>
          <Image src="/images/price-tag.png" width="250" height="250" alt="price"/>
        </Container>
      </BorderBottom>
      <BorderBottom>
        <Container
          sx={{
            py: 6,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Image src="/images/device.png" layout="intrinsic" width="700" height="300" alt="device" />
          <Box>
            <Judul text="Play everywhere" />
            <Description text="Play stream games on your phone, tablet, and laptop" />
          </Box>
        </Container>
      </BorderBottom>
    </Box>
  );
}
