import React from 'react';

const SongItems = props => {
	//console.log(props);

	return (
		<tr>
			<td className="song-row__item">{props.titleName}</td>
			<td className="song-row__item">{props.artistName}</td>
			<td className="song-row__item">{props.genreName}</td>
			<td className="song-row__item">{props.ratingNum}</td>

			<td>
				<button onClick={props.delete} name={props.titleName}>
					Delete!
				</button>
			</td>
		</tr>
	);
};
export default SongItems;
