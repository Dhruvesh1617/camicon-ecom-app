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
      const response= await axios.get("https://camicon-backend.herokuapp.com/products")
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






{/*export const productDB = [
  {
    id: faker.random.uuid(),
    name: "Sony Alpha a6400 Mirrorless Digital Camera",
    image:
      "https://static.bhphoto.com/images/images2500x2500/1548254228_1453771.jpg",
    inStock: faker.random.boolean(),
    price: 239000,
    qty: 1,
    fastDelivery: faker.random.boolean()
  },
  {
    id: faker.random.uuid(),
    name: "Canon EOS R Mirrorless Digital Camera",
    image:
      "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c26ad194234d42b3cd9e582a21c99b",
    inStock: faker.random.boolean(),
    price: 302000,
    qty: 1,
    fastDelivery: faker.random.boolean()
  },
  {
    id: faker.random.uuid(),
    name: "Canon Eos Rebel SL3",
    image:
      "https://1.img-dpreview.com/files/p/E~TS590x442~articles/5051107755/sl3-white-front-from-above.jpeg",
    inStock: faker.random.boolean(),
    price: 115000,
    qty: 1,
    fastDelivery: faker.random.boolean()
  },
  {
    id: faker.random.uuid(),
    name: "Nikon D35000 DSLR Camera",
    image:
      "https://cdn1.smartprix.com/rx-in35FzmKF-w1200-h1200/nikon-d3500-dslr-cam.jpg",
    inStock: faker.random.boolean(),
    price: 198000,
    qty: 1,
    fastDelivery: faker.random.boolean()
  },
  {
    id: faker.random.uuid(),
    name: "Sony Alpha A200K 10.2MP Digital SLR Camera ",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51IirwmpO6L._AC_SX355_.jpg",
    inStock: faker.random.boolean(),
    price: 178000,
    qty: 1,
    fastDelivery: faker.random.boolean()
  }
];*/}
