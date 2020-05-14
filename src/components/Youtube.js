import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Player from "./Player";
import SearchForm from "./SearchForm";

const Youtube = () => {
	const searchResults = useSelector((state) => state.youtube.searchResults);

	return (
		<div>
			<h2 className="title">YTube Music</h2>
			<SearchForm />
			<ul>
				{searchResults.map((searchResult) => (
					<Fragment>
						<li>
							<img src={searchResult.snippet.thumbnails.default.url} alt="" />

							<h3>{searchResult.snippet.title}</h3>
							<i class="fas fa-play-circle"></i>
						</li>

						{/* <Player videoId={searchResult.id.videoId} /> */}
					</Fragment>
				))}
			</ul>
		</div>
	);
};

export default Youtube;
