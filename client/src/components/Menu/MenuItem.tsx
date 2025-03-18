// MenuItem.tsx
import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { MenuItem as MenuItemType } from "../../types";
import { styles } from "./MenuItem.styles";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        height="200"
        image={item.imageUrl || "/api/placeholder/400/140"}
        alt={item.name}
        sx={styles.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={styles.description}
        >
          {item.description}
        </Typography>
        <Box sx={styles.priceContainer}>
          <Typography variant="h6" color="primary">
            ${item.price.toFixed(2)}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {item.category}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
