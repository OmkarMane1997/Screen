import {  Stack, Typography } from "@mui/material";
import React from "react";
import "../assets/Table.css";
function RightBar() {
  return (
    <>
      <div className="nine">
        <Stack direction="row" >
          <Typography color="inherit" variant="body1" sx={{ mx: 0.5, my: 2 }}>
            Demo
          </Typography>
        </Stack>
      </div>
      
      <div className="ten">
        <Stack direction="row" >
          <Typography color="inherit" variant="body1" sx={{ mx: 0.5, my: 2 }}>
            Help
          </Typography>
        </Stack>
      </div>
    </>
  );
}

export default RightBar;
