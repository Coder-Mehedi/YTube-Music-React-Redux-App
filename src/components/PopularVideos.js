import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card/Card";
import { getYoutubePopularMusicAction } from "../actions/youtubeAction";

const PopularVideos = () => {
	const dispatch = useDispatch();
	const getYoutubePopularMusic = () => dispatch(getYoutubePopularMusicAction());
	useEffect(() => {
		getYoutubePopularMusic();
		// eslint-disable-next-line
	}, []);

	const popularMusic = useSelector((state) => state.youtube.popularMusic);

	return (
		<div className="cardContainer">
			{popularMusic.map((music) => (
				<Card music={music} key={music.id} />
			))}
		</div>
	);
};

export default PopularVideos;
