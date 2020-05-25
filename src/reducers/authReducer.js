import jwtDecode from "jwt-decode";

const initialState = {
	user: null,
};

if (localStorage.getItem("jwtToken")) {
	const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
	if (decodedToken.exp * 1000 < Date.now()) {
		localStorage.removeItem("jwtToken");
	} else {
		initialState.user = decodedToken;
	}
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "LOGIN":
			return {
				...state,
				user: payload,
			};
		case "LOGOUT":
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};
