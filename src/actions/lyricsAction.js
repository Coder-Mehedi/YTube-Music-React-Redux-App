import axios from "axios";
import { GET_LYRICS } from "./types";

export const getLyricsAction = ({ artist, title }) => async (dispatch) => {
	const url = `https://api.lyrics.ovh/v1//${artist}/${title}`;
	const res = await axios.get(url);

	dispatch({
		type: GET_LYRICS,
		payload: res.data.lyrics,
	});
};
