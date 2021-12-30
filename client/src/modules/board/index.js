import { combineReducers } from "redux";
import posts from "./board";

const boardReducer = combineReducers({
    posts
})

export default boardReducer;