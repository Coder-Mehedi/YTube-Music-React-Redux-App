import {
	GET_YOUTUBE_SEARCH_RESULT,
	NOT_FOUND,
	GET_YOUTUBE_POPULAR_MUSIC,
	CLEAR_SEARCH_RESULT,
	SET_WATCHED_VIDEOS,
	ADD_MORE_JOKES,
} from "../actions/types";

const initialState = {
	popularMusic: [],
	popularMusicToShow: [],
	searchResults: [],
	watched: [],
	liked: [],
	notFound: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_YOUTUBE_POPULAR_MUSIC:
			return {
				...state,
				popularMusic: payload,
				popularMusicToShow: payload.slice(0, 12),
			};
		case ADD_MORE_JOKES:
			return {
				...state,
				popularMusicToShow: state.popularMusic.slice(
					0,
					state.popularMusicToShow.length + 12
				),
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
		case SET_WATCHED_VIDEOS:
			return {
				...state,
				watched: payload,
			};
		default:
			return state;
	}
};
