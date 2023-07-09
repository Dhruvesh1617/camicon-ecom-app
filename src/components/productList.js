import {useData} from "../context/Datacontext";
import {useProductData} from "../context/Productcontext";
//import { productDB } from "../DataBase/productDB";
import {useEffect,useState} from "react";

import {Filter} from "../components/Filter";
import {useSortedData,useFilteredData,useBrandSort} from "../customhooks/customHooks";
import { Card} from "../components/Card";

export const ProductList = () => {
    const {
      productData,
      dataDispatch,
      searchedText
    } = useData();
    const {
      showInventory,
      showFastDelivery,
      sortBy,
      isBrand,
    } = useProductData();
    const [searchedData, setSearchedData] = useState()
    
     
    const sortedData = useSortedData(productData, sortBy);
    const getBrandData = useBrandSort(sortedData, isBrand);
    const filteredData = useFilteredData(getBrandData,
      showInventory,
      showFastDelivery
    );

    const sortedSearchedData=useSortedData(searchedData,sortBy);
    const brandSearchedData=useBrandSort(sortedSearchedData,isBrand);
    const filterSearchedData=useFilteredData(brandSearchedData,showInventory,showFastDelivery)
    useEffect(() => {
      if (searchedText === "") {
        setSearchedData([])
      }
      let searchedItem = filteredData && filteredData
        .filter((item) => item.name.toLowerCase().includes(searchedText.toLowerCase()))
      console.log(searchedItem)
      setSearchedData(searchedItem)
      return () => setSearchedData([])
    }, [searchedText,filteredData])


    console.log(filteredData);
    if (searchedText && searchedData.length === 0) {
      return ( 
      <>
      <div style = {{marginTop: "4rem"}} >
        <input className = "Search-bar"
        placeholder = "search products by name"
        onChange = {
          (event) => dataDispatch({
            type: "SEARCH",
            payload: event.target.value
          })
        }
        /> 
        </div> 
        <div>
        <Filter/>
        <div className = "items-container" >
        <ul className = "Products-alignment" > {
          productData ? (filteredData.map((item) => ( 
            <Card item ={item}/>
          ))) : ( < div > Loading... </div>)
            } 
            </ul> 
            </div> 
            </div> 
            </>
        );
      }

      else if (!searchedData) {
        return(
          <>
        <div style = {{marginTop: "4rem"}} >
        <input className = "Search-bar"
        placeholder = "search products by name"
        onChange = {
          (event) => dataDispatch({
            type: "SEARCH",
            payload: event.target.value
          })
        }
        /> 
        </div> 
        <div>
        <Filter/>
        <div className = "items-container" >
        <ul className = "Products-alignment" > {
          productData ? (filteredData.map((item) => ( 
            <Card item ={item}/>
          ))) : ( < div > Loading... </div>)
            } 
            </ul> 
            </div> 
            </div> 
            </>
        )
        
        }
        else {
          return(
            <>
          <div style = {{marginTop: "4rem"}} >
          <input className = "Search-bar"
          placeholder = "search products by name"
          onChange = {
            (event) => dataDispatch({
              type: "SEARCH",
              payload: event.target.value
            })
          }
          /> 
          </div> 
          <div>
          <Filter/>
          <div className = "items-container" >
          <ul className = "Products-alignment" >
          {(!searchedData || searchedData.length===0)?
            productData ? (filteredData.map((item) => ( 
              <Card item ={item}/>
            ))) : ( <div> Loading... </div>):(
              productData?(filterSearchedData.map((item)=>(
                <Card item={item}/>
              ))):(<div>Loading...</div>)
              )}
              </ul>
        </div> 
          </div> 
          </>
          )
          
              };
            }