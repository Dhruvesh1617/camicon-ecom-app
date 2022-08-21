import { useData } from "../context/Datacontext";
import { useTotalAmount } from "../customhooks/customHooks";
import ProductDescription from "../components/ProductDescription"
export function Cart() {
  const { cartItems, user } = useData();
    console.log(cartItems?.products)
    console.log(user?._id)
    const userId=user?._id
  const totalAmount =useTotalAmount(cartItems?.products);
  if (cartItems?.products?.length === 0) {
    return <h1 style={{ marginTop: "5rem" }}>Cart is empty</h1>;
  }
  return (
    <div>
      <h3>
        <strong>Cart</strong>
      </h3>
      {cartItems?.products.map((productItem) => (
        <ProductDescription productItem={productItem}  />
      ))}
      <div className="price">Total price is {totalAmount}</div>
    </div>
  );
}
