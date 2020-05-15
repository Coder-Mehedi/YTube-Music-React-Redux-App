import React from "react";
import styles from "./Card.module.css";

const Card = ({
	music: {
		id,
		snippet: { channelTitle, thumbnails, title },
		statistics: { commentCount, likeCount, dislikeCount, viewCount },
	},
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.thumbnail}>
				<img className={styles.cardImage} src={thumbnails.high.url} alt="" />
			</div>

			<div className={styles.details}>
				<h4 className={styles.cardVideoTitle}>{title}</h4>
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
