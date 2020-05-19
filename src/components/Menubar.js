import React, { div } from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
	return (
		<div className="menubar">
			<h2 className="title">YTube Music</h2>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menubar;
