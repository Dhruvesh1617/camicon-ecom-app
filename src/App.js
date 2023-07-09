import "./styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { ProductList } from "./components/productList";
import { Cart } from "./components/cart";
import { WishList } from "./components/WishList";
import { CartNavigation } from "./components/cartNavigation";
import { Routes, Route } from "react-router-dom";
import {PrivateAuth} from "./components/privateAuth";
//import { Login } from "./components/Login";
import {Register}  from "./components/Register";
import {useData} from "./context/Datacontext";
import { Login1 } from "./components/Login1";


export default function App() {
const {loadData,loadUser}=useData()
useEffect(() => {
  let isMount=true;
  if(isMount)
  {
    loadData()
    loadUser()
  }
  return () => {
    isMount=false
  }
}, [])


return (
    <div className="App">
      <CartNavigation />
      <ToastContainer/>
      <Routes>
        <Route exact to="/" element={<ProductList />} />
        <PrivateAuth exact path="/cart" element={<Cart />} />
        <PrivateAuth exact path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
      {/*{route === "products" && <ProductList />}
        {route === "cart" && <Cart />}
  {route === "wishlist" && <WishList />}*/}
    </div>
  );
}
