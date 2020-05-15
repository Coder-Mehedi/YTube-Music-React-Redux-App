import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Player from "./Player";
import SearchForm from "./SearchForm";
import {
	setModalOpenAction,
	setModalCloseAction,
} from "../actions/youtubeAction";
import Modal from "./modal/Modal";

const Youtube = () => {
	const notFound = useSelector((state) => state.youtube.notFound);
	const searchResults = useSelector((state) => state.youtube.searchResults);
	const dispatch = useDispatch();

	const setModalOpen = (videoId) => dispatch(setModalOpenAction(videoId));

	const playMusic = (videoId) => {
		setModalOpen(videoId);
	};

	return (
		<div>
			<h2 className="title">YTube Music</h2>
			<SearchForm />
			<ul>
				{notFound && (
					<h2 className="resultNotFound">
						Nothing Found, Maybe You Entered Something Wrong!
					</h2>
				)}
				{searchResults.length > 0 &&
					searchResults.map((searchResult) => (
						<li key={searchResult.id.videoId}>
							<img src={searchResult.snippet.thumbnails.default.url} alt="" />

							<h3>{searchResult.snippet.title}</h3>
							<i
								className="fas fa-play-circle"
								onClick={() => playMusic(searchResult.id.videoId)}
							></i>
						</li>
					))}
			</ul>
			<Modal />
		</div>
	);
};

export default Youtube;
