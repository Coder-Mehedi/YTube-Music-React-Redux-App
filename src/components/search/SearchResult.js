import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const SearchResult = () => {
	const searchResults = useSelector((state) => state.youtube.searchResults);

	return (
		<div className="cardContainer">
			{searchResults.map((music) => (
				<Card music={music} key={music.id} searched={true} />
			))}
		</div>
	);
};

export default SearchResult;
