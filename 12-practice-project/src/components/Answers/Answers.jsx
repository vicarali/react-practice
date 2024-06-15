import "./Answers.css";

export function Answers({ children, handleAnswerSelection }) {
	let activeAnswerIndex;

	let answerItems = children.map((answer, index) => {
		return (
			<li className="answers__item" key={index}>
				<button
					className="answers__button"
					onClick={() => handleAnswerSelection(answer, index)}
				>
					{answer}
				</button>
			</li>
		);
	});

	return <ul className="answers">{answerItems}</ul>;
}


