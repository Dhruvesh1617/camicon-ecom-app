import "./styles.css";
import { ProductList } from "./components/productList";
import { Cart } from "./components/cart";
import { WishList } from "./components/WishList";
import { CartNavigation } from "./components/cartNavigation";
import { Routes, Route } from "react-router-dom";
import {PrivateAuth} from "./components/privateAuth";
import { Login } from "./components/Login";


export default function App() {
return (
    <div className="App">
      <CartNavigation />
      <Routes>
        <Route exact to="/" element={<ProductList />} />
        <PrivateAuth exact path="/cart" element={<Cart />} />
        <PrivateAuth path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/*{route === "products" && <ProductList />}
        {route === "cart" && <Cart />}
  {route === "wishlist" && <WishList />}*/}
    </div>
  );
}
