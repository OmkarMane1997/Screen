import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../assets/User.css";

function Footer() {
  return (
    <>
      <Divider />
      <Grid container spacing={2}>
        <Grid item lg={9} md={8} sm={6} xs={12} sx={{ my: 2 }}>
          <Box>
            <Typography level="body2">
              <span className="footer_text">2022 ©</span> KeenThemes
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ my: 2 }}>
          <Stack direction="row" spacing={2}>
            <NavLink to={"/"} className="navLink">
              About
            </NavLink>
            <NavLink to={"/"} className="navLink">
              Support
            </NavLink>
            <NavLink to={"/"} className="navLink">
              Purchase
            </NavLink>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
