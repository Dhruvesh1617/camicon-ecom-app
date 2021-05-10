
import {productDB  as productData} from "../Database/productDB"
export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload),
        cartQuantity: state.cartQuantity + 1
      };
    case "INCREMENT":
      return {
        ...state,
        cartItems: state.cartItems.map((itemdata) =>
          itemdata.id === action.id
            ? { ...itemdata, qty: itemdata.qty + 1 }
            : itemdata
        ),
        cartQuantity: state.cartQuantity + 1
      };
    case "DECREMENT":
      return {
        ...state,
        cartItems: state.cartItems.map((itemdata) =>
          itemdata.id === action.id && itemdata.qty > 0
            ? { ...itemdata, qty: itemdata.qty - 1 }
            : itemdata
        )
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (itemdata) => itemdata.qty === 0 && itemdata.id !== action.id
        )
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.concat(action.payload)
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter((itemdata) => action.id !== itemdata.id)
      };
    case "WISHLIST_TO_CART":
      return { ...state, cartItems: state.cartItems.concat(action.payload) };
    case "SEARCH":
      let value = action.payload.target.value.toLocaleLowerCase();
      console.log(
        state.productData.filter((item) => item.name.toLocaleLowerCase().includes(value))
      );
      return {
        ...state,productData:productData.filter((item)=>item.name.toLocaleLowerCase().includes(value))
      };
    default:
      return state;
  }
}
