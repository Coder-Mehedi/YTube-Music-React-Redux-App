import { GET_YOUTUBE_SEARCH_RESULT } from "../actions/types";

const initialState = {
	searchResults: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_YOUTUBE_SEARCH_RESULT:
			return {
				...state,
				searchResults: payload,
			};
		default:
			return state;
	}
};
