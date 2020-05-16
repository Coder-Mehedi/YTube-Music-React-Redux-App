import axios from "axios";
import {
	GET_YOUTUBE_POPULAR_MUSIC,
	GET_YOUTUBE_SEARCH_RESULT,
	SET_MODAL_OPEN,
	SET_MODAL_CLOSE,
	NOT_FOUND,
	CLEAR_SEARCH_RESULT,
} from "./types";

let youtubeDataApi;

if (process.env.NODE_ENV !== "production") {
	youtubeDataApi = process.env.REACT_APP_YOUTUBE_DATA_API;
} else {
	youtubeDataApi = process.env.YOUTUBE_DATA_API;
}

export const getYoutubeSearchResultAction = ({ artist, title }) => async (
	dispatch
) => {
	const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${artist}${title}&key=${youtubeDataApi}`;

	const res = await axios.get(url);
	if (!res.data.items.length) return dispatch({ type: NOT_FOUND });
	dispatch({
		type: GET_YOUTUBE_SEARCH_RESULT,
		payload: res.data.items,
	});
};

export const getYoutubePopularMusicAction = () => async (dispatch) => {
	const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=10&maxResults=20&key=${youtubeDataApi}`;
	const res = await axios.get(url);
	dispatch({
		type: GET_YOUTUBE_POPULAR_MUSIC,
		payload: res.data.items,
	});
};

export const setModalOpenAction = (videoId) => {
	return { type: SET_MODAL_OPEN, payload: videoId };
};

export const setModalCloseAction = () => {
	return { type: SET_MODAL_CLOSE };
};

export const clearSearchAction = () => {
	return { type: CLEAR_SEARCH_RESULT };
};
