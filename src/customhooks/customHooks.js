 const useSortedData = (productList, sortBy ) => {
    if(productList)
    {
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }
    return productList;
  }
  return null;
  };

 const useFilteredData = (
    productList,
     showInventory, showFastDelivery 
  ) => {
    return productList?
     ( productList.filter(({ inStock }) => (showInventory ? inStock : true))
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))):(<div>Loading...</div>)
  };


   const useBrandSort=(productList,isBrand)=>
  {
      if(productList)
      {
        if(isBrand==="Canon")
        {
          return productList.filter(product=>product.brand==="Canon")
        }
        if(isBrand==="Nikon")
        {
          return productList.filter(product=>product.brand==="Nikon")
        }
        if(isBrand==="Sony")
        {
          return productList.filter(product=>product.brand==="Sony")
        }
        return productList;
      }
      return null;
  }

   const checkItem = (obj, _id) => {
    return obj?.products?.length>0 && obj?.products?.filter(({product}) => product._id === _id);
  };

  const checkwishlist=(obj,_id)=>{
   return obj?.products?.find((productItem)=>productItem._id===_id)
  }
  
  function useTotalAmount(cartData) {
    return cartData?.reduce(
      (total,{product,qty}) => total + product.price * qty,
      0
    );
  }
  

  export{useSortedData,useFilteredData,useBrandSort,useTotalAmount,checkItem,checkwishlist}