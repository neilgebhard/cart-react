import { Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/Home";
import ElectronicsPage from "./Pages/Electronics";
import JewelryPage from "./Pages/Jewelry";
import MensClothingPage from "./Pages/MensClothing";
import WomensClothingPage from "./Pages/WomensClothing";
import CartPage from "./Pages/Cart";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/electronics">
          <ElectronicsPage />
          {/* <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                ></Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                ></Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  sx={{ p: 2, display: "flex", flexDirection: "column" }}
                ></Paper>
              </Grid>
            </Grid> */}
        </Route>
        <Route path="/jewelry">
          <JewelryPage />
        </Route>
        <Route path="/mens-clothing">
          <MensClothingPage />
        </Route>
        <Route path="/womens-clothing">
          <WomensClothingPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
