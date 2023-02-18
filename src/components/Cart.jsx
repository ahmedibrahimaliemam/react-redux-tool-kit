import React, { useEffect } from "react";
import data from "./data/data.json" ;
import "./cart.css" ;
import { useDispatch, useSelector } from "react-redux";
import  {addToCart,deleteFromCart ,clearCart} from "./slices/sproductSlice" ;
const Cart = () => {
   const state=useSelector((state)=>state.cart) ;
    const dispatch=useDispatch() ;
    useEffect(()=>{
localStorage.setItem("productsItem",JSON.stringify(state)) ;
    },[state])
    return ( 
        <div className="container">
        <h1 className="text-center py-5" style={{fontWeight:"700"}}>Our Products</h1>
        <div className="row gap-5 parent">
            {
                data.map((ele)=>{
                    return <div key={ele.id}  className="col-xl-3 col-lg-3 col-md-6 col-sm-12 items">
 <img style={{width:"100%", height:"250px"}} src={ele.image} alt={ele.title}/>
<h2>{ele.name}</h2>
<span>Price: {ele.price}$</span>
{state.length==0 ?   <button onClick={()=>{
localStorage.getItem("name")? dispatch(addToCart(ele)):window.location="/login"  ;}} className="btn btn-primary mt-5">Add To Cart</button> :state.find((product)=>product.id==ele.id)?
<>
<div className="product-controlls">
<button onClick={()=>{
dispatch(deleteFromCart(ele))
}} style={{width:"40px",textAlign:"center"}} className="btn btn-primary">-</button>
<p>{state.find((product)=>product.id==ele.id).quantatity} in cart</p>
<button onClick={()=>{
dispatch(addToCart(ele)) 
}} style={{width:"40px",textAlign:"center"}} className="btn btn-primary">+</button>
</div>
<button onClick={()=>{
    dispatch(clearCart(ele))
}} className="btn btn-danger mt-5">Remove</button>
</> :<button onClick={()=>{
dispatch(addToCart(ele));}} className="btn btn-primary mt-5">Add To Cart</button>
}
</div>
})
} 
</div>
</div>
);
}

export default Cart;