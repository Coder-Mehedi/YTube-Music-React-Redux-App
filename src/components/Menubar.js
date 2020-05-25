import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/authAction";

const Menubar = () => {
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();
	const logout = () => dispatch(logoutAction());

	const menuBar = user ? (
		<li>
			<button className="logout-btn" onClick={logout}>
				Logout
			</button>
		</li>
	) : (
		<>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/register">Register</Link>
			</li>
		</>
	);
	return (
		<div className="menubar">
			<h2 className="title">YTube Music</h2>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{menuBar}
			</ul>
		</div>
	);
};

export default Menubar;
