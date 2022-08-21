//import faker from "faker";
import axios from "axios"
import { useEffect,useState} from "react";


 export const useDataBase= () => {
  const [productDB, setDB] = useState(null);
  //let product=[...productDB];
  //console.log("Product data is:",product)
  useEffect(() => {
    (async () => {
      try{
      const response= await axios.get("http://localhost:3001/products")
          setDB(response.data.products);
           console.log(response.data);
        }
        catch(error)
        {
          console.log(error);
        }
    })();
  }, []);
  return productDB;
};







