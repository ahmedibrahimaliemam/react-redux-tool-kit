import { Link ,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState } from "./slices/sproductSlice";
import React from "react";
const Side = () => {
    const dispatch=useDispatch() ;
    const navigate=useNavigate() ;
    return ( 
        <div className="icon-content">
        <Link to="/cart">Home</Link>
        <Link to="/favorite">Favorit</Link>
        
       { localStorage.getItem("name")? <Link onClick={()=>{
                setTimeout(()=>{
                    navigate("/login") ;
                    dispatch(clearState([])) ;

                },1000)
                
            }}>Logout</Link>:<Link onClick={()=>{
                setTimeout(()=>{
                    navigate("/login") ;
                    dispatch(clearState([])) ;

                },1000)
                
            }}>Login</Link>
        }
    </div>
     );
}
 
export default Side;