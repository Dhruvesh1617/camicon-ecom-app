import { useData } from "../context/Datacontext";

export function Cart() {
  const { cartItems, dataDispatch } = useData();
  function getTotalAmount(cartData) {
    return cartData.reduce(
      (total, currentvalue) => total + currentvalue.price * currentvalue.qty,
      0
    );
  }
  const totalAmount = getTotalAmount(cartItems);
  if (cartItems.length === 0) {
    return <h1 style={{ marginTop: "5rem" }}>Cart is empty</h1>;
  }
  return (
    <div>
      <h3>
        <strong>Cart</strong>
      </h3>
      {cartItems.map(({ name, image, price, _id, qty }) => (
        <div className="card-div shadow">
          <div className="cart-card">
            <h3 className="heading">{name}</h3>
            <img className="img" src={image} alt="productname" />
            <p>Rs.{price}</p>
            <button className="action-button sm" onClick={() => dataDispatch({ type: "INCREMENT", _id: _id })}>
              +
            </button>
            <p>Quantity:{qty}</p>
            <button className="action-button sm decrease-quantity" onClick={() => dataDispatch({ type: "DECREMENT", _id: _id })}>
              -
            </button>
            <button
              className="remove_button action-button sm"
              onClick={() => dataDispatch({ type: "REMOVE_FROM_CART", _id: _id })}
            >
              X
            </button>
          </div>
        </div>
      ))}
      <div className="price">Total price is {totalAmount}</div>
    </div>
  );
}
