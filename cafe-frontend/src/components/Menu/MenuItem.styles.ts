// MenuItem.styles.ts
import { SxProps, Theme } from "@mui/material";

interface MenuItemStyles {
  card: SxProps<Theme>;
  media: SxProps<Theme>;
  description: SxProps<Theme>;
  priceContainer: SxProps<Theme>;
  price: SxProps<Theme>;
  category: SxProps<Theme>;
}

export const styles: MenuItemStyles = {
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: "200",
  },
  description: {
    mb: 2,
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: "primary",
  },
  category: {
    color: "text.secondary",
  },
};
