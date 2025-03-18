import {
  Box,
  Grid,
  Divider,
  Container,
  Typography,
  Link,
  AppBar,
} from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 4,
        mt: 8,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={16} sm={4}>
            <Typography variant="h6" gutterBottom>
              Jasmine Cafe
            </Typography>
            <Typography variant="body2">
              Serving delicious food in a cozy atmosphere since 2010.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Hours
            </Typography>
            <Typography variant="body2">Monday - Friday: 8am - 10pm</Typography>
            <Typography variant="body2">
              Saturday - Sunday: 9am - 11pm
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">123 Main Street</Typography>
            <Typography variant="body2">City, State 12345</Typography>
            <Typography variant="body2">Phone: (555) 123-4567</Typography>
            <Typography variant="body2">Email: info@jasminecafe.com</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            © {new Date().getFullYear()} Jasmine Cafe. All rights reserved.
          </Typography>
          <Box>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Footer;
