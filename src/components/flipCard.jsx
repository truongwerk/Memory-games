import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/flipCard.css";

import cover from "../img/flipCard/cover.png";
import armor from "../img/flipCard/upg_armor-min.png";
import bow from "../img/flipCard/upg_bow-min.png";
import coin from "../img/flipCard/coin-min.png";
import map from "../img/flipCard/map-min.png";
import shield from "../img/flipCard/upg_shield-min.png";
import sword from "../img/flipCard/upg_sword-min.png";
import flipSound from "../sound/flip.mp3";

const cardImages = [
	{ src: armor, matched: false },
	{ src: bow, matched: false },
	{ src: coin, matched: false },
	{ src: map, matched: false },
	{ src: shield, matched: false },
	{ src: sword, matched: false },
];
function FlipCard() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disable, setDisable] = useState(false);

	//From start to end take random item and swap with current item  12!
	const newGame = () => {
		let shuffledCards = [...cardImages, ...cardImages];
		for (let i = shuffledCards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = shuffledCards[i];
			shuffledCards[i] = shuffledCards[j];
			shuffledCards[j] = temp;
		}
		shuffledCards = shuffledCards.map((card, index) => ({
			...card,
			id: index,
		}));
		// Reset and create game
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns(0);
		setTimeout(() => {
			setCards(shuffledCards);
		}, 200);
	};

	const handleChoice = (card) => {
		if (choiceOne === null) {
			setChoiceOne(card);
		} else {
			setChoiceTwo(card);
		}
	};

	useEffect(() => {
		newGame();
	}, []);

	//Check choices
	useEffect(() => {
		if (choiceTwo) {
			setDisable(true);
			if (choiceOne.src === choiceTwo.src) {
				setCards(
					cards.map((card) => {
						if (card.src === choiceOne.src) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					})
				);
			}
			setTimeout(() => {
				setChoiceOne(null);
				setChoiceTwo(null);
				setTurns((pre) => pre + 1);
				setDisable(false);
			}, 700);
		}
	}, [choiceTwo]);

	return (
		<div id="flipCard">
			<h1>Magic Match</h1>
			<button onClick={newGame}>New Game</button>
			<h3>Turn: {turns}</h3>
			<div className="card-box">
				{cards.map((card) => (
					<Card
						card={card}
						key={card.id}
						handleChoice={handleChoice}
						disable={disable}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
					/>
				))}
			</div>
		</div>
	);
}

function Card(props) {
	const handleClick = () => {
		if (!props.disable) {
			let audio = new Audio(flipSound);
			audio.volume = 0.4;
			audio.play();
			props.handleChoice(props.card);
		}
	};
	return (
		<div className="card">
			<div className={props.flipped ? "flipped" : ""}>
				<img className="fontCard" src={props.card.src} alt="card font" />
				<img
					onClick={handleClick}
					className="backCard"
					src={cover}
					alt="card back"
				/>
			</div>
		</div>
	);
}
Card.propTypes = {
	card: PropTypes.object,
	handleChoice: PropTypes.func,
	flipped: PropTypes.bool,
	disable: PropTypes.bool,
};

export default FlipCard;
