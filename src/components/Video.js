import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { getLyricsAction } from "../actions/lyricsAction";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";

const Player = (props) => {
	console.log(props.location.state.thumbnail);
	const title = props.location.state.title;
	const dispatch = useDispatch();
	const getLyrics = (searchQuery) => dispatch(getLyricsAction(searchQuery));
	const [addWatch] = useMutation(ADD_WATCH, {
		variables: {
			videoId: props.match.params.videoId,
			title,
			thumbnail: props.location.state.thumbnail,
		},
		onError(err) {
			// setErrors(err.graphQLErrors[0].extensions.exception.errors);
			console.log(err.graphQLErrors[0]);
		},
	});

	useEffect(() => {
		getLyrics(title);
		addWatch();
		// eslint-disable-next-line
	}, [title]);

	const lyrics = useSelector((state) => state.lyrics.lyrics);
	return (
		<div className="video">
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${props.match.params.videoId}`}
				controls
				playing
			/>
			{lyrics && <p>{lyrics}</p>}
		</div>
	);
};

export default Player;

const ADD_WATCH = gql`
	mutation addWatch($videoId: String!, $title: String!, $thumbnail: String!) {
		addWatch(videoId: $videoId, title: $title, thumbnail: $thumbnail) {
			id
			title
			thumbnail
		}
	}
`;
