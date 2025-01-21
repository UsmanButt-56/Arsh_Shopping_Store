import { combineReducers } from "redux";
import { cartreducer } from "./cartreducer";

export const reducers = combineReducers({
    cart : cartreducer,
})