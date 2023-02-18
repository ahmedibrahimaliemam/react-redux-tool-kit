import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, Link ,useNavigate } from "react-router-dom";
import { clearState } from "./slices/sproductSlice";
import "../App.css"
const Navbar = () => {
    const navigate=useNavigate() ;
    const state=useSelector((state)=>state.cart) ;
    const dispatch=useDispatch() ;
    return ( 
        <nav style={{position:"fixed" , width:"100%"}}>
            
            <div className="container design">
        <Link to="/cart">
        <h2 style={{color:"white"}}>{localStorage.getItem("name")?`Hello ${localStorage.getItem("name")}!`:`Online Shop`}</h2>
        </Link>
        <Link className="text-danger" style={localStorage.getItem("name")?{flex:"1" ,display:"block"}:{display:"none"}}>
            <h1 onClick={()=>{
                setTimeout(()=>{
                    navigate("/login") ;
                    dispatch(clearState([])) ;

                },1000)
                
            }}>Logout</h1></Link>
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