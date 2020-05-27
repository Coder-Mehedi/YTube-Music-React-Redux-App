import React from "react";
import styles from "./Card.module.css";

import { Link } from "react-router-dom";

const CustomCard = ({ music: { videoId, title, thumbnail } }) => {
	let pathname = `/${videoId}`;
	let channelTitle = "";
	let statistics = "";

	return (
		<div className={styles.card}>
			<Link
				className={styles.thumbnail}
				to={{ pathname, state: { title, thumbnail } }}
			>
				<img className={styles.cardImage} src={thumbnail} alt="" />
			</Link>

			<div className={styles.details}>
				<Link
					className={styles.cardVideoTitle}
					to={{ pathname, state: { title, thumbnail } }}
				>
					{title}
				</Link>
				<div className={styles.channelName}>{channelTitle && channelTitle}</div>

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

export default CustomCard;
