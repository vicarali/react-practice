import { Answers } from "../Answers/Answers";
import { QuestionOverview } from "../QuestionOverview/QuestionOverview";
import "./Quiz.css";
import questions from "../../assets/questions";
import { useState } from "react";

function Quiz() {
	const [step, setStep] = useState(0);

	function advanceStep() {
		setStep((previousStep) => {
			return previousStep + 1;
		});
	}

	return (
		<main className="quiz">
			<QuestionOverview>{questions[step].text}</QuestionOverview>
			<Answers advanceStep={advanceStep}>{questions[step].answers}</Answers>
		</main>
	);
}

export default Quiz;
