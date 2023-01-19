import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Breadcrumbs, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "../assets/User.css";
import Grid from "@mui/material/Grid";
import Footer from "../component/Footer";
import TableData from "../component/TableData";
import RightBar from "../component/RightBar";

function User() {
  return (
    <>
      <Container fixed sx={{ mt: 9 }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={9} md={6} sm={6} xs={12}>
              <Box component="main">
                <Typography variant="h6" align="left" gutterBottom>
                  <b>Users List</b>
                </Typography>
                <Breadcrumbs aria-label="breadcrumb" separator="-">
                  <NavLink to={"/Home"} className={"navLink"}>
                    Home
                  </NavLink>
                  <NavLink to={"/"} className={"navLink"}>
                    User Management{" "}
                  </NavLink>
                  <Typography color="text.primary">Users</Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box component="main">
                <Stack direction="row">
                  <Button
                    variant="outlined"
                    sx={{ m: 1 }}
                    startIcon={<FilterAltIcon />}
                    className="filter_button"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ m: 1 }}
                    className="button_Background"
                  >
                    Create
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <TableData />
        </Box>
        <RightBar />
        <Footer />
      </Container>
    </>
  );
}

export default User;
