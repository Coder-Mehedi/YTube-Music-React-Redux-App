import React from "react";
import { useSelector } from "react-redux";
import PopularVideos from "./PopularVideos";
import SearchForm from "./search/SearchForm";
import SearchResult from "./search/SearchResult";

const Home = () => {
	const searchResults = useSelector((state) => state.youtube.searchResults);

	return (
		<div>
			<SearchForm />
			{searchResults.length === 0 ? <PopularVideos /> : <SearchResult />}
		</div>
	);
};

export default Home;
