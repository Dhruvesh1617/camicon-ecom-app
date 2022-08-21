import React from 'react';
import {Link} from 'react-router-dom';
import { useData } from '../context/Datacontext';
import { checkItem,checkwishlist } from '../customhooks/customHooks';


export const Card=({item:{_id,name,image,price,inStock,fastDelivery}})=> {
  const {cartItems,user,wishList,addToCart,addToWishlist,removeFromWishlist}=useData()
  const userId=user?._id;
  //console.log("userId",user?._id)
     console.log(_id)
    return (
        <>
           <div key={_id} className="grd-container">
            <div  className="card-div card-vertical box-shadow card-align">
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
                  if (checkItem(cartItems,_id)?.length===0 || checkItem(cartItems,_id)===false) {
                  addToCart(userId,_id) //passing data of cart to BE
                }}}>
                <button className="btn Primary-Button">
                  {checkItem(cartItems, _id).length > 0 ? (
                    "Go to cart"
                  ) : (
                    "add to cart"
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
                    fill: `${checkwishlist(wishList, _id) ? "red" : "black"}`
                  }}
                  onClick={()=>{
                    checkwishlist(wishList, _id)
                      ? removeFromWishlist(userId,_id)
                      :addToWishlist(userId,_id)
                  }}
                ></path>
              </svg>
            </div>
          </div>   
        </>
    )
}

