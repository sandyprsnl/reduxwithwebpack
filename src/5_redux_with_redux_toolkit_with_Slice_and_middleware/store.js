import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducers";
import { loggerMiddleware } from "./middleware/logger";

export const store = configureStore({
    reducer:{
        task:taskReducer
    },
    middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),loggerMiddleware]
})