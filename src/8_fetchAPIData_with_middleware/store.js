import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./todoSlice";
import { loggerMiddleware } from "./middleware/logger";
import { fetchAPImiddleware } from "./middleware/fetchAPImiddleware";

export const store = configureStore({
    reducer:{
        task:taskReducer
    },
    middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),fetchAPImiddleware,loggerMiddleware]
})