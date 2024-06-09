import { Answers } from "../Answers/Answers";
import { QuestionOverview } from "../QuestionOverview/QuestionOverview";
import "./Quiz.css";
import { useState } from "react";

function Quiz({ shuffledQuestions, correctAnswers }) {
	const [currentStep, setStep] = useState(0);
	const [timerProgress, setTimerProgress] = useState(100);

	function verifyAnswer(answer) {
		if (correctAnswers.includes(answer)) {
			goToNextStep();
		}
	}

	function goToNextStepAfterTimeRanOut() {
		goToNextStep();
	}

	function goToNextStep() {
		setStep((previousStep) => {
			return previousStep + 1;
		});
	}

	return (
		<main className="quiz">
			<QuestionOverview
				currentStep={currentStep}
				goToNextStepAfterTimeRanOut={goToNextStepAfterTimeRanOut}
				timerProgress={timerProgress}
				setTimerProgress={setTimerProgress}
			>
				{shuffledQuestions[currentStep].text}
			</QuestionOverview>
			<Answers verifyAnswer={verifyAnswer}>
				{shuffledQuestions[currentStep].answers}
			</Answers>
		</main>
	);
}

export default Quiz;
