import { productReducer } from "../reducer/Productreducer";

const { createContext, useContext, useReducer } = require("react");
const Productcontext = createContext();
const product_filtering=  {
  showInventory: true,
  showFastDelivery: false,
  sortBy: null,
  isBrand:null,
}
export const ProductDataProvider = ({ children }) => {
  const [{ showInventory, showFastDelivery, sortBy,isBrand }, dispatch] = useReducer(productReducer,product_filtering);
  return (
    <>
    <Productcontext.Provider value={{showInventory,sortBy,showFastDelivery,isBrand,productDispatch: dispatch}}>
        {children}
      </Productcontext.Provider>
    </>
  );
};

export const useProductData = () => useContext(Productcontext);
