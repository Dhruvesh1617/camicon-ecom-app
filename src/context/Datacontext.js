import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/Datareducer";
// import {productDB as productData} from "../Database/productDB";
// import {useDataBase} from "../Database/productDB";

const DataContext = createContext();


export function DataProvider({ children }) {

  //const productDB=useDataBase()
 // let productData=productDB
  const data = {
    productData:[],
    cartItems: [],
    wishList: [],
    cartQuantity: 0
  };
  

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
