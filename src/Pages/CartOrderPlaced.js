import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const CartOrderPlaced = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h5" gutterBottom>
          Order placed
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h6" sx={{ mt: 2 }} gutterBottom>
          Thank you for your purchase!
        </Typography>
        <Typography variant="subtitle1">
          Your order number is #12345678. We will email you a confirmation of
          your order.
        </Typography>
      </Paper>
    </Container>
  );
};

export default CartOrderPlaced;
