import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const WomensClothing = () => {
  const [womensClothing, setWomensClothing] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => setWomensClothing(json));
  }, []);

  let numResults = womensClothing.length;

  return (
    <div>
      <h1>Women's Clothing</h1>
      <Container>
        {numResults > 0 && (
          <p className="text-secondary">Showing {numResults} results</p>
        )}
        <Grid container spacing={4}>
          {womensClothing.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default WomensClothing;
