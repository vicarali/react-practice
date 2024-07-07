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
	const [answeredQuestions, setAnsweredQuestions] = useState([]);

	const lastStep = 7;

	function handleAnswerSelection(answer, answerIndex) {
		setActiveAnswer(answerIndex);
		setAnswerState("validatingAnswer");
		setTimeout(validateAnswer, 1000, answer);
	}

	function validateAnswer(answer) {
		let answerState = "wrong";

		if (correctAnswers.includes(answer)) answerState = "correct";

		setAnswerState(answerState);
		addAnsweredQuestion(answer, answerState);

		setTimeout(goToNextStep, 1000);
	}

	function addAnsweredQuestion(answer, answerState) {
		setAnsweredQuestions((prevAnsweredQuestions) => {
			const answeredQuestion = {
				question: shuffledQuestions[currentStep - 1].text,
				answer: answer,
				answerState: answerState
			};
			const newAnsweredQuestions = [...prevAnsweredQuestions];

			newAnsweredQuestions.push(answeredQuestion);

			return newAnsweredQuestions;
		});
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
