import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function User() {
  return (
    <Container fixed>
      <Box component="main" sx={{ flexGrow: 1, pt: 9}}>
        <Typography variant="h3" align="center">
          User
        </Typography>
      </Box>
    </Container>
  );
}

export default User;
