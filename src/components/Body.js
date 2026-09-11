import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body=()=>{

 const [ListOfRestaurants,setListOfRestaurants]=useState(resList);

  return(
    <div className="body">
<div className="filter">
    <button className="filter-btn" onClick={()=>{
      const filteredList=  ListOfRestaurants.filter(res=>res.rating>4);
      setListOfRestaurants(filteredList)
// console.log(ListOfRestaurants);
    }}
        >Top Reated Restaurants</button>
     </div>
  <div className="res-container">
{
  ListOfRestaurants.map((ele)=>(<RestaurantCard key={ele.id} resData={ele} />) 
)
}

 
</div>
    </div>
  )
}
export default Body;