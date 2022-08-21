import React from 'react'
import { useProductData } from '../context/Productcontext'

export  function Filter() {
    const {productDispatch,showInventory,showFastDelivery,sortBy,isBrand}=useProductData()
    return (
          <div className='side-nav-container'>
          <aside className="side-nav">
        <div className="filter-title space-between center pd2-l-r">
        <label style={{fontSize:"2rem"}}>Filter</label>
          <button
            style={{margin:"1rem"}}
            className="btn Primary-button"
            onClick={() => productDispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
        </div>
        <div className="filter">
        <div className="pd1 mg1-b vertical-card box-shadow">
        <label className="align-center" style={{margin:"0 1rem"}}>
          {" "}
          <input
            type="checkbox"
            checked={showInventory}
            onClick={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
          ></input>
          Include instock
        </label>
        <label className="align-center" style={{margin:"0 1rem"}}>
          <input
            type="checkbox"
            checked={showFastDelivery}
            onClick={() => productDispatch({ type: "SHOW_FAST_DELIVERY" })}
          />
          Fast Delivery
        </label>
        </div>
          <div className="pd1 mg1-b vertical-card box-shadow">
          <label className="align-center" style={{margin:"0 1rem"}}>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "PRICE_LOW_TO_HIGH"}
              onClick={() =>
                productDispatch({
                  type: "SORT_BY",

                  payload: "PRICE_LOW_TO_HIGH"
                })
              }
            />
            Price low to high
          </label>
          <label className="align-center" style={{margin:"0 1rem"}}>
            <input
              type="radio"
              name="sort"
              checked={sortBy === "PRICE_HIGH_TO_LOW"}
              onClick={() =>
                productDispatch({
                  type: "SORT_BY",

                  payload: "PRICE_HIGH_TO_LOW"
                })
              }
            />
            Price high to low
          </label>
    </div>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}} className="pd1 mg1-b vertical-card box-shadow">
      <label className="align-center" style={{margin:"0 2rem"}}>
        <input checked={isBrand==="Canon"} type="radio" onClick={()=>productDispatch({type:"IS_BRAND",payload:"Canon"})}>
        </input>
        Canon
      </label>
      <label className="align-center" style={{margin:"0 2rem"}}>
        <input checked={isBrand==="Nikon"} type="radio" onClick={()=>productDispatch({type:"IS_BRAND",payload:"Nikon"})}>
        </input>
        Nikon
      </label>
      <label className="align-center" style={{margin:"0 2rem"}}>
        <input checked={isBrand==="Sony"} type="radio" onClick={()=>productDispatch({type:"IS_BRAND",payload:"Sony"})}>
        </input>
        Sony
      </label>
    </div>
  </div>
        </aside>
     </div>
        
    )
}
