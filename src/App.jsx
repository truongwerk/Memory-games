import { useState } from "react";
import "./styles/App.css";

import cover from "./img/flipCard/cover.png";
import armor from "./img/flipCard/upg_armor-min.png";
import bow from "./img/flipCard/upg_bow-min.png";
import coin from "./img/flipCard/coin-min.png";
import map from "./img/flipCard/map-min.png";
import shield from "./img/flipCard/upg_shield-min.png";
import sword from "./img/flipCard/upg_sword-min.png";

const cardImages = [armor, bow, coin, map, shield, sword];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	//From start to end take random item and swap with current item  12!
	const randomCards = () => {
		let shuffledCards = [...cardImages, ...cardImages];
		for (let i = shuffledCards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = shuffledCards[i];
			shuffledCards[i] = shuffledCards[j];
			shuffledCards[j] = temp;
		}
		setCards(shuffledCards);
		setTurns(0);
	};
	// console.log(cards, turns);

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={randomCards}>New Game</button>

			<div className="card-grid">
				{cards.map((card, index) => (
					<div className="card" key={index}>
						<div>
							<img className="fontCard" src={card} alt="card font" />
							<img className="backCard" src={cover} alt="card back" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
