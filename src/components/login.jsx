import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
    const [email,setEmail]=useState("") ;
    const [password,setPassword]=useState("") ;
    const handleSubmit=(e)=>{
        e.preventDefault() ;
        if(email===localStorage.getItem("email")&&password===localStorage.getItem("password")){
            Swal.fire(
                'Login success!',
                'You clicked the button!',
                'success'
              )
             setTimeout(()=>{
                window.location="/cart" ;

             },3000) 

        }
        else if(email!=localStorage.getItem("email")){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email is wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })

        }
        else if(password!=localStorage.getItem("password")){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password is wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'user name or password is wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
    }
    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="py-5">
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
   <Link style={{color:"dodgerblue"}} to="/register">I Don't Have Account</Link>
  </div>
  <button type="submit" className="btn btn-primary">Sign In</button>
</form>
        </div>
     );
}
 
export default Login;