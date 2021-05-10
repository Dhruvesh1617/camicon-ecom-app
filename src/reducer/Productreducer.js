export function productReducer(state, action) {
    switch (action.type) {
      case "SEARCH":
        let value = action.payload.target.value;
        console.log(value);
        return {
          ...state,
          productData: state.productData.filter((item) =>
            item.name.includes(value)
          )
        };
      case "TOGGLE_INVENTORY":
        return { ...state, showInventory: !state.showInventory };
      case "SHOW_FAST_DELIVERY":
        return { ...state, showFastDelivery: !state.showFastDelivery };
      case "SORT_BY":
        return { ...state, sortBy: action.payload };
      case "CLEAR":
        return {
          ...state,
          sortBy: null,
          showFastDelivery: false,
          showInventory: false
        };
      default:
        return state;
    }
  }
  