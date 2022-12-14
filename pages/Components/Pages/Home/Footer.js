import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {
  return (
    <Box sx={{ bgcolor: "black", color: "white", px:3, display:"flex", justifyContent:"space-between"  }}>
        <Box sx={{display: "flex", columnGap: 3, alignItems: "center"}}>
          <Image src="/logo.png" alt="logo-footer" width="80" height="80" />
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
