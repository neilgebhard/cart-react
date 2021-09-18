import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Jewelry = () => {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setJewelry(json));
  }, []);

  return (
    <div>
      <h1>Jewelry</h1>
      <Container>
        <Grid container spacing={4}>
          {jewelry.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Jewelry;
