import "./QuestionOverview.css";
import { useEffect } from "react";

export function QuestionOverview({
	children,
	currentStep,
	goToNextStepAfterTimeRanOut,
	timerProgress,
	setTimerProgress,
	answerState
}) {
	let progressBarClasses = "question-overview__progress-bar";

	if (answerState === "answered")
		progressBarClasses += " question-overview__progress-bar--answered";

	useEffect(() => {
		let intervalMs = 100;

		if (answerState === "answered") intervalMs = 10;

		const timerInterval = setInterval(updateTimer, intervalMs);

		return () => {
			clearInterval(timerInterval);
			setTimerProgress(100);
		};
	}, [currentStep, answerState]);

	function updateTimer() {
		setTimerProgress((previousProgress) => {
			if (previousProgress === 0) {
				goToNextStepAfterTimeRanOut();
			}

			return previousProgress - 1;
		});
	}

	return (
		<div className="question-overview">
			<progress
				className={progressBarClasses}
				max="100"
				value={timerProgress}
			></progress>
			<label className="question-overview__title">{children}</label>
		</div>
	);
}
