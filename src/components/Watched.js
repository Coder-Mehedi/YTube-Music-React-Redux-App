import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import CustomCard from "./Card/CustomCard";

const Watched = () => {
	const { loading, data } = useQuery(WATCHED_VIDEOS);
	if (data) console.log(data.getWatchedVideos);

	return (
		<div>
			<h1 className="title text-center">Watched</h1>
			<div className="cardContainer">
				{data &&
					data.getWatchedVideos.map((music) => (
						<CustomCard music={music} key={music.id} />
					))}
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
