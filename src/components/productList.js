import { useData } from "../context/Datacontext";
import { useProductData } from "../context/Productcontext";
//import { productDB } from "../DataBase/productDB";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDataBase } from "../Database/productDB";
/*const Products = [
  {
    _id: 1,
    name: "Latte",
    price: 200,
    qty: 1
  },
  {
    _id: 2,
    name: "Coffe",
    price: 256,
    qty: 1
  },
  {
    _id: 3,
    name: "Tea",
    price: 110,
    qty: 1
  },
  {
    _id: 4,
    name: "Samose",
    price: 80,
    qty: 1
  }
];*/

export const checkItem = (array, _id) => {
  return array.find((itemdata) => itemdata._id === _id);
};

export const ProductList = () => {
  const { productData, dataDispatch, wishList, cartItems } = useData();
  const {
    showInventory,
    showFastDelivery,
    sortBy,
    isBrand,
    productDispatch
  } = useProductData();

  const prodData=useDataBase(); //database hook called

  useEffect(() =>
   { 
      dataDispatch({type:"SET_PRODUCT",payload:prodData})
  }, 
  [dataDispatch,prodData])

  const getBrandSort=(productList,{isBrand})=>
  {
      if(productList)
      {
        if(isBrand==="Canon")
        {
          return productList.filter(product=>product.brand==="Canon")
        }
        if(isBrand==="Nikon")
        {
          return productList.filter(product=>product.brand==="Nikon")
        }
        if(isBrand==="Sony")
        {
          return productList.filter(product=>product.brand==="Sony")
        }
        return productList;
      }
      return null;
  }

  const getSortedData = (productList, { sortBy }) => {
    if(productList)
    {
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }
    return productList;
  }
  return null;
  };
  const getFilteredData = (
    productList,
    { showInventory, showFastDelivery }
  ) => {
    return productList?
     ( productList.filter(({ inStock }) => (showInventory ? inStock : true))
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))):(<div>Loading...</div>)
  };
  const sortedData = getSortedData(productData, { sortBy });
  const getBrandData=getBrandSort(sortedData,{isBrand});
  const filteredData = getFilteredData(getBrandData, {
    showInventory,
    showFastDelivery
  });
  console.log(filteredData);
  return (
    <>
      <div style={{ marginTop: "4rem" }}>
        <input
          className="Search-bar"
          placeholder="search products by name"
          onChange={(event) =>  dataDispatch({ type: "SEARCH", payload: event })}
        />
        </div>
        <div>
        <div className="side-nav-container">
          <aside className="side-nav">
        <div className="filter-title space-between center pd2-l-r">
        <label style={{fontSize:"2rem"}}>Filter</label>
          <button
            style={{margin:"1rem"}}
            className="btn Primary-button"
            onClick={() => productDispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
        </div>
        <div className="filter">
        <div className="pd1 mg1-b vertical-card box-shadow">
        <label className="align-center" style={{margin:"0 1rem"}}>
          {" "}
          <input
            type="checkbox"
            checked={showInventory}
            onClick={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
          ></input>
          Include instock
        </label>
        <label className="align-center" style={{margin:"0 1rem"}}>
          <input
            type="checkbox"
            checked={showFastDelivery}
            onClick={() => productDispatch({ type: "SHOW_FAST_DELIVERY" })}
          />
          Fast Delivery
        </label>
        </div>
          <div className="pd1 mg1-b vertical-card box-shadow">
          <label className="align-center" style={{margin:"0 1rem"}}>
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
          <label className="align-center" style={{margin:"0 1rem"}}>
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
    </div>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}} className="pd1 mg1-b vertical-card box-shadow">
      <label className="align-center" style={{margin:"0 2rem"}}>
        <input checked={isBrand==="Canon"} type="radio" onClick={()=>productDispatch({type:"IS_BRAND",payload:"Canon"})}>
        </input>
        Canon
      </label>
      <label className="align-center" style={{margin:"0 2rem"}}>
        <input checked={isBrand==="Nikon"} type="radio" onClick={()=>productDispatch({type:"IS_BRAND",payload:"Nikon"})}>
        </input>
        Nikon
      </label>
      <label className="align-center" style={{margin:"0 2rem"}}>
        <input checked={isBrand==="Sony"} type="radio" onClick={()=>productDispatch({type:"IS_BRAND",payload:"Sony"})}>
        </input>
        Sony
      </label>

    </div>
  </div>
        </aside>
        </div>
      <div  style={{position:"relative",marginLeft:"13rem"}}>
      <ul  className="Products-alignment mrgn-t">
        {productData?(filteredData.map(({_id,name,image,price,inStock,fastDelivery}) => (
          <div key={_id} style={{marginLeft:"3rem"}} className="card-div card-vertical box-shadow card-align">
            <div>
              <h3 className="heading align-center">{name}</h3>
              <img className="img" src={image} alt="productname" />
              <p>Rs.{price}</p>
              {inStock ? <div>in stock</div> : <div>out of stock</div>}
              {fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>5 days minimum</div>
              )}
              <Link
                to={checkItem(cartItems,_id) ? "/cart" : "/"}
                style={{ textDecoration: "none" }}
                onClick={() => {
                  if (!checkItem(cartItems,_id)) {
                    dataDispatch({
                      type: "ADD_TO_CART",
                      payload:{_id,name,image,price,inStock,fastDelivery,qty:1}
                    });
                  }
                }}
              >
                <button className="btn Primary-Button">
                  {checkItem(cartItems, _id) ? (
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
                w_idth="24"
              >
                <path
                  d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                  style={{
                    fill: `${checkItem(wishList, _id) ? "red" : "black"}`
                  }}
                  onClick={() => {
                    checkItem(wishList, _id)
                      ? dataDispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          _id: _id
                        })
                      : dataDispatch({
                          type: "ADD_TO_WISHLIST",
                          payload: {_id,name,image,price,inStock,fastDelivery}
                        });
                  }}
                ></path>
              </svg>
              <button className="btn Secondary-Button">Buy now</button>
            </div>
          </div>
        ))):(<div style={{position:"relative",right:"25rem",bottom:"25rem"}}>Loading...</div>)
          }
      </ul>
      </div>
      </div>
    </>
  );
};
