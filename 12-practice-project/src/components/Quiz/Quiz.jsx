import { Answers } from "../Answers/Answers";
import { QuestionOverview } from "../QuestionOverview/QuestionOverview";
import "./Quiz.css";
import questions from "../../assets/questions";
import { useRef, useState } from "react";

function Quiz() {
	const [step, setStep] = useState(0);
	const answerButtons = useRef([]);

	function verifyAnswer(answerID) {
		const correctAnswerID = 0;

		if (answerID === correctAnswerID) {
			setStep((previousStep) => {
				return previousStep + 1;
			});
		}
	}

	return (
		<main className="quiz">
			<QuestionOverview>{questions[step].text}</QuestionOverview>
			<Answers verifyAnswer={verifyAnswer} ref={answerButtons}>
				{questions[step].answers}
			</Answers>
		</main>
	);
}

export default Quiz;
