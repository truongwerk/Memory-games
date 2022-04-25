import { useState } from "react";
import PropTypes from "prop-types";
import FlipCard from "./components/flipCard";
import "./styles/App.css";

function App() {
	const [mode, setMode] = useState("rule");

	function game1() {
		setMode("magic");
	}

	function stop() {
		setMode("rule");
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
					<button onClick={stop}>Rules</button>
					<button>Fruit Memorize</button>
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
					voluptates nihil vel doloribus, a aliquid mollitia consequuntur dicta
					velit, natus alias blanditiis repudiandae doloremque ea cumque dolor,
					numquam quos praesentium.
				</p>
				<h2>Fruit Memorize:</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem velit temporibus, voluptatum nisi adipisci, ex ipsa
					labore optio veniam animi quisquam dolore magnam facilis ratione
					consequatur amet illum cumque architecto!
				</p>
			</div>
		);
};
ChangeGame.propTypes = {
	mode: PropTypes.string,
};

export default App;
