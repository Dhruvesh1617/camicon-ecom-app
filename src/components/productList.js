import { useData } from "../context/Datacontext";
import { useProductData } from "../context/Productcontext";
//import { productDB } from "../DataBase/productDB";
import { Link } from "react-router-dom";
/*const Products = [
  {
    id: 1,
    name: "Latte",
    price: 200,
    qty: 1
  },
  {
    id: 2,
    name: "Coffe",
    price: 256,
    qty: 1
  },
  {
    id: 3,
    name: "Tea",
    price: 110,
    qty: 1
  },
  {
    id: 4,
    name: "Samose",
    price: 80,
    qty: 1
  }
];*/

export const checkItem = (array, id) => {
  return array.find((itemdata) => itemdata.id === id);
};

export const ProductList = () => {
  const { productData, dataDispatch, wishList, cartItems } = useData();
  const {
    showInventory,
    showFastDelivery,
    sortBy,
    productDispatch
  } = useProductData();
  const getSortedData = (productList, { sortBy }) => {
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }
    return productList;
  };
  const getFilteredData = (
    productList,
    { showInventory, showFastDelivery }
  ) => {
    return productList
      .filter(({ inStock }) => (showInventory ? inStock : true))
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true));
  };
  const sortedData = getSortedData(productData, { sortBy });
  const filteredData = getFilteredData(sortedData, {
    showInventory,
    showFastDelivery
  });
  console.log(filteredData);
  return (
    <>
      <div style={{ marginTop: "4rem" }}>
        <input
          style={{ marginTop: "1rem" }}
          placeholder="search products by name"
          onChange={(event) => dataDispatch({ type: "SEARCH", payload: event })}
        />
        <fieldset className="fieldset">
          <label>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "PRICE_LOW_TO_HIGH"}
              onClick={() =>
                productDispatch({
                  type: "SORT_BY",

                  payload: "PRICE_LOW_TO_HIGH"
                })
              }
            />
            Price low to high
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "PRICE_HIGH_TO_LOW"}
              onClick={() =>
                productDispatch({
                  type: "SORT_BY",

                  payload: "PRICE_HIGH_TO_LOW"
                })
              }
            />
            Price high to low
          </label>
        </fieldset>
        <label>
          {" "}
          <input
            type="checkbox"
            checked={showInventory}
            onClick={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
          ></input>
          Include instock
        </label>
        <label>
          <input
            type="checkbox"
            checked={showFastDelivery}
            onClick={() => productDispatch({ type: "SHOW_FAST_DELIVERY" })}
          />
          Fast Delivery
        </label>
        <div>
          <button
            style={{ margin: "1rem" }}
            className="btn Primary-button"
            onClick={() => productDispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
        </div>
      </div>
      <h2>Products</h2>
      <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {filteredData.map((item) => (
          <div className="flexing border-div shadow">
            <div>
              <h3 className="heading align-center">{item.name}</h3>
              <img className="img" src={item.image} alt="productname" />
              <p>Rs.{item.price}</p>
              {item.inStock ? <div>in stock</div> : <div>out of stock</div>}
              {item.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>5 days minimum</div>
              )}
              <Link
                to={checkItem(cartItems, item.id) ? "/cart" : "/"}
                style={{ textDecoration: "none" }}
                onClick={() => {
                  if (!checkItem(cartItems, item.id)) {
                    dataDispatch({
                      type: "ADD_TO_CART",
                      payload: item
                    });
                  }
                }}
              >
                <button className="btn Primary-button">
                  {checkItem(cartItems, item.id) ? (
                    <div>Go to cart</div>
                  ) : (
                    <div>Add to cart</div>
                  )}
                </button>
              </Link>
              <svg
                aria-label="Unlike"
                className="_8-yf5 icon-button"
                fill="#ed4956"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                  style={{
                    fill: `${checkItem(wishList, item.id) ? "red" : "black"}`
                  }}
                  onClick={() => {
                    checkItem(wishList, item.id)
                      ? dataDispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          id: item.id
                        })
                      : dataDispatch({
                          type: "ADD_TO_WISHLIST",
                          payload: item
                        });
                  }}
                ></path>
              </svg>
              <button className="btn Secondary-button">Buy now</button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};
