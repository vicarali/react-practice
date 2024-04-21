import { Answers } from "../Answers/Answers";
import { QuestionOverview } from "../QuestionOverview/QuestionOverview";
import "./Quiz.css";
import questions from "../../assets/questions";
import { useState } from "react";

function Quiz() {
	const [step, setStep] = useState(0);

	function handleSetStep() {
		setStep((previousStep) => {
			return previousStep++;
		});
	}

	return (
		<main className="quiz">
			<QuestionOverview>{questions[step].text}</QuestionOverview>
			<Answers handleSetStep={handleSetStep}>{questions[step].answers}</Answers>
		</main>
	);
}

export default Quiz;
