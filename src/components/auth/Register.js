import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

const Register = () => {
	const history = useHistory();

	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [errors, setErrors] = useState({});

	const { username, email, password, confirmPassword } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const [registerUser] = useMutation(REGISTER_USER, {
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors);
		},
	});

	const onSubmit = (e) => {
		e.preventDefault();
		registerUser({
			variables: user,
			update() {
				setErrors(null);
				console.log("register success");
				history.push("/login");
			},
		});
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>
			<form onSubmit={onSubmit} className="register-form">
				<div className="form-group">
					<label htmlFor="name">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						value={username}
						onChange={onChange}
					/>
					<span className="register-error">
						{errors.username && errors.username}
					</span>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={onChange}
					/>
					<span className="register-error">{errors.email && errors.email}</span>
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
					<span className="register-error">
						{errors.password && errors.password}
					</span>
				</div>

				<div className="form-group">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						value={confirmPassword}
						onChange={onChange}
					/>
					<span className="register-error">
						{errors.confirmPassword && errors.confirmPassword}
					</span>
				</div>

				<button type="submit">Register</button>
			</form>
			{errors && console.log(errors)}
		</div>
	);
};

export default Register;

const REGISTER_USER = gql`
	mutation register(
		$username: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		register(
			registerInput: {
				username: $username
				email: $email
				password: $password
				confirmPassword: $confirmPassword
			}
		) {
			id
			email
			username
			createdAt
			token
		}
	}
`;
