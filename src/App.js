/* import React from 'react';
import SongOverview from './SongOverview';
import './App.css';

function App() {
	return <SongOverview />;
}

export default App;
 */
import SongOverview from './SongOverview';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Playlist</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/users">
						<Users />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	return (
		<div>
			<h2>Playlist</h2>
			<SongOverview />
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>Daaaaaaaan</h2>
			<p>Super gezellig dat je hier bent! je hebt me alleen net gemist.</p>
		</div>
	);
}

function Users() {
	return (
		<div>
			<h2>Users</h2>
			<img
				src="https://media.giphy.com/media/VwoJkTfZAUBSU/giphy.gif"
				alt=""
			></img>
		</div>
	);
}
