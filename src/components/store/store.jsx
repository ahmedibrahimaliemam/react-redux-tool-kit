import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/sproductSlice" ;
import favoriteSlice from "../slices/favoriteSlice";
 const store=configureStore({
    reducer:{
        cart:productSlice ,
        addFavor:favoriteSlice ,

    }
})
export default store ;