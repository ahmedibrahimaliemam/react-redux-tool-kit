import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const productSlice=createSlice({
    initialState:localStorage.getItem("productsItem")?JSON.parse(localStorage.getItem("productsItem")):[] ,
    name:"productSlice" ,
    reducers:{
        addToCart:(state,action)=>{
            const findProduct=state.find((ele)=>ele.id===action.payload.id) ;
            if(findProduct){
                findProduct.quantatity+=1;
            }
            else{
                const clone ={...action.payload , quantatity:1}
            state.push(clone) }

        },
        deleteFromCart:(state,action)=>{
            const findProduct=state.find((ele)=>ele.id===action.payload.id) ;
            if(findProduct){
                if(findProduct.quantatity>0 ){
                    findProduct.quantatity-=1;
                    console.log(findProduct.quantatity);
                }
                
            }
           
        } ,
        clearCart:(state,action)=>{
           return state.filter((ele)=>ele.id!=action.payload.id) ;
           
        },
        clearState:(state,action)=>{
            return state=action.payload ;
        }

    }
})
export default productSlice.reducer ;
export const {clearCart,addToCart,deleteFromCart ,clearState}=productSlice.actions ;