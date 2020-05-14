import axios from "axios";
import {
	GET_YOUTUBE_SEARCH_RESULT,
	SET_MODAL_OPEN,
	SET_MODAL_CLOSE,
} from "./types";

export const getYoutubeSearchResultAction = ({ artist, title }) => async (
	dispatch
) => {
	const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${artist}${title}&key=AIzaSyD3kwwIJVOaEdie8g_PJs5-dxl-OGZe-80`;

	const res = await axios.get(url);
	dispatch({
		type: GET_YOUTUBE_SEARCH_RESULT,
		payload: res.data.items,
	});
};

export const setModalOpenAction = (videoId) => {
	return { type: SET_MODAL_OPEN, payload: videoId };
};

export const setModalCloseAction = () => {
	return { type: SET_MODAL_CLOSE };
};
