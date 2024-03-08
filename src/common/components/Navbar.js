import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import LoginIcon from "@mui/icons-material/Login";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import Logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const [anchorNavopen, setAnchorNavopen] = useState(false);

  const handleNav = () => {
    setAnchorNavopen(true);
  };

  const navClose = () => {
    setAnchorNavopen(false);
  };
  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
    setAnchorNavopen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#010014",
        height: 60,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            onClick={() => {
              navigate("/");
            }}
            src={Logo}
            alt="Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
          {isXsScreen && (
            <Box>
              <IconButton size="large" onClick={handleNav} color="inherit">
                <ExpandMoreIcon />
              </IconButton>

              <Menu
                // id="menu-appbar"
                // anchorOrigin={{
                //   vertical: "top",
                //   horizontal: "left",
                // }}
                // transformOrigin={{
                //   vertical: "top",
                //   horizontal: "left",
                // }}
                open={anchorNavopen}
                onClose={navClose}
                PaperProps={{
                  sx: {
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/socialspace");
                    navClose();
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    fontSize: "3rem",
                    marginBottom: "3%",
                  }}   
                >
                  SOCIAL SPACE
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/iricon");
                    navClose();
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    fontSize: "3rem",
                    marginBottom: "3%",

                  }}                >
                  IR ICON
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/avatarstore");
                    navClose();
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    fontSize: "3rem",
                    marginBottom: "3%",

                  }}                   >
                  AVATAR STORE
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/litstore");
                    navClose();
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    fontSize: "3rem",
                    marginBottom: "3%",
                  }}                   >
                  LIT STORE
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/subscribe");
                    navClose();
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    fontSize: "3rem",
                  }}                   >
                  SUBSCRIBE
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
        {/* <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Typography variant="h5" fontWeight={600}>
            Welcome 👋🏻
          </Typography>
        </Box> */}
        {!isXsScreen && (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                color: "white",
                fontFamily: "CSGordon",
                fontWeight: "600",
              }}
            >
              SOCIAL SPACE
            </Button>
            <Button
              style={{
                color: "white",
                fontFamily: "CSGordon",
                fontWeight: "600",
              }}
            >
              IR ICON
            </Button>
            <Button
              style={{
                color: "white",
                fontFamily: "CSGordon",
                fontWeight: "600",
              }}
            >
              AVATAR STORE
            </Button>
            <Button
              style={{
                color: "white",
                fontFamily: "CSGordon",
                fontWeight: "600",
              }}
            >
              LIT STORE
            </Button>
            <Button
              style={{
                color: "white",
                fontFamily: "CSGordon",
                fontWeight: "600",
              }}
            >
              SUBSCRIBE
            </Button>
          </Box>
        )}

        {isAuthenticated ? (
          <Box ml={4}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={isMenuOpen}
              onClose={handleClose}
              sx={{ marginTop: 5 }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{ marginBottom: 1, width: 200 }}
              >
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/about");
                  handleClose();
                }}
                sx={{ marginBottom: 1, fontFamily: "CSGordon" }}
              >
                <ListItemIcon>
                  <InfoIcon fontSize="small" />
                </ListItemIcon>
                About
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/contact");
                  handleClose();
                }}
                sx={{ marginBottom: 1 }}
              >
                <ListItemIcon>
                  <EmailIcon fontSize="small" />
                </ListItemIcon>
                Contact
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/faq");
                  handleClose();
                }}
                sx={{ marginBottom: 1 }}
              >
                <ListItemIcon>
                  <GroupIcon fontSize="small" />
                </ListItemIcon>
                FAQ
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  logout();
                }}
                sx={{ marginBottom: 1 }}
              >
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <>
            <Typography fontFamily="CSGordan">SIGN IN</Typography>
            <IconButton
              color="inherit"
              onClick={() => {
                navigate("/login");
              }}
            >
              <DensityMediumOutlinedIcon fontSize="small" />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
