import {
	GET_YOUTUBE_SEARCH_RESULT,
	SET_MODAL_OPEN,
	SET_MODAL_CLOSE,
	NOT_FOUND,
	GET_YOUTUBE_POPULAR_MUSIC,
} from "../actions/types";

const initialState = {
	popularMusic: [],
	searchResults: [],
	modalOpen: false,
	currentVideoId: null,
	notFound: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_YOUTUBE_POPULAR_MUSIC:
			return {
				...state,
				popularMusic: payload,
			};
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
