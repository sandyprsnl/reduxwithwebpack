import { legacy_createStore as Store } from "redux";
import { Reducers } from "./reducers";

export const store = Store(Reducers);