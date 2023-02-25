import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const FavoritSlice=createSlice({
    initialState:localStorage.getItem("favorite")?JSON.parse(localStorage.getItem("favorite")):[],
    name:"FavoriteSlice" ,
    reducers:{
        addToFavor:(state ,action)=>{
                  state.push(action.payload) 
        },
        removeFromFav:(state,action)=>{
            return state.filter((ele)=>ele.id!=action.payload.id) ;

        }
    }
})
export default FavoritSlice.reducer ;
export const {addToFavor,removeFromFav}=FavoritSlice.actions ;