import { configureStore } from "@reduxjs/toolkit";
import { Reducers } from "../redux_with_redux_toolkit/reducers";

const store = configureStore(Reducers);
