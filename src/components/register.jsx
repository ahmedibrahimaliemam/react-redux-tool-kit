import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Register = () => {
  const navigate=useNavigate() ;
    const [name,setName]=useState("") ;
    const [email,setEmail]=useState("") ;
    const [password,setPassword]=useState("") ;
    const handleSupmit=(e)=>{
        e.preventDefault() ;
        localStorage.setItem("name",name) ;
        localStorage.setItem("email",email) ;
       if(password.length>=8) { 
        localStorage.setItem("password",password) ;
        Swal.fire(
            'Data has been Saved Successfuly!',
            'You clicked the button!',
            'success'
          )
         setTimeout(()=>{
            navigate("/login")
         },1000) ;
     }
       else{ Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'password length must be greater than or equal 8!',
      }) }



    }
    return ( 
        <div className="container">
          <h1 style={{fontWeight:"700"}} className="text-center">Register</h1>
        <form onSubmit={handleSupmit} className="py-5">
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
    <input onChange={(e)=>{
        setName(e.target.value)
    }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={(e)=>{
        setEmail(e.target.value)
    }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(e)=>{
    setPassword(e.target.value)
    
    }} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
  <NavLink style={{color:"dodgerblue",fontWeight:"700"}} to="/login">I realy have account</NavLink>
  </div>
  
  <button type="submit" className="btn btn-primary">Sign Up</button>
</form>
        </div>
     );
}
 
export default Register;