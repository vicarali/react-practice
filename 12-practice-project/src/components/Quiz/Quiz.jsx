import { Answers } from "../Answers/Answers";
import { QuestionOverview } from "../QuestionOverview/QuestionOverview";
import { QuizSummary } from "../QuizSummary/QuizSummary";
import "./Quiz.css";
import { useState } from "react";

function Quiz({ shuffledQuestions, correctAnswers }) {
	const [currentStep, setStep] = useState(1);
	const [timerProgress, setTimerProgress] = useState(100);
	const [activeAnswer, setActiveAnswer] = useState();
	const [answerState, setAnswerState] = useState("unanswered");
	const lastStep = 7;

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

	return currentStep <= lastStep ? (
		<main className="quiz">
			<QuestionOverview
				currentStep={currentStep}
				goToNextStepAfterTimeRanOut={goToNextStepAfterTimeRanOut}
				timerProgress={timerProgress}
				setTimerProgress={setTimerProgress}
				answerState={answerState}
			>
				{shuffledQuestions[currentStep - 1].text}
			</QuestionOverview>
			<Answers
				handleAnswerSelection={handleAnswerSelection}
				activeAnswer={activeAnswer}
				answerState={answerState}
			>
				{shuffledQuestions[currentStep - 1].answers}
			</Answers>
		</main>
	) : (
		<QuizSummary></QuizSummary>
	);
}

export default Quiz;
