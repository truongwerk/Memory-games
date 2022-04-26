import FlipCard from "./components/flipCard";
import Memorize from "./components/memorize";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "./styles/App.css";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<div className="control">
					<Link to="/">
						<button>Home Page</button>
					</Link>
					<Link to="/flipCard">
						<button>Magic Match</button>
					</Link>
					<Link to="/memorize">
						<button>Fruit Memorize</button>
					</Link>
				</div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/flipCard" element={<FlipCard />} />
					<Route path="/memorize" element={<Memorize />} />
				</Routes>
			</div>
		</HashRouter>
	);
}

function HomePage() {
	return (
		<>
			<h1>Memory Games</h1>
			<h2>
				© 2022 Create by{" "}
				<a
					href="https://github.com/truongwerk"
					target="_blank"
					rel="noreferrer noopener"
				>
					Tong Quang Truong
				</a>
			</h2>
			<div className="rule">
				<h1>Rules:</h1>
				<h2>Magic Match:</h2>
				<p>
					Chooses a card and flip it over then selects another card and flip it
					over. If the two cards that do not match, those cards are turned face
					down. Try to flip all the cards with as few turns as possible.
				</p>
				<h2>Fruit Memorize:</h2>
				<p>
					You are presented with multiple images of fruits and veggies. The
					images get shuffled every-time they are clicked. You CAN NOT click on
					any image more than once or else you lose and your score resets to
					zero. Try to get 12 points. You can cheat with console.
				</p>
			</div>
		</>
	);
}

export default App;
