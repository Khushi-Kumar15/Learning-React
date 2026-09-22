import { useState } from "react";
import LOGO_URL from "../utils/constants";

const Header=()=>{

  // let btnName="Login";
 const [btnName,setBtn]= useState("Login");
  return(
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        <button className="login" onClick={()=>{
         btnName=="Login" ?setBtn("Logout"):setBtn("Login");
        }}>{btnName}</button>
        </ul>

      </div>
    </div>
  )
}

export default Header;