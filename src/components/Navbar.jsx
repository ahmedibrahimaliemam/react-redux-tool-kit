import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link ,useNavigate } from "react-router-dom";
import { clearState } from "./slices/sproductSlice";
import "../App.css"
import Side from "./side";
const Navbar = () => {
    const navigate=useNavigate() ;
    const state=useSelector((state)=>state.cart) ;
    const dispatch=useDispatch() ;
    return ( 
        <>
        <nav style={{position:"fixed" , width:"100%"}}>
            <div className="container design">
                <div className="nav-icon">
                <i className="fa-solid fa-bars fa-3x text-light"></i>
                <Side/>
                </div>
        <Link to="/cart">
        <h2 style={{color:"white"}}>{localStorage.getItem("name")?`Hello, ${localStorage.getItem("name").slice(0,localStorage.getItem("name").indexOf(" "))} !`:`Online Shop`}</h2>
        </Link>
        <Link to={localStorage.getItem("name")?"/bag" :"/login"}>
        <div className="nav-bage">
        <i className="fa-solid fa-bag-shopping fa-3x"></i>
        <span className="bag-quantity">{state.length}</span>
        </div>
        </Link>
        </div>
        </nav>
        </>
        
     );
}
 
export default Navbar;