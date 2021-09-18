import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const ProductItem = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(product));
  };

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 1000 }}>
        <CardMedia
          component="img"
          // height="345"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={addToCartHandler}>+ Add to cart</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
