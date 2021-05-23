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
      {cartItems.map(({ name, image, price, id, qty }) => (
        <div className="border-div shadow">
          <div className="flexing">
            <h3 className="heading align-center">{name}</h3>
            <img className="img" src={image} alt="productname" />
            <p>Rs.{price}</p>
            <button onClick={() => dataDispatch({ type: "INCREMENT", id: id })}>
              +
            </button>
            <p>Quantity:{qty}</p>
            <button onClick={() => dataDispatch({ type: "DECREMENT", id: id })}>
              -
            </button>
            <button
              className="remove_button"
              onClick={() => dataDispatch({ type: "REMOVE_FROM_CART", id: id })}
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
