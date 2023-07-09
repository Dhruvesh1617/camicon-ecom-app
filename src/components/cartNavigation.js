import { useData } from "../context/Datacontext";
import { Link } from "react-router-dom";
export const CartNavigation = () => {
  const { cartItems, wishList } = useData();
  return (
    <div>
      <nav class="Nav-Container fixed">
        <div>
          <Link style={{ textDecoration: "none" }} to="/">
            <header className="Navigation-header text-decoration-none">
              Camicon
            </header>
          </Link>
        </div>
        <div>
          <ul style={{listStyle:"none",display:"flex",marginTop:"3rem"}}>
            <Link to="/cart" className="text-decoration-none nav-link color-link">
              <li class="cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" 
              viewBox="0 0 24 24" fill="black" stroke="currentColor" 
              stroke-width="2.5" stroke-linecap="round" 
              stroke-linejoin="round" 
              class="feather feather-shopping-cart">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
               
         {cartItems?.products?.length>0?
         (<span className="icon-badge badge-align badge-color">{cartItems?.products?.length}</span>):
         (<span></span>)}

              </li>
            </Link>
            <Link
              to="/wishlist"
              className="text-decoration-none nav-link color-link"
            >
              <li class="heart">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" 
              height="30" viewBox="0 0 24 24" fill="Black" 
              stroke="currentColor" stroke-width="2.5" 
              stroke-linecap="round" stroke-linejoin="round" 
              class="feather feather-heart">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 
            5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 
            21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> 
               {wishList?.products?.length>0?
               <span className="icon-badge badge-align badge-color">{wishList?.products?.length}</span>:
               <span></span>}
              </li>
            </Link>
            <Link
              style={{ color: "black" }}
              className="text-decoration-none nav-link"
              to="/login"
              >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" 
            height="30" viewBox="0 0 24 24" fill="black" stroke="Black" 
            stroke-width="2.5" stroke-linecap="round" 
            stroke-linejoin="round" class="feather feather-user">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/></svg>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};