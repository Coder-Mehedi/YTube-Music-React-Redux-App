import React from "react";
import "./App.css";
import MenuBar from "./components/Menubar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Video from "./components/Video";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Router>
				<MenuBar />
				<Route exact path="/" component={Home} />
				<Route exact path="/:videoId" component={Video} />
			</Router>
		</div>
	);
}

export default App;
