import { Answers } from "../Answers/Answers";
import { QuestionOverview } from "../QuestionOverview/QuestionOverview";
import "./Quiz.css";
import questions from "../../assets/questions";
import { useState } from "react";

function Quiz() {
	const [currentStep, setStep] = useState(0);

	function verifyAnswer(answer) {
		const correctAnswer = questions[currentStep].answers[0];

		if (answer === correctAnswer) {
			setStep((previousStep) => {
				return previousStep + 1;
			});
		}
	}

	return (
		<main className="quiz">
			<QuestionOverview currentStep={currentStep}>
				{questions[currentStep].text}
			</QuestionOverview>
			<Answers verifyAnswer={verifyAnswer}>
				{questions[currentStep].answers}
			</Answers>
		</main>
	);
}

export default Quiz;
