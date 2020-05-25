import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../actions/authAction";

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const login = (user) => dispatch(loginAction(user));
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const [errors, setErrors] = useState(null);

	const { username, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const [loginUser, { loading }] = useMutation(LOGIN_USER, {
		onError(err) {
			// setErrors(err.graphQLErrors[0].extensions.exception.errors);
			console.log(err.graphQLErrors[0].message);
			setErrors(err.graphQLErrors[0].message);
		},
	});

	const onSubmit = (e) => {
		e.preventDefault();
		setErrors(null);
		loginUser({
			variables: user,
			update(_, { data: { login: userData } }) {
				login(userData);
				history.push("/");
			},
		});
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Login</span>
			</h1>
			<form onSubmit={onSubmit} className="login-form">
				<div className="form-group">
					<label htmlFor="username">username</label>
					<input
						type="text"
						name="username"
						id="username"
						value={username}
						onChange={onChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={onChange}
					/>
				</div>

				<button type="submit" value="Login" className="">
					Login
				</button>
			</form>
			<div className="errors">{errors}</div>
		</div>
	);
};

export default Login;

const LOGIN_USER = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			id
			username
			username
			createdAt
			token
		}
	}
`;
