import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/sproductSlice" ;
 const store=configureStore({
    reducer:{
        cart:productSlice ,

    }
})
export default store ;