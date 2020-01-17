import React from 'react';

const SongForm = props => {
	//console.log(props);
	return (
		<form onSubmit={props.onSubmitHandler}>
			<input name="title" type="text" placeholder="--add title here--" />
			<input name="artist" type="text" placeholder="--add artist here--" />
			<select name="genre">
				<option value="Rock">Rock</option>
				<option value="Country">Country</option>
				<option value="Classical">Classical</option>
				<option value="Pop">Pop</option>
				<option value="Hip-Hop">Hip-Hop</option>
			</select>
			<select name="rating">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<input type="submit" value="Submit" onClick={props.makeId} />
		</form>
	);
};
export default SongForm;
