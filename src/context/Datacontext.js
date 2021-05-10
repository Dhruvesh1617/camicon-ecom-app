import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/Datareducer";
import {productDB as productData} from "../Database/productDB"
const DataContext = createContext();

const data = {
  productData,
  cartItems: [],
  wishList: [],
  cartQuantity: 0
};
export function DataProvider({ children }) {
  const [{ productData,cartItems, wishList, cartQuantity }, dispatch] = useReducer(reducer,data);
  return (
    <DataContext.Provider value={{ productData,cartItems, wishList, cartQuantity, dataDispatch: dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
};
