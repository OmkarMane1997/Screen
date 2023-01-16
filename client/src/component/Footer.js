import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box>
      <Typography
        level="body2"
        startDecorator={
          <Typography textColor="text.tertiary">2022 ©</Typography>
        }
      >
        KeenThemes
      </Typography>
    </Box>
  );
}

export default Footer;
