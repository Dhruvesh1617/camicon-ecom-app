import { productReducer } from "../reducer/Productreducer";

const { createContext, useContext, useReducer } = require("react");
const Productcontext = createContext();

export const ProductDataProvider = ({ children }) => {
  const [{ showInventory, showFastDelivery, sortBy }, dispatch] = useReducer(
    productReducer,
    {
      showInventory: true,
      showFastDelivery: false,
      sortBy: null
    }
  );
  return (
    <>
    <Productcontext.Provider value={{showInventory,sortBy,showFastDelivery,productDispatch: dispatch}}>
        {children}
      </Productcontext.Provider>
    </>
  );
};

export const useProductData = () => useContext(Productcontext);
