import { Switch, Route, Redirect } from "react-router-dom";
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
          <Redirect to="/mens-clothing" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
