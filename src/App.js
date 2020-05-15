import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Youtube from "./components/Youtube";
import PopularVideos from "./components/PopularVideos";
import SearchForm from "./components/search/SearchForm";

function App() {
	const searchResults = useSelector((state) => state.youtube.searchResults);

	return (
		<div className="App">
			<h2 className="title">YTube Music</h2>
			<SearchForm />
			<Youtube />
			{searchResults.length === 0 && <PopularVideos />}
		</div>
	);
}

export default App;
