import "./Answers.css";

export function Answers({ children, verifyAnswer }) {
	let answerItems = children.map((answer, index) => {
		return (
			<li className="answers__item" key={index}>
				<button
					className="answers__button"
					onClick={() => verifyAnswer(answer)}
				>
					{answer}
				</button>
			</li>
		);
	});

	return <ul className="answers">{answerItems}</ul>;
}


