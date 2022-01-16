import { combineReducers } from "redux";
//import boardlist from ../components/board/board
import buylist from "./mypage/Buylist";
import cartlist from "./mypage/Cart";
import directmsg from "./mypage/queslist";

const rootReducer = combineReducers({
    buylist,
    cartlist,
    directmsg
});
export default rootReducer;