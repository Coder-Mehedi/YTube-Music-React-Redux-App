import React from "react";
import styles from "./Card.module.css";

import { Link } from "react-router-dom";

const Card = ({
	music: {
		id,
		snippet: { channelTitle, thumbnails, title },
		statistics,
	},
	searched,
}) => {
	let pathname = searched ? id.videoId : id;

	return (
		<div className={styles.card}>
			<Link className={styles.thumbnail} to={{ pathname, state: { title } }}>
				<img className={styles.cardImage} src={thumbnails.high.url} alt="" />
			</Link>

			<div className={styles.details}>
				<Link
					className={styles.cardVideoTitle}
					to={{ pathname, state: { title } }}
				>
					{title}
				</Link>
				<div className={styles.channelName}>{channelTitle}</div>

				{statistics && (
					<div className={styles.statistics}>
						<span className={styles.views}>Views: {statistics.viewCount}</span>
						<span className={styles.comments}>
							Comments: {statistics.commentCount}
						</span>
						<span className={styles.likes}>Likes: {statistics.likeCount}</span>
						<span className={styles.dislikes}>
							Dislikes: {statistics.dislikeCount}
						</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
