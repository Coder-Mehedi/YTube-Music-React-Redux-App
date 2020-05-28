import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Card.module.css";
import { setModalOpenAction } from "../../actions/youtubeAction";
import { getLyricsAction } from "../../actions/lyricsAction";

const Card = ({
	music: {
		id,
		snippet: { channelTitle, thumbnails, title },
		statistics: { commentCount, likeCount, dislikeCount, viewCount },
	},
}) => {
	const dispatch = useDispatch();
	const setModalOpen = (videoId) => dispatch(setModalOpenAction(videoId));
	const getLyrics = (searchQuery) => dispatch(getLyricsAction(searchQuery));

	const playMusic = (videoId) => {
		setModalOpen(videoId);
		getLyrics(title);
	};

	return (
		<div className={styles.card}>
			<div className={styles.thumbnail} onClick={() => playMusic(id)}>
				<img className={styles.cardImage} src={thumbnails.high.url} alt="" />
			</div>

			<div className={styles.details}>
				<h4 className={styles.cardVideoTitle} onClick={() => playMusic(id)}>
					{title}
				</h4>
				<div className={styles.channelName}>{channelTitle}</div>
				<div className={styles.statistics}>
					<span className={styles.views}>Views: {viewCount}</span>
					<span className={styles.comments}>Comments: {commentCount}</span>
					<span className={styles.likes}>Likes: {likeCount}</span>
					<span className={styles.dislikes}>Dislikes: {dislikeCount}</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
