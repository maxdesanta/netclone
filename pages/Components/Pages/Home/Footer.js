import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/Image';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "black", color: "white", px:3, display:"flex", justifyContent:"space-between"  }}>
        <Box sx={{display: "flex", columnGap: 3, alignItems: "center"}}>
          <Image src="/logo.png" width="80" height="80" />
          <Typography variant="h5" component="a" href="#">
            Privacy
          </Typography>
          <Typography variant="h5" component="a" href="#">
            Terms
          </Typography>
          <Typography variant="h5" component="a" href="#">
            Games
          </Typography>
          <Typography variant="h5" component="a" href="#">
            Hardware
          </Typography>
          <Typography variant="h5" component="a" href="#">
            Support
          </Typography>
        </Box>
        <Box sx={{display: "flex", columnGap: 3, alignItems: "center"}}>
          <FacebookIcon color="acent" sx={{ fontSize: "2.5rem" }} />
          <TwitterIcon color="acent" sx={{ fontSize: "2.5rem" }} />
          <InstagramIcon color="acent" sx={{fontSize: "2.5rem"}} />
        </Box>
    </Box>
  );
}
