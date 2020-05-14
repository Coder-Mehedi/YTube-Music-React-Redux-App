import {
	GET_YOUTUBE_SEARCH_RESULT,
	SET_MODAL_OPEN,
	SET_MODAL_CLOSE,
} from "../actions/types";

const initialState = {
	searchResults: [],
	modalOpen: false,
	currentVideoId: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_YOUTUBE_SEARCH_RESULT:
			return {
				...state,
				searchResults: payload,
			};
		case SET_MODAL_OPEN:
			return {
				...state,
				modalOpen: true,
				currentVideoId: payload,
			};
		case SET_MODAL_CLOSE:
			return {
				...state,
				modalOpen: false,
				currentVideoId: null,
			};
		default:
			return state;
	}
};
