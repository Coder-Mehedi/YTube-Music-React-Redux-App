import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { getLyricsAction } from "../actions/lyricsAction";

const Player = (props) => {
	const title = props.location.state.title;
	const dispatch = useDispatch();
	const getLyrics = (searchQuery) => dispatch(getLyricsAction(searchQuery));

	useEffect(() => {
		getLyrics(title);
		// eslint-disable-next-line
	}, []);
	console.log(props.match.params.videoId);

	const lyrics = useSelector((state) => state.lyrics.lyrics);
	return (
		<div className="video">
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${props.match.params.videoId}`}
				controls
				playing
			/>
			{lyrics && <p>{lyrics}</p>}
		</div>
	);
};

export default Player;
