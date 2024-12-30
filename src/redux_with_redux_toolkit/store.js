import { legacy_createStore as Store,applyMiddleware } from "redux";
import { Reducers } from "./reducers";
import { thunk } from "redux-thunk";

export const store = Store(Reducers,applyMiddleware(thunk));