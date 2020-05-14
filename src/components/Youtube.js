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
				{searchResults.map((searchResult) => (
					<Fragment>
						<li>
							<img src={searchResult.snippet.thumbnails.default.url} alt="" />

							<h3>{searchResult.snippet.title}</h3>
							<i
								className="fas fa-play-circle"
								onClick={() => playMusic(searchResult.id.videoId)}
							></i>
						</li>

						{/* <Player videoId={searchResult.id.videoId} /> */}
					</Fragment>
				))}
			</ul>
			<Modal />
		</div>
	);
};

export default Youtube;
