import { Answers } from "../Answers/Answers";
import { QuestionOverview } from "../QuestionOverview/QuestionOverview";
import "./Quiz.css";
import { useState } from "react";

function Quiz({ shuffledQuestions, correctAnswers }) {
	const [currentStep, setStep] = useState(0);
	const [timerProgress, setTimerProgress] = useState(100);
	const [activeAnswer, setActiveAnswer] = useState();
	const [answerState, setAnswerState] = useState("unanswered");

	function handleAnswerSelection(answer, answerIndex) {
		setActiveAnswer(answerIndex);
		setAnswerState("validatingAnswer");
		setTimeout(validateAnswer, 1000, answer);
	}

	function validateAnswer(answer) {
		if (correctAnswers.includes(answer)) {
			setAnswerState("correct");
		} else {
			setAnswerState("wrong");
		}

		setTimeout(goToNextStep, 1000);
	}

	function goToNextStepAfterTimeRanOut() {
		goToNextStep();
	}

	function goToNextStep() {
		setStep((previousStep) => {
			return previousStep + 1;
		});

		setAnswerState("unanswered");
	}

	return (
		<main className="quiz">
			<QuestionOverview
				currentStep={currentStep}
				goToNextStepAfterTimeRanOut={goToNextStepAfterTimeRanOut}
				timerProgress={timerProgress}
				setTimerProgress={setTimerProgress}
				answerState={answerState}
			>
				{shuffledQuestions[currentStep].text}
			</QuestionOverview>
			<Answers handleAnswerSelection={handleAnswerSelection}>
				{shuffledQuestions[currentStep].answers}
			</Answers>
		</main>
	);
}

export default Quiz;
