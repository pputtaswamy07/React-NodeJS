// Navbar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 2,
      }}
    >
      <Toolbar
        sx={{
          padding: { xs: "0 16px", sm: "0 24px" },
          margin: 0,
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Home
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/reservation">
            Reservation
          </Button>
          <Button color="inherit" component={Link} to="/menu">
            Menu
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
