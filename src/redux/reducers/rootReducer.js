import { combineReducers } from "redux";
import { questionReducer } from "./questionReducer";
import { authReducer } from "./authReducer";


export const rootReducer = combineReducers({
    questionReducer : questionReducer,
    authReducer : authReducer
})