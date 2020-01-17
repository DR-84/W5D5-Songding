import React from 'react';
import SongForm from './Components/SongForm';
import SongList from './Components/SongList';

class SongOverview extends React.Component {
	constructor() {
		super();
		this.state = {
			songs: [],
			randomID: ''
		};

		this.onSubmitHandler = this.onSubmitHandler.bind(this);
		this.delete = this.delete.bind(this);
		this.sortTitle = this.sortTitle.bind(this);
		this.sortArtist = this.sortArtist.bind(this);
		this.makeid = this.makeid.bind(this);
	}
	//werruk nie, super stom!
	makeid() {
		console.log('makeId is activated');
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = 8;
		this.setState(prevState => {
			let updatedId = prevState.randomID;
			for (var i = 0; i < 8; i++) {
				updatedId += characters.charAt(
					Math.floor(Math.random() * charactersLength)
				);
			}
			return { randomID: updatedId };
		});
	}

	onSubmitHandler(event) {
		//console.log('submit got clicked yo', event.target.key.value);
		event.preventDefault();
		console.log(this.randomID);
		let targetTitle = event.target.title.value;
		let targetArtist = event.target.artist.value;
		let targetGenre = event.target.genre.value;
		let targetRating = event.target.rating.value;
		let targetKey = this.randomID;
		this.setState(prevState => {
			const updatedSongList = prevState.songs;
			updatedSongList.push({
				key: targetKey,
				titleName: targetTitle,
				artistName: targetArtist,
				genreName: targetGenre,
				ratingNum: targetRating
			});
			return {
				songs: updatedSongList
			};
		});
	}
	delete(event) {
		console.log('delete button', event.target.name);
		const songKey = event.target.name;
		this.setState(prevState => {
			const updatedSongList = prevState.songs;
			updatedSongList.splice(
				updatedSongList.findIndex(i => i.titleName === songKey),
				1
			);
			return {
				songs: updatedSongList
			};
		});
	}
	sortTitle(event) {
		/* console.log('sort button', event.target);*/
		this.setState(prevState => {
			const sortedSonglist = prevState.songs;
			sortedSonglist.sort((a, b) => (a.titleName > b.titleName ? 1 : -1));
			return {
				songs: sortedSonglist
			};
		});
	}
	sortArtist(event) {
		/* console.log('sort button', event.target);*/
		this.setState(prevState => {
			const sortedSonglist = prevState.songs;
			sortedSonglist.sort((a, b) => (a.artistName > b.artistName ? 1 : -1));
			return {
				songs: sortedSonglist
			};
		});
	}
	render() {
		return (
			<div>
				<SongForm onSubmitHandler={this.onSubmitHandler} makeId={this.makeid} />
				<table style={{ width: '100%' }}>
					<thead>
						<tr className="song-header">
							<th className="song-row__item">
								Song <button onClick={this.sortTitle}>Sort a-z</button>
							</th>

							<th className="song-row__item">
								Artist <button onClick={this.sortArtist}>Sort a-z</button>
							</th>
							<th className="song-row__item">Genre</th>
							<th className="song-row__item">Rating</th>
							<th className="song-row__item"></th>
						</tr>
					</thead>
					<tbody>
						<SongList songs={this.state.songs} delete={this.delete} />
					</tbody>
				</table>
			</div>
		);
	}
}

export default SongOverview;

/* let targetId = event.target.id;
		let targetTitle = event.target.title;

		this.setState(prevState => {
			const updatedShoppinglistItems = prevState.shoppingListItems;
			updatedShoppinglistItems.push({
				id: targetId,
				title: targetTitle
			});
			return {
				shoppingListItems: updatedShoppinglistItems
			};
		}); */
