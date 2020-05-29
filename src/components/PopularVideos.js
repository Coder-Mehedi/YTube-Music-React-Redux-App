import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card/Card";
import {
	getYoutubePopularMusicAction,
	setMoreVideosToShowAction,
} from "../actions/youtubeAction";

const PopularVideos = () => {
	const popularMusicToShow = useSelector(
		(state) => state.youtube.popularMusicToShow
	);

	const dispatch = useDispatch();
	const getYoutubePopularMusic = () => dispatch(getYoutubePopularMusicAction());
	const setMoreVideosToShow = () => dispatch(setMoreVideosToShowAction());

	useEffect(() => {
		popularMusicToShow.length === 0 && getYoutubePopularMusic();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		const bottomVideoEl = document.getElementById(
			`video-${popularMusicToShow.length - 1}`
		);
		observeElement(bottomVideoEl);
		// eslint-disable-next-line
	}, [popularMusicToShow]);

	const addMoreVideos = () => {
		setTimeout(() => {
			setMoreVideosToShow();
		}, 500);
	};

	const observeElement = (bottomVideo) => {
		if (!bottomVideo) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting === true) {
					console.log("bottom video reached");
					addMoreVideos();
					observer.unobserve(bottomVideo);
				}
			},
			{ threshold: 0 }
		);
		observer.observe(bottomVideo);
	};

	return (
		<div className="cardContainer">
			{popularMusicToShow.map((music, index) => (
				<Card music={music} key={music.id} index={index} />
			))}
		</div>
	);
};

export default PopularVideos;
