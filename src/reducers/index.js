import { combineReducers } from "redux";
import youtubeReducer from "./youtubeReducer";
import lyricsReducer from "./lyricsReducer";

export default combineReducers({
	youtube: youtubeReducer,
	lyrics: lyricsReducer,
});
