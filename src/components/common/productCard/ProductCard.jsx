import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {


  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia sx={{ height: 300 }} image={item.img} title={`image ${item.title}`} />
      <CardContent sx={{ height: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {item.description}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          AR$ {item.price}
        </Typography>
      </CardContent>
      <CardActions>

          {
          item.stock > 0 ?
          <Link to={`/itemDetail/${item.id}`}>
            <Button sx={{ mt: 18 , width: 1 }} size="large" variant="outlined">
              Ver detalle
            </Button>
            </Link> : <Button variant="contained" disabled sx={{ mt: 18 , width: 1 }} size="large" >Sin stock</Button>
        }
      </CardActions>
    </Card>
  );
};

export default ProductCard;
