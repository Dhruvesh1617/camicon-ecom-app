import axios from "axios";
import { toast } from "react-toastify";
import {
  createContext,
  useContext,
  useReducer
} from "react";
import {
  reducer,
  data
} from "../reducer/Datareducer";
// import {productDB as productData} from "../Database/productDB";
// import {useDataBase} from "../Database/productDB";
//const {ECOM_APP_BEURL}=process.env;

export const tokenConfig = () => {
  const token = localStorage.getItem("token");
  console.log("token is",token)
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }
  console.log(config)
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config;
}

const DataContext = createContext();
export function DataProvider({
  children
}) {

  //const productDB=useDataBase()
  // let productData=productDB



  const [{
    productData,
    cartItems,
    wishList,
    cartQuantity,
    searchedText,
    isAuthenticated,
    user
  }, dataDispatch] = useReducer(reducer, data);


  const loadData = async () => {
    try {
      const {
        data: productData
      } = await axios.get("http://localhost:4000/products")
      //console.log(productData)
      dataDispatch({
        type: "SET_PRODUCTS",
        payload: productData.products
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  const registerUser = async (name, email, password, state, navigate) => {
    try {
      toast.info("Registering...", {
        style: { backgroundColor: "grey",color:"white" },
				autoClose: 2000,
				hideProgressBar: true,
			});
      const res = await axios.post("http://localhost:4000/users/register", {
        name,
        email,
        password
      })
      //console.log(res.data)
      dataDispatch({
        type: "REGISTER_USER",
        payload: res.data
      })
      toast.success(res.data.message,{
          position: "top-right",
          style: { backgroundColor: "grey",color:"white"},
				autoClose: 2000,
				hideProgressBar: true,
          

      })
      navigate(state ?.from ? state.from : "/")
      //console.log(state ?.from)
    } catch (err) {
      console.log(err.message)
      toast.error(err.message,{
        position: "top-right",
        style: { backgroundColor: "red",color:"white" },
      autoClose: 2000,
      hideProgressBar: true,
        

    })
    }
  }
  const loginUser = async (email, password, state, navigate) => {
    try {
      const {
        data
      } = await axios.post("http://localhost:4000/users/login", {
        email,
        password
      })
      toast.success(data.message,{
        position: "top-right",
        style: { backgroundColor: "grey",color:"white"},
      autoClose: 2000,
      hideProgressBar: true,
        

    })
     //console.log("login data",data.user)
      dataDispatch({
        type: "LOGIN_USER",
        payload: data
      })
      navigate(state ?.from ? state.from : "/")
      //console.log(state.from)
    } catch (err) {
      toast.error(err.message,{
        position: "top-right",
        style: {backgroundColor:"red",color:"white"},
      autoClose: 2000,
      hideProgressBar: true,
        })
      console.log(err)
    }
  }

  const loadUser = async () => {
    try {
      const {
        data
      } = await axios.get("http://localhost:4000/users",tokenConfig())
      dataDispatch({
        type: "LOAD_USER",
        payload: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  const addToCart=async (userId,product)=>{
    try{
        const {data}=await axios.post(`http://localhost:4000/users/${userId}/cart`,{userId,product},tokenConfig())
        toast.success(data.message,{
          position: "top-right",
          style: { backgroundColor: "grey",color:"white"},
        autoClose: 2000,
        hideProgressBar: true,
          })
        //console.log(data)
        dataDispatch({type:"ADD_TO_CART",payload:data})
    }
    catch(err)
    {
      console.log(err)
      toast.error(err.message,{
        position: "top-right",
        style: {backgroundColor:"red",color:"white"},
      autoClose: 2000,
      hideProgressBar: true,
        })
    }
  }

  const incrementCartQuantity=async (cartId,productId,userId)=>{
    try{
         const {data}= await axios.post(`http://localhost:4000/users/${userId}/cart/update`,{cartId,productId,operation:"increment"},tokenConfig())
         toast.success(data.message,{
          position: "top-right",
          style: { backgroundColor: "grey",color:"white"},
        autoClose: 2000,
        hideProgressBar: true,
          })
          dataDispatch({type:"INCREMENT_OR_DECREMENT_ITEM",payload:data})
    }
    catch(err)
    {
      console.log(err)
      toast.error(err.message,{
        position: "top-right",
        style: {backgroundColor:"red",color:"white"},
      autoClose: 2000,
      hideProgressBar: true,
        })
    }
  }
  const decrementCartQuantity=async (cartId,productId,userId)=>{
    try{
          const {data}=await axios.post(`http://localhost:4000/users/${userId}/cart/update`,{cartId,productId,operation:"decrement"},tokenConfig())
          toast.success(data.message,{
            position: "top-right",
            style: { backgroundColor: "grey",color:"white"},
          autoClose: 2000,
          hideProgressBar: true,
            })
            dataDispatch({type:"INCREMENT_OR_DECREMENT_ITEM",payload:data})
    }
    catch(err)
    {
      console.log(err)
      toast.error(err.message,{
        position: "top-right",
        style: {backgroundColor:"red",color:"white"},
      autoClose: 2000,
      hideProgressBar: true,
        })
    }
  }

  const removeFromCart=async(userId,productId)=>
  {
        try
        {
            const {data}=await axios.post(`http://localhost:4000/users/${userId}/cart/remove`,{userId,productId},tokenConfig())
            toast.success(data.message,{
              position: "top-right",
              style: { backgroundColor: "grey",color:"white"},
            autoClose: 2000,
            hideProgressBar: true,
              })
            //console.log(data)
            dataDispatch({type:"REMOVE_FROM_CART",payload:data})
        }
        catch(err)
        {
          console.log(err.message)
          toast.error(err.message,{
            position: "top-right",
            style: {backgroundColor:"red",color:"white"},
          autoClose: 2000,
          hideProgressBar: true,
            })
        }
  }

  const addToWishlist=async (userId,product)=>
  {
      try{
           const {data}=await axios.post(`http://localhost:4000/users/${userId}/wishlist`,{userId,product},tokenConfig())
           toast.success(data.message,{
            position: "top-right",
            style: { backgroundColor: "grey",color:"white"},
          autoClose: 2000,
          hideProgressBar: true,
            })
           //console.log(data)
           dataDispatch({type:"ADD_TO_WISHLIST",payload:data})
           
      }
      catch(err)
      {
        toast.error(err.message,{
          position: "top-right",
          style: {backgroundColor:"red",color:"white"},
        autoClose: 2000,
        hideProgressBar: true,
          })
        console.log(err.message)
      }
  }

  const  removeFromWishlist=async (userId,product)=>
  {
    try{
       const {data}=await axios.post(`http://localhost:4000/users/${userId}/wishlist/remove`,{userId,product},tokenConfig())
       toast.success(data.message,{
        position: "top-right",
        style: { backgroundColor: "grey",color:"white"},
      autoClose: 2000,
      hideProgressBar: true,
        })
       //console.log(data)
       dataDispatch({type:"REMOVE_FROM_WISHLIST",payload:data})
    }
    catch(err)
    {
      toast.error(err.message,{
        position: "top-right",
        style: {backgroundColor:"red",color:"white"},
      autoClose: 2000,
      hideProgressBar: true,
        })
      
      console.log(err)
    }
  }
  const logOutUser = () => {
    toast.info("Logged Out",{
      position: "top-right",
      style: { backgroundColor: "grey",color:"white"},
    autoClose: 2000,
    hideProgressBar: true,
      })
    dataDispatch({
      type: "LOGOUT_USER"
    })
   
  }




  return ( 
<DataContext.Provider value = {
      {
        productData,
        cartItems,
        wishList,
        cartQuantity,
        isAuthenticated,
        searchedText,
        user,
        loadData,
        loadUser,
        registerUser,
        loginUser,
        logOutUser,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        incrementCartQuantity,
        decrementCartQuantity,
        dataDispatch
      }
    } >{children} 
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
};