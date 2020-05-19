import {
	GET_YOUTUBE_SEARCH_RESULT,
	NOT_FOUND,
	GET_YOUTUBE_POPULAR_MUSIC,
	CLEAR_SEARCH_RESULT,
} from "../actions/types";

const initialState = {
	popularMusic: [],
	searchResults: [],
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
		case CLEAR_SEARCH_RESULT:
			return {
				...state,
				searchResults: [],
			};
		default:
			return state;
	}
};
