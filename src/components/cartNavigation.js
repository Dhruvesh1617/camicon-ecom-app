import { useData } from "../context/Datacontext";
import { Link } from "react-router-dom";
export const CartNavigation = () => {
  const { cartItems, wishList } = useData();
  return (
    <div>
      <nav class="Navigation-container">
        <div>
          <Link style={{ textDecoration: "none" }} to="/">
            <header className="Navigation-header text-decoration-none">
              Camicon
            </header>
          </Link>
        </div>
        <div>
          <ul className="nav-links">
            <Link to="/cart" className="text-decoration-none link">
              <li class="cart">
                <svg
                  style={{ height: "1.5rem" }}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="shopping-cart"
                  class="svg-inline--fa fa-shopping-cart fa-w-18"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  ></path>
                </svg>
                <span class="icon-badge badge-color">{cartItems.length}</span>
              </li>
            </Link>
            <Link to="/wishlist" className="text-decoration-none link">
              <li class="heart">
                <svg
                  style={{ height: "1.5rem" }}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  class="svg-inline--fa fa-heart fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>
                <span class="icon-badge badge-color">{wishList.length}</span>
              </li>
            </Link>
            <Link
              style={{ color: "white" }}
              className="text-decoration-none link"
              to="/login"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxnDMDFeS00roEY5FQQgNkhFm9igKgHyUhaGxsQJtwSwM8dIQ064Fe25IbzVHZALWiB0&usqp=CAU"
                class="login-img"
              alt="login-image"/>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};
