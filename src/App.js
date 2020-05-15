import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Youtube from "./components/Youtube";
import PopularVideos from "./components/PopularVideos";

function App() {
	const searchResults = useSelector((state) => state.youtube.searchResults);

	return (
		<div className="App">
			<Youtube />
			{searchResults.length === 0 && <PopularVideos />}
		</div>
	);
}

export default App;
