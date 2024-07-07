import "./Answers.css";

export function Answers({
	children,
	handleAnswerSelection,
	activeAnswer,
	answerState
}) {
	let activeAnswerClass = "";

	switch (answerState) {
		case "validatingAnswer":
			activeAnswerClass = "answers__button--selected";
			break;
		case "correct":
			activeAnswerClass = "answers__button--correct";
			break;
		case "wrong":
			activeAnswerClass = "answers__button--wrong";
			break;
	}

	let answerItems = children.map((answer, index) => {
		let buttonClasses = "answers__button";

		if (index === activeAnswer) buttonClasses += ` ${activeAnswerClass}`;

		return (
			<li className="answers__item" key={index}>
				<button
					className={buttonClasses}
					onClick={() => handleAnswerSelection(answer, index)}
				>
					{answer}
				</button>
			</li>
		);
	});

	return <ul className="answers">{answerItems}</ul>;
}


