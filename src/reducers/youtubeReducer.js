import {
	GET_YOUTUBE_SEARCH_RESULT,
	SET_MODAL_OPEN,
	SET_MODAL_CLOSE,
	NOT_FOUND,
} from "../actions/types";

const initialState = {
	searchResults: [],
	modalOpen: false,
	currentVideoId: null,
	notFound: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case NOT_FOUND:
			return {
				...state,
				notFound: true,
				searchResults: [],
			};
		case GET_YOUTUBE_SEARCH_RESULT:
			return {
				...state,
				notFound: false,
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
