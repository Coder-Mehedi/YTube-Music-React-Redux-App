import React from "react";
import ReactPlayer from "react-player";

const Player = ({ videoId }) => {
	return (
		<ReactPlayer
			url={`https://www.youtube.com/watch?v=${videoId}`}
			controls
			playing
		/>
	);
};

export default Player;
