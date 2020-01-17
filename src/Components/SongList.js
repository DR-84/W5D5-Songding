import React from 'react';
import SongItems from '././SongItems';

const SongList = props => {
	const inList = props.songs.map(song => (
		<SongItems
			delete={props.delete}
			titleName={song.titleName}
			artistName={song.artistName}
			genreName={song.genreName}
			ratingNum={song.ratingNum}
			key={song.key}
		/>
	));
	return <>{inList}</>;
};
export default SongList;
