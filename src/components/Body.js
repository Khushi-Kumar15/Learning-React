import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";



const Body=()=>{

 const [ListOfRestaurants,setListOfRestaurants]=useState([]);

 const [filteredRestaurant,setFilteredrestaurant]=useState([]);

 useEffect(()=>{
  fetchData();
  
 },[]);

 const [searchText,setSearchText]=useState("");

 const fetchData=async ()=>{
  const data=await fetch("https://namastedev.com/api/v1/listRestaurants");
  const json=await data.json();

  console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  
  setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredrestaurant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  
 }

//  if(ListOfRestaurants.length==0){
//   return <Shimmer />
//  }
 
 

  return ListOfRestaurants.length==0 ? <Shimmer /> : (
    <div className="body">
      
      
<div className="filter">
  <div className="search">
<input type="text" className="search-box" value={searchText} onChange={(e)=>{
  setSearchText(e.target.value);
}}/>
<button onClick={()=>{

 const filteredRes= ListOfRestaurants.filter((res)=>{
   return  res.info.name.toLowerCase().includes(searchText.toLowerCase());
 
  }
  )
  setFilteredrestaurant(filteredRes);

}}>Search</button>
  </div>
    <button className="filter-btn" onClick={()=>{
      const filteredList=  ListOfRestaurants.filter(res=>res.info.avgRating>4.6);
      setFilteredrestaurant(filteredList)

    }}
        >Top Reated Restaurants</button>
     </div>
  <div className="res-container">
{
  filteredRestaurant.map((ele)=>(<RestaurantCard key={ele.info.id} resData={ele} />) 
)
}

 
</div>
    </div>
  )
}
export default Body;