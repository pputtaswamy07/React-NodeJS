// HomePage.styles.ts
import { SxProps, Theme } from "@mui/material";

interface HomePageStyles {
  heroTextContainer: SxProps<Theme>;
  heroTitle: SxProps<Theme>;
  heroSubtitle: SxProps<Theme>;
  heroButton: SxProps<Theme>;
  heroImageContainer: SxProps<Theme>;
  featuresSection: SxProps<Theme>;
  features: SxProps<Theme>;
  featureItem: SxProps<Theme>;
}

export const styles: HomePageStyles = {
  heroTextContainer: {
    textAlign: { xs: "center", md: "left" },
    pr: { xs: 0, md: 4 },
  },
  heroTitle: {
    fontSize: {
      xs: "2.5rem",
      sm: "3rem",
      md: "3.5rem",
    },
    fontWeight: 700,
    color: "primary.main",
  },
  heroSubtitle: {
    mb: 3,
    fontSize: {
      xs: "1rem",
      sm: "1.1rem",
      md: "1.25rem",
    },
  },
  heroButton: {
    mt: 2,
    px: 3,
    py: 1.5,
  },
  heroImageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  featuresSection: {
    py: 4,
  },
  features: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    mt: 4,
    gap: 4,
  },
  featureItem: {
    flex: 1,
    p: 7,
    height: "300px",
    borderRadius: 1,
    boxShadow: 5,
    mb: 1,
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
    },
  },
};
