import React from 'react';
import { useData } from '../context/Datacontext';


function ProductDescription({productItem}) {
    const {removeFromCart,incrementCartQuantity,decrementCartQuantity,cartItems,user}=useData()
    const cartId=cartItems?._id
    const userId=user?._id
    const productId=productItem?._id
    return (
        <>
        <div key={productItem.product?._id} className="card-div shadow">
          <div className="cart-card">
            <h3 className="heading">{productItem.product?.name}</h3>
            <img className="img" src={productItem.product?.image} alt={productItem.product?.name} />
            <p>Rs.{productItem.product?.price}</p>
            <button className="action-button sm" onClick={()=>incrementCartQuantity(cartId,productId,userId)}>
              +
            </button>
           {productItem.qty===0?0:<p>Quantity:{productItem?.qty}</p>}
            <button disabled={productItem.qty===1} className="action-button sm decrease-quantity" onClick={()=>decrementCartQuantity(cartId,productId,userId)}>
              -
            </button>
            <button
              className="remove_button action-button sm"
              onClick={() =>removeFromCart(userId,productId)}
            >
              X
            </button>
          </div>
        </div>

        </>
    )
}

export default ProductDescription
