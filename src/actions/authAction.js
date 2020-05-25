export const loginAction = (userData) => async (dispatch) => {
	localStorage.setItem("jwtToken", userData.token);
	dispatch({
		type: "LOGIN",
		payload: userData,
	});
};

export const logoutAction = () => {
	localStorage.removeItem("jwtToken");
	return { type: "LOGOUT" };
};
