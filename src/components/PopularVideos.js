import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card/Card";
import { getYoutubePopularMusicAction } from "../actions/youtubeAction";

const PopularVideos = () => {
	const popularMusic = useSelector((state) => state.youtube.popularMusic);

	const dispatch = useDispatch();
	const getYoutubePopularMusic = () => dispatch(getYoutubePopularMusicAction());
	useEffect(() => {
		popularMusic.length === 0 && getYoutubePopularMusic();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="cardContainer">
			{popularMusic.map((music) => (
				<Card music={music} key={music.id} />
			))}
		</div>
	);
};

export default PopularVideos;
