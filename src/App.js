import "./styles.css";
import { ProductList } from "./components/productList";
import { Cart } from "./components/cart";
import { WishList } from "./components/WishList";
import { CartNavigation } from "./components/cartNavigation";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <CartNavigation />
      <Routes>
        <Route exact to="/" element={<ProductList />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      {/*{route === "products" && <ProductList />}
        {route === "cart" && <Cart />}
  {route === "wishlist" && <WishList />}*/}
    </div>
  );
}
