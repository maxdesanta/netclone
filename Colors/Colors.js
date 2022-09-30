import React from "react";
import { createTheme } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";

const colors = createTheme({
  palette: {
        primary: {
        main: '#000000'
    },
        secondary: {
        main: "#FFFFF"
        },
        acent: {
            main: "#95159B"
        }
  },
});

export default colors;