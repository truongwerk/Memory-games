import { useState } from "react";
import PropTypes from "prop-types";
import FlipCard from "./components/flipCard";
import Memorize from "./components/memorize";
import "./styles/App.css";

function App() {
	const [mode, setMode] = useState("rule");

	function magic() {
		setMode("magic");
	}

	function rule() {
		setMode("rule");
	}

	function fruit() {
		setMode("fruit");
	}

	return (
		<div className="App">
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
				<div className="control">
					<button onClick={magic}>Magic Match</button>
					<button onClick={rule}>Rules</button>
					<button onClick={fruit}>Fruit Memorize</button>
				</div>
			</h2>
			<ChangeGame mode={mode} />
		</div>
	);
}

const ChangeGame = (props) => {
	if (props.mode === "magic") {
		return <FlipCard />;
	} else if (props.mode === "rule")
		return (
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
		);
	else return <Memorize />;
};
ChangeGame.propTypes = {
	mode: PropTypes.string,
};

export default App;
