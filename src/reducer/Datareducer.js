
//import {productDB  as productData} from "../Database/productDB"
export const data = {
  productData:[],
  cartItems: [],
  wishList: [],
  cartQuantity: 0,
  searchedText:"",
  user:{},
  isAuthenticated:false,
};


export function reducer(state, action) {


  switch (action.type) {

    case "SET_PRODUCTS":
      return{...state,productData:action.payload}
    case "LOAD_USER":
      return{
          ...state,
          user:action.payload.user,
          wishList:action.payload.user?.wishList,
          cart:action.payload.user?.cart,
          cartQuantity:action.payload.user?.cart?.products?.length,
          isAuthenticated:true,

      }
    case "REGISTER_USER":
      localStorage.setItem("token",action.payload.token)
      localStorage.setItem("isAuthenticated",true)
      return{
        ...state,
        user:action.payload.user,
        isAuthenticated:true
      }
      case "LOGIN_USER":
        localStorage.setItem("token",action.payload.token)
        localStorage.setItem("isAuthenticated",true)
        return{
          ...state,
          user:action.payload.user,
          cartItems:action.payload.user?.cart,
          wishList:action.payload.user?.wishList,
          isAuthenticated:true
        }
      case "LOGOUT_USER":
        localStorage.removeItem("token")
        localStorage.removeItem("isAuthenticated")
         return{
           ...state,
          user:{},
          cartItems:[],
          wishList:[],
          isAuthenticated:false,
          cartQuantity:0
        }
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems:action.payload?.item
        
      };
    case "INCREMENT_OR_DECREMENT_ITEM":
      return {
        ...state,
        cartItems:action.payload?.item,
        
      };
   
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems:action.payload?.item,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList:action.payload?.item
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList:action.payload?.item
      };
    case "WISHLIST_TO_CART":
      return { ...state, cartItems: state.cartItems.concat(action.payload) };

    case "SEARCH":
      return {...state,searchedText:action.payload}
    // case "SEARCH":
    //   let value = action.payload.target.value.toLocaleLowerCase();
    //   console.log(
    //     state.productData.filter((item) => item.name.toLocaleLowerCase().includes(value))
    //   );
    //   return {
    //     ...state,productData:state.productData.filter((item)=>item.name.toLocaleLowerCase().includes(value))
    //   };
     
    default:
      return state;
  }
}
