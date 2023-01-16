import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Breadcrumbs, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "../assets/User.css";

function User() {
  return (
    <Container fixed>
      <div>
        <div className="left-div">
          <Box component="main" sx={{ flexGrow: 1, pt: 9 }}>
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
        </div>
        <div className="right-div">
          <Box component="main" sx={{ flexGrow: 1, pt: 9 }}>
            <Stack direction="row">
              <Button variant="outlined" sx={{ m: 1 }} startIcon={<FilterAltIcon />} className='filter_button'>
                Delete
              </Button>
              <Button variant="contained" sx={{ m: 1 }} className='button_Background'>
                Create
              </Button>
            </Stack>
          </Box>
        </div>
      </div>
      
     
    </Container>
    
  );
}

export default User;
