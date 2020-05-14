import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import Player from "../Player";
import { setModalCloseAction } from "../../actions/youtubeAction";

const Modal = () => {
	const modalOpen = useSelector((state) => state.youtube.modalOpen);
	const videoId = useSelector((state) => state.youtube.currentVideoId);
	const dispatch = useDispatch();
	const setModalClose = () => dispatch(setModalCloseAction());

	return (
		<div>
			<div
				id="myModal"
				className={`${styles.modal} ${modalOpen && styles.open}`}
			>
				<div className={styles.modalContent}>
					<div className={styles.modalHeader}>
						<span className={styles.close} onClick={setModalClose}>
							&times;
						</span>
					</div>
					<div className={styles.modalBody}>
						<Player videoId={videoId} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
