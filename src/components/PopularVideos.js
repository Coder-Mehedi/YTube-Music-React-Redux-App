import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card";

const PopularVideos = () => {
	const popularMusic = useSelector((state) => state.youtube.popularMusic);
	console.log(popularMusic);

	return (
		<div className="cardContainer">
			{popularMusic.map((music) => (
				<Card music={music} />
			))}
		</div>
	);
};

export default PopularVideos;
