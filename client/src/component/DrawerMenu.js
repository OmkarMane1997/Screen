import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import {
  SearchOutlined,
  Message,
  WbSunny,
  Widgets,
  Leaderboard,
  AccountBalanceWallet,
  ContactMail,
  FiberManualRecord,
} from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Help from "../pages/Help";

//  import css from assets folder
import "../assets/DrawerMenu.css";
import User from "../pages/User";
import CreateUser from "../pages/CreateUser";



const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function DrawerMenu() {
  const theme = useTheme();
  // One
  const [open, setOpen] = React.useState(false);
  // Two
  const [userToggle, setUserToggle] = React.useState(false);
  //Three
  const [openSub, setOpenSub] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setUserToggle(!userToggle);
  };

  const handleClickSub = () => {
    setOpenSub(!openSub);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="" sx={{ color: "gray" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mx: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="body1" component="div" sx={{ mx: 2 }}>
            <NavLink to={"/Dashboard"} className="navLink">
              Dashboard
            </NavLink>
          </Typography>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to={"/Home"} className="navLink">
              Help
            </NavLink>
          </Typography>
          <SearchOutlined sx={{ mx: 1 }} className='icon' />
          <Leaderboard sx={{ mx: 1 }}  className='icon' />
          <Widgets sx={{ mx: 1 }} className='icon'  />
          <Message sx={{ mx: 1 }} className='icon'  />
          <Widgets sx={{ mx: 1 }}  className='icon' />
          <WbSunny sx={{ mx: 1 }}  className='icon' />
          <Avatar
            variant="rounded"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ mx: 1 }}
          />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className="iconColor" />
            ) : (
              <ChevronLeftIcon className="iconColor" sx={{ borderRadius: 1 }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Widgets className="sideNavIcon" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                Dashboard
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AccountBalanceWallet className="sideNavIcon" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                Account
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleClick}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ContactMail className="sideNavIcon" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                User Management
              </ListItemText>
              {userToggle ? (
                <ExpandLess sx={{ display: open ? "inline" : "none" }} />
              ) : (
                <ExpandMore sx={{ display: open ? "inline" : "none" }} />
              )}
            </ListItemButton>
            <Collapse in={userToggle} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton onClick={handleClickSub}>
                  <ListItemIcon>
                    <FiberManualRecord
                      sx={{ fontSize: 10, opacity: open ? 1 : 0 }}
                      className="sideNavIcon"
                    />
                  </ListItemIcon>
                  <ListItemText>Users</ListItemText>
                  {openSub ? (
                    <ExpandLess sx={{ display: open ? "inline" : "none" }} />
                  ) : (
                    <ExpandMore sx={{ display: open ? "inline" : "none" }} />
                  )}
                </ListItemButton>

                <Collapse in={openSub} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4, ml: 2 }}>
                      <ListItemIcon>
                        <FiberManualRecord
                          className="sideNavIcon"
                          sx={{ fontSize: 10, opacity: open ? 1 : 0 }}
                        />
                      </ListItemIcon>
                      <ListItemText><NavLink to={'/User'} className='navSideLink'>User List</NavLink></ListItemText>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4, ml: 2 }}>
                      <ListItemIcon>
                        <FiberManualRecord
                          className="sideNavIcon"
                          sx={{ fontSize: 10, opacity: open ? 1 : 0 }}
                        />
                      </ListItemIcon>
                      <ListItemText>View User</ListItemText>
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <FiberManualRecord
                      className="sideNavIcon"
                      sx={{ fontSize: 10, opacity: open ? 1 : 0 }}
                    />
                  </ListItemIcon>
                  <ListItemText>Roles</ListItemText>
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <FiberManualRecord
                      className="sideNavIcon"
                      sx={{ fontSize: 10, opacity: open ? 1 : 0 }}
                    />
                  </ListItemIcon>
                  <ListItemText>Permissions</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
          </ListItem>
         
          <ListItem disablePadding sx={{ display: "block",  }} >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                borderRadius:2,mx:3,mt:userToggle===false?42:14
              }}
            >
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                Docs & Components
              </ListItemText>
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
      {/* need to pass here causes need to adjust the screen */}
      <Routes>
        <Route path={"/Home"} element={<Home />} />
        <Route path={"/Dashboard"} element={<Dashboard />} />
        <Route path={"/Help"} element={<Help />} />
        <Route path={"/User"} element={<User />} />
        <Route path={"/CreateUser"} element={<CreateUser />} />
      </Routes>
    </Box>
  );
}

export default DrawerMenu;
