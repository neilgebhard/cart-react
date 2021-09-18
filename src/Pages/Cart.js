import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CartOrderPlaced from "./CartOrderPlaced";

const Cart = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  const handleRemove = (product) => {
    dispatch(cartActions.removeFromCart(product));
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    dispatch(cartActions.clearCart());
  };

  if (orderPlaced) {
    return <CartOrderPlaced />;
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h5" gutterBottom>
          Shopping Cart
        </Typography>
        <Divider variant="middle" />
        <List disablePadding>
          {cart.map((product) => (
            <>
              <ListItem key={product.cartId} sx={{ py: 1, px: 0 }}>
                <ListItemText
                  primary={product.title}
                  secondary={product.category}
                />
                <Typography variant="body2">
                  ${product.price.toFixed(2)}
                </Typography>
              </ListItem>
              <Button size="small" onClick={() => handleRemove(product)}>
                Remove
              </Button>
            </>
          ))}
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Shipping" />
            <Typography variant="body2">Free</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              ${cartTotal.toFixed(2)}
            </Typography>
          </ListItem>
        </List>

        {cart.length > 0 && (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handlePlaceOrder}
              sx={{ mt: 3, ml: 1 }}
            >
              Place order
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Cart;
