import React from "react";
import "./App.css";
import MenuBar from "./components/Menubar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import Video from "./components/Video";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthRoute from "./utils/AuthRoute";

const client = new ApolloClient({
	uri: "https://ytube-server.herokuapp.com",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Router>
					<MenuBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<AuthRoute path="/login" component={Login} />
						<AuthRoute path="/register" component={Register} />
						<Route path="/:videoId" component={Video} />
					</Switch>
				</Router>
			</div>
		</ApolloProvider>
	);
}

export default App;
