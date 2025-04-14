// HomePage.tsx
import React from "react";
import Footer from "../lay/Footer";
import {
  Typography,
  Button,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "./HomePage.styles";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      {/* Hero Section */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          minHeight: isMediumScreen ? "auto" : "70vh",
          flexDirection: isMediumScreen ? "column-reverse" : "row",
        }}
      >
        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <Box sx={styles.heroTextContainer}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={styles.heroTitle}
            >
              Welcome to Jasmine Cafe
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              paragraph
              sx={styles.heroSubtitle}
            >
              Discover a world of delightful flavors and cozy atmosphere
            </Typography>
            <Button
              component={Link}
              to="/menu"
              variant="contained"
              color="primary"
              size="large"
              sx={styles.heroButton}
            >
              Explore Our Menu
            </Button>
          </Box>
        </Grid>
        {/* Image Content */}
        <Grid item xs={12} md={6}>
          <Box sx={styles.heroImageContainer}>
            <img
              src="/images/coffee_theme.jpg"
              alt="Jasmine Cafe"
              style={{
                width: "50%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "300px",
                boxShadow: "0 4px 6px rgba(233, 138, 50, 0.1)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={styles.featuresSection}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Box sx={styles.features}>
          <Box sx={styles.featureItem}>
            <Typography variant="h6">Fresh Ingredients</Typography>
            <Typography variant="body1">
              We use only the freshest ingredients sourced from local farms.
            </Typography>
          </Box>
          <Box sx={styles.featureItem}>
            <Typography variant="h6">Expert Chefs</Typography>
            <Typography variant="body1">
              Our dishes are prepared by experienced chefs with passion for
              cooking.
            </Typography>
          </Box>
          <Box sx={styles.featureItem}>
            <Typography variant="h6">Cozy Atmosphere</Typography>
            <Typography variant="body1">
              Enjoy your meal in our comfortable and welcoming environment.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />;
    </Box>
  );
};

export default HomePage;
