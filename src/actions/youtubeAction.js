import axios from "axios";
import { GET_YOUTUBE_SEARCH_RESULT } from "./types";

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
