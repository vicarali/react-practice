import "./Answers.css";

export function Answers({ children }) {
	let answerItems = children.map((answer, index) => {
		return (
			<li className="answers__item" key={index}>
				<button className="answers__button" data-answer-id={index}>
					{answer}
				</button>
			</li>
		);
	});

	shuffleArray(answerItems);

	return <ul className="answers">{answerItems}</ul>;
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
