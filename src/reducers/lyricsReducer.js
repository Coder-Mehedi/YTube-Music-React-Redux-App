import { GET_LYRICS, SET_MODAL_CLOSE } from "../actions/types";

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
		case SET_MODAL_CLOSE:
			return {
				...state,
				lyrics: "",
			};
		default:
			return state;
	}
};
