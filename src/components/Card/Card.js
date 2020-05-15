import React from "react";
import styles from "./Card.module.css";

const Card = ({
	music: {
		id,
		snippet: { channelTitle, thumbnails, title },
	},
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.thumbnail}>
				<img className={styles.cardImage} src={thumbnails.high.url} alt="" />
			</div>

			<div className={styles.details}>
				<h4>{title}</h4>
				<span className={styles.channelName}>{channelTitle}</span>
				<br />
				<span className={styles.views}>Views: 381K</span>
				<div className={styles.likes}>Likes: 432342</div>
				<div className={styles.dislikes}>Dislikes: 2394</div>
				<div className={styles.comments}>Comments: 715873</div>
			</div>
		</div>
	);
};

export default Card;
