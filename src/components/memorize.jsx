import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/memorize.css";

import apple from "../img/memorize/apple.png";
import banana from "../img/memorize/banana.png";
import beetroot from "../img/memorize/beetroot.png";
import carrot from "../img/memorize/carrot.png";
import cherry from "../img/memorize/cherry.png";
import grape from "../img/memorize/grape.png";
import lemon from "../img/memorize/lemon.png";
import orange from "../img/memorize/orange.png";
import pear from "../img/memorize/pear.png";
import peeledBanana from "../img/memorize/peeledBanana.png";
import pepper from "../img/memorize/pepper.png";
import tomato from "../img/memorize/tomato.png";

import buttonSound from "../sound/button.mp3";

const cardImages = [
	{ name: "Apple", src: apple },
	{ name: "Banana", src: banana },
	{ name: "Beetroot", src: beetroot },
	{ name: "Carrot", src: carrot },
	{ name: "Cherry", src: cherry },
	{ name: "Grape", src: grape },
	{ name: "Lemon", src: lemon },
	{ name: "Orange", src: orange },
	{ name: "Pear", src: pear },
	{ name: "Peeled Banana", src: peeledBanana },
	{ name: "Pepper", src: pepper },
	{ name: "Tomato", src: tomato },
];

function Memorize() {
	const [cards, setCards] = useState([]);
	const [choices, setChoices] = useState([]);
	const [currentChoice, setCurrentChoice] = useState(null);
	const [score, setScore] = useState(0);
	const [disable, setDisable] = useState(false);

	function newGame() {
		shuffleCards();
		setChoices([]);
		setCurrentChoice(null);
		setScore(0);
		setDisable(false);
		console.clear();
		console.table([
			"Apple",
			"Banana",
			"Beetroot",
			"Carrot",
			"Cherry",
			"Grape",
			"Lemon",
			"Orange",
			"Pear",
			"Peeled Banana",
			"Pepper",
			"Tomato",
		]);
	}

	function shuffleCards() {
		let newCards = [...cardImages];
		for (let i = newCards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = newCards[i];
			newCards[i] = newCards[j];
			newCards[j] = temp;
		}
		setCards(newCards);
	}

	function handleChoice(card) {
		setCurrentChoice(card);
		shuffleCards();
	}

	function checkChoice() {
		for (let i = 0; i < choices.length; i++) {
			if (currentChoice.name === choices[i].name) {
				setDisable(true);
				return;
			}
		}
		setChoices(choices.concat(currentChoice));
		setScore(score + 1);
	}

	useEffect(() => {
		newGame();
	}, []);

	useEffect(() => {
		if (currentChoice) {
			if (choices.length === 0) {
				setChoices(choices.concat(currentChoice));
				setScore(score + 1);
			} else {
				checkChoice();
			}
			setCurrentChoice(null);
		}
	}, [currentChoice]);

	if (score === 12) {
		setDisable(true);
	}
	return (
		<div className="memorize">
			<h1>Fruit Memorize</h1>
			<button onClick={newGame}>New Game</button>
			<h3>Score: {score}</h3>
			<Result score={score} disable={disable} />
			<div className="card-box">
				{cards.map((card, index) => (
					<Card
						card={card}
						key={index}
						handleChoice={handleChoice}
						disable={disable}
					/>
				))}
			</div>
		</div>
	);
}

function Card(props) {
	function handleClick() {
		if (!props.disable) {
			console.log(props.card.name);

			let audio = new Audio(buttonSound);
			audio.playbackRate = 1.5;
			audio.volume = 0.6;
			audio.play();
			props.handleChoice(props.card);
		} else return;
	}
	return (
		<div className="card">
			<img src={props.card.src} alt="fruit image" onClick={handleClick} />
		</div>
	);
}
Card.propTypes = {
	card: PropTypes.object,
	handleChoice: PropTypes.func,
	disable: PropTypes.bool,
};

function Result(props) {
	if (props.score === 12) {
		return <h1>Winner Winner Chicken Dinner</h1>;
	} else if (props.disable) {
		return <h1>You lose.</h1>;
	}
}
Result.propTypes = {
	score: PropTypes.number,
	disable: PropTypes.bool,
};

export default Memorize;
