import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getYoutubePopularMusicAction } from "../actions/youtubeAction";
import Modal from "./modal/Modal";
import SearchResult from "./search/SearchResult";

const Youtube = () => {
	const notFound = useSelector((state) => state.youtube.notFound);
	const searchResults = useSelector((state) => state.youtube.searchResults);
	const dispatch = useDispatch();

	const getYoutubePopularMusic = () => dispatch(getYoutubePopularMusicAction());
	useEffect(() => {
		getYoutubePopularMusic();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<ul>
				{notFound && (
					<h2 className="resultNotFound">
						Nothing Found, Maybe You Entered Something Wrong!
					</h2>
				)}
				{searchResults.length > 0 &&
					searchResults.map((searchResult) => (
						<SearchResult searchResult={searchResult} />
					))}
			</ul>
			<Modal />
		</div>
	);
};

export default Youtube;
