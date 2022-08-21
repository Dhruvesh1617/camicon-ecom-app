import { useData } from "../context/Datacontext";
import { checkItem } from "../customhooks/customHooks";

export const WishList = () => {
  const { wishList, cartItems, dataDispatch } = useData();
  if (wishList?.products?.length === 0) {
    return <h1 style={{ marginTop: "5rem" }}>WishList is empty</h1>;
  }
  return (
    <>
      <h2>WishList</h2>
      <ul>
        {wishList?.products.map((wishListItem) => (
          <div className="card-div wishlist-card shadow">
            <img
              className="img"
              src={wishListItem.image}
              alt="product-details"
            />
            <h3 className="heading">{wishListItem.name}</h3>
            
            <p>Rs.{wishListItem.price}</p>
            {wishListItem.inStock ? <div>in stock</div> : <div>out of stock</div>}
              {wishListItem.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>5 days minimum</div>
              )}
            <button
              className="remove_button action-button sm"
              onClick={() =>
                dataDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  _id: wishListItem._id
                })
              }
            >
              X
            </button>
            <button
              className="btn Primary-button"
              onClick={() =>
                !checkItem(cartItems?.products, wishListItem._id)
                  ? dataDispatch({
                      type: "WISHLIST_TO_CART",
                      payload: wishListItem
                    })
                  : null
              }
            >
              add to cart{" "}
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};
