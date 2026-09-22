const RestaurantCard=(props)=>{
  console.log(props);
  const {resData}=props;
  return(
    <div className="res-card" style={{
  backgroundColor:"#f0f0f0",
}}>
  <img className="res-logo"
   src={"https://media-assets.swiggy.com/swiggy/image/upload/" +
          resData.info.cloudinaryImageId}  alt="res img"
  onError={(e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1547592180-85f173990554";}}></img>
      <h3>{resData.info.name}</h3>
      <h4><i>{resData.info.cuisines.join(" , ")}</i></h4>
      <h4>{resData.info.avgRating}</h4>
      <h4> {resData.info.sla.deliveryTime+" min"}</h4>
    </div>
  )
}

export default RestaurantCard;