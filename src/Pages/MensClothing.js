import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const MensClothing = () => {
  const [mensClothing, setMensClothing] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => setMensClothing(json));
  }, []);

  return (
    <div>
      <h1>Men's Clothing</h1>
      <Container>
        <Grid container spacing={4}>
          {mensClothing.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MensClothing;
