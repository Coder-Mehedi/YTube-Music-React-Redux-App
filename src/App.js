import React from "react";
import "./App.css";
import Youtube from "./components/Youtube";
import PopularVideos from "./components/PopularVideos";

function App() {
	return (
		<div className="App">
			<Youtube />
			<PopularVideos />
		</div>
	);
}

export default App;
