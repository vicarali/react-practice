import "./QuestionOverview.css";
import { useEffect, useState } from "react";

export function QuestionOverview({
	children,
	currentStep,
	goToNextStepAfterTimeRanOut,
	timerProgress,
	setTimerProgress
}) {
	useEffect(() => {
		const timerInterval = setInterval(updateTimer, 100);

		return () => {
			clearInterval(timerInterval);
			setTimerProgress(100);
		};
	}, [currentStep]);

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
				className="question-overview__progress-bar"
				max="100"
				value={timerProgress}
			></progress>
			<label className="question-overview__title">{children}</label>
		</div>
	);
}
