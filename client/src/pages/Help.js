import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../assets/Table.css";

function Help() {
  return (
    <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
      <Typography variant="h3" align="center">
        Help
      <Typography variant="body2" align="center" className="two_Enable" >Enable</Typography>

      </Typography>
    </Box>
  );
}

export default Help;
