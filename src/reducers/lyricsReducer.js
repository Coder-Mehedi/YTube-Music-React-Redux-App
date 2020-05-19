import { GET_LYRICS } from "../actions/types";

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
		default:
			return state;
	}
};
