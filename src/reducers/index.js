import { combineReducers } from "redux";
import youtubeReducer from "./youtubeReducer";

export default combineReducers({
	youtube: youtubeReducer,
});
