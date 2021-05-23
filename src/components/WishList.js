import { useData } from "../context/Datacontext";
import { checkItem } from "../components/productList";

export const WishList = () => {
  const { wishList, cartItems, dataDispatch } = useData();
  if (wishList.length === 0) {
    return <h1 style={{ marginTop: "5rem" }}>WishList is empty</h1>;
  }
  return (
    <>
      <h2>WishList</h2>
      <ul>
        {wishList.map((wishListItem) => (
          <div className="border-div shadow flexing">
            <img
              className="img"
              src={wishListItem.image}
              alt="product-details"
            />
            <h3 className="heading">{wishListItem.name}</h3>
            <p>Rs.{wishListItem.price}</p>
            <button
              className="remove_button"
              onClick={() =>
                dataDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  id: wishListItem.id
                })
              }
            >
              X
            </button>
            <button
              className="btn Primary-button"
              onClick={() =>
                !checkItem(cartItems, wishListItem.id)
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
