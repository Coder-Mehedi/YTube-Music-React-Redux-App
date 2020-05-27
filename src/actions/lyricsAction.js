import axios from "axios";
import { GET_LYRICS, CLEAR_LYRICS } from "./types";

export const getLyricsAction = (title) => async (dispatch) => {
	const artist = title.split("-")[0];
	const splittedTitle = title.split("-")[1];
	if (!artist || !splittedTitle) {
		dispatch({ type: CLEAR_LYRICS });
		return;
	}

	const url = `https://api.lyrics.ovh/v1/${artist}/${splittedTitle}`;
	const res = await axios.get(url);

	dispatch({
		type: GET_LYRICS,
		payload: res.data.lyrics,
	});
};
