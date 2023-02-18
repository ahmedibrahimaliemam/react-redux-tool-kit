import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css"
const Navbar = () => {
    const state=useSelector((state)=>state.cart) ;
    const dispatch=useDispatch() ;
    return ( 
        <nav style={{position:"fixed" , width:"100%"}}>
            
            <div className="container design">
        <Link to="/cart">
        <h2 style={{color:"white"}}>{localStorage.getItem("name")?`Hello ${localStorage.getItem("name")}!`:`Online Shop`}</h2></Link>
        <Link to={localStorage.getItem("name")?"/bag" :"/login"}>
        <div className="nav-bage">
        <i className="fa-solid fa-bag-shopping fa-3x"></i>
        <span className="bag-quantity">{state.length}</span>
        </div>
        </Link>
        </div>
        </nav>
        
     );
}
 
export default Navbar;