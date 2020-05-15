import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getYoutubeSearchResultAction,
	clearSearchAction,
} from "../../actions/youtubeAction";
import { useRef } from "react";

const SearchForm = () => {
	const [artist, setArtist] = useState("");
	const [title, setTitle] = useState("");
	const artistRef = useRef("");
	const titleRef = useRef("");

	const dispatch = useDispatch();
	const getYoutubeSearchResult = (searchQuery) =>
		dispatch(getYoutubeSearchResultAction(searchQuery));

	const clearSearch = () => dispatch(clearSearchAction());

	const searchResults = useSelector((state) => state.youtube.searchResults);

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		getYoutubeSearchResult({ artist, title });
		artistRef.current.blur();
		titleRef.current.blur();
	};

	return (
		<div>
			<form onSubmit={handleSearchSubmit}>
				<div className="input-group">
					<label htmlFor="artist">Artist</label>
					<input
						type="text"
						id="artist"
						onChange={(e) => setArtist(e.target.value)}
						value={artist}
						placeholder="Enter Artist Name"
						ref={artistRef}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="title">Song Title</label>
					<input
						type="text"
						id="title"
						className="title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						placeholder="Enter Song Title"
						ref={titleRef}
					/>
				</div>
				<button type="submit">Search</button>
				{searchResults.length > 0 && (
					<button onClick={() => clearSearch()}>Clear Search</button>
				)}
			</form>
		</div>
	);
};

export default SearchForm;
