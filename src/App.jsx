import { useState } from "react";
import FlipCard from "./components/flipCard";
import "./styles/App.css";

function App() {
	const [mode, setMode] = useState(0);

	function game1() {
		setMode(1);
	}

	function stop() {
		setMode(0);
	}

	return (
		<div className="App">
			<h1>Memory Game</h1>
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
					<button onClick={game1}>Magic Match</button>
					<button onClick={stop}>Stop</button>
					<button>Fruit Memorize</button>
				</div>
			</h2>

			<ChangeGame mode={mode} />
		</div>
	);
}
const ChangeGame = (props) => {
	if (props.mode === 1) {
		return <FlipCard />;
	} else return;
};

export default App;
