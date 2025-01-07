import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducers";

export const store = configureStore({
    reducer:{
        task:taskReducer
    }
})