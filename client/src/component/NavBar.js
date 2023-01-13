import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import {SearchOutlined,Message,WbSunny,Widgets,Leaderboard} from "@mui/icons-material";

function NavBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="" sx={{ color: "gray" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="body1" component="div" sx={{ mx: 2 }}>
              Dashboard
            </Typography>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              Help
            </Typography>
            <SearchOutlined  sx={{mx:1}}  />
            <Leaderboard  sx={{mx:1}}  />
            <Widgets sx={{mx:1}} />
            <Message  sx={{mx:1}} />
            <Widgets sx={{mx:1}} />
            <WbSunny  sx={{mx:1}}  />
            <Avatar
                variant="rounded"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{mx:1}}
              />
           
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default NavBar;
