import jokeReducer from "./jokeReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    jokeReducer: jokeReducer
})