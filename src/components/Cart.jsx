import React, { useEffect, useState } from "react";
import data from "./data/data.json" ;
import "./cart.css" ;
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  {addToCart,deleteFromCart ,clearCart} from "./slices/sproductSlice" ;
import { addToFavor, removeFromFav } from "./slices/favoriteSlice";
const Cart = () => {
    const navigate=useNavigate() ;
   const state=useSelector((state)=>state.cart) ;
   const favoriteState=useSelector((state)=>state.addFavor) ;
    const dispatch=useDispatch() ;
    useEffect(()=>{
localStorage.setItem("productsItem",JSON.stringify(state)) ;
localStorage.setItem("favorite",JSON.stringify(favoriteState)) ;
console.log(favoriteState);
    },[state,favoriteState])
    return ( 
        <div className="container">
        <h1 className="text-center py-5" style={{fontWeight:"700"}}>Our Products</h1>
        <div className="row gap-5 parent">
            {
                //map data to draw it in Ui
                data.map((ele)=>{
                    return <div key={ele.id}  className="col-xl-3 col-lg-3 col-md-6 col-sm-12 items">
 <img style={{width:"100%", height:"250px"}} src={ele.image} alt={ele.title}/>
<h2>{ele.name}</h2>
<span>Price: {ele.price}$</span>
{//check if the state length not grater than zero to show add to cart button
state.length==0?
<> 
<div onClick={()=>{
//check if user made a login or not
    if(localStorage.getItem("name")){
    if(favoriteState.find((product)=>product.id===ele.id)){
        dispatch(removeFromFav(ele)) ;
    }
    else{
    dispatch(addToFavor(ele)) ;
    }}
    else{navigate("/login")}
}} className="icon mt-2" style={{cursor:"pointer"}}>
<i  className="fa-regular fa-heart fa-2x" style={favoriteState.find((product)=>product.id===ele.id)?{color:"red"}:{color:"black"}}>

</i>
</div> 
<button onClick={()=>{
    //check if the user made login or not
localStorage.getItem("name")? dispatch(addToCart(ele)):navigate("/login")  ;}} className="btn btn-primary mt-5">Add To Cart</button></>
://show remove from cart and controols
state.find((product)=>product.id==ele.id)
&&
state.find((product)=>product.id==ele.id).quantatity>=0 ?
<>
<div className="product-controlls">
<button onClick={()=>{
state.find((product)=>product.id==ele.id)
&&
state.find((product)=>product.id==ele.id).quantatity==1?
dispatch(clearCart(ele))
:
dispatch(deleteFromCart(ele)) ;
}} style={{width:"40px",textAlign:"center"}} className="btn btn-primary">
-
</button>
<p>{state.find((product)=>product.id==ele.id).quantatity} in cart</p>
<button onClick={()=>{
dispatch(addToCart(ele)) 
}} style={{width:"40px",textAlign:"center"}} className="btn btn-primary">
+
</button>
</div>
<button onClick={()=>{
    dispatch(clearCart(ele))
}} className="btn btn-danger mt-2">
Remove
</button>
</>
: //if length not equal zero and not choose this product
<>
<div onClick={()=>{
    if(favoriteState.find((product)=>product.id===ele.id)){
        dispatch(removeFromFav(ele)) ;
    }
    else{
    dispatch(addToFavor(ele)) ;
    }
}} className="icon mt-2" style={{cursor:"pointer"}}>
<i  className="fa-regular fa-heart fa-2x" style={favoriteState.find((product)=>product.id===ele.id)?{color:"red"}:{color:"black"}}>
</i>
</div> 
<button onClick={()=>{
dispatch(addToCart(ele));}} className="btn btn-primary mt-5">Add To Cart</button>
</>
}
</div>
})
} 
</div>

</div>
);
}

export default Cart;