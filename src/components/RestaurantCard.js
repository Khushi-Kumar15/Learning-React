const RestaurantCard=(props)=>{
  console.log(props);
  const {resData}=props;
  return(
    <div className="res-card" style={{
  backgroundColor:"#f0f0f0",
}}>
  <img className="res-logo"
   src={resData.img} alt="res img"></img>
      <h3>{resData.name}</h3>
      <h4><i>{resData.cuisine}</i></h4>
      <h4>{resData.rating}</h4>
      <h4> {resData.deliveryTime}</h4>
    </div>
  )
}

export default RestaurantCard;