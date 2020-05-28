import React from "react";
import gql from "graphql-tag";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-apollo";
import CustomCard from "./Card/CustomCard";
import { setWatchedVideosAction } from "../actions/youtubeAction";

const Watched = () => {
	const { loading, data } = useQuery(WATCHED_VIDEOS);

	const watched = useSelector((state) => state.youtube.watched);

	const dispatch = useDispatch();
	const setWatchedVideos = (payload) =>
		dispatch(setWatchedVideosAction(payload));

	if (!loading && data.getWatchedVideos.length > 0) {
		setWatchedVideos(data.getWatchedVideos);
	}

	return (
		<div>
			<h1 className="title text-center">Watched</h1>
			<div className="cardContainer">
				{watched &&
					watched.map((music) => <CustomCard music={music} key={music.id} />)}
			</div>
		</div>
	);
};

export default Watched;

const WATCHED_VIDEOS = gql`
	query {
		getWatchedVideos {
			id
			videoId
			title
			thumbnail
		}
	}
`;
