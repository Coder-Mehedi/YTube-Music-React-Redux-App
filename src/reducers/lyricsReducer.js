import { GET_LYRICS, CLEAR_LYRICS } from "../actions/types";

const initialState = {
	lyrics: "",
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_LYRICS:
			return {
				...state,
				lyrics: payload,
			};
		case CLEAR_LYRICS:
			return {
				...state,
				lyrics: "",
			};
		default:
			return state;
	}
};
