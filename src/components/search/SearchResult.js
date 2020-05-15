import React from "react";
import { useDispatch } from "react-redux";
import { setModalOpenAction } from "../../actions/youtubeAction";

const SearchResult = ({
	searchResult: {
		id: { videoId },
		snippet: { thumbnails, title },
	},
}) => {
	const dispatch = useDispatch();
	const setModalOpen = (videoId) => dispatch(setModalOpenAction(videoId));
	const playMusic = (videoId) => {
		setModalOpen(videoId);
	};
	return (
		<li key={videoId}>
			<img
				src={thumbnails.default.url}
				alt=""
				className="clickable"
				onClick={() => playMusic(videoId)}
			/>

			<h3 className="clickable" onClick={() => playMusic(videoId)}>
				{title}
			</h3>
			<i className="fas fa-play-circle" onClick={() => playMusic(videoId)}></i>
		</li>
	);
};

export default SearchResult;
