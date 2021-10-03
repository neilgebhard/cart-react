import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => setElectronics(json));
  }, []);

  let numResults = electronics.length;

  return (
    <div>
      <h1>Electronics</h1>
      <Container>
        {numResults > 0 && (
          <p className="text-secondary">Showing {numResults} results</p>
        )}
        <Grid container spacing={4}>
          {electronics.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Electronics;
