import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Box sx={{ fontWeight: 'bold', mt: 1}}>${product.cost}</Box>
        <Rating sx={{ mt: 1 }} name="read-only" value={product.rating} readOnly />
      </CardContent>
      <CardActions>
        <Button
          className="explore-button"
            variant="contained"
            style={{color: "white",  width:"100%"}}
          >
            {handleAddToCart}
          </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
