import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import Player from "../Player";
import { setModalCloseAction } from "../../actions/youtubeAction";

const Modal = () => {
	const modalOpen = useSelector((state) => state.youtube.modalOpen);
	const videoId = useSelector((state) => state.youtube.currentVideoId);
	const lyrics = useSelector((state) => state.lyrics.lyrics);
	const dispatch = useDispatch();
	const setModalClose = () => dispatch(setModalCloseAction());

	return (
		<div>
			<div className={`${styles.modal} ${modalOpen && styles.open}`}>
				<div className={styles.modalHeader}>
					<h3>
						YTube Music <i className="fas fa-play"></i>
					</h3>
					<span className={styles.close} onClick={setModalClose}>
						&times;
					</span>
				</div>
				<div className={styles.modalBody}>
					<Player videoId={videoId} />
					{lyrics ? (
						<p>{lyrics}</p>
					) : (
						<h2 className="noLyrics">Sorry No Lyrics Found</h2>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
