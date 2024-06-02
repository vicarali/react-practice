import "./QuestionOverview.css";
import { useEffect, useState } from "react";

export function QuestionOverview({ children, currentStep }) {
	const [timerProgress, setTimerProgress] = useState(100);

	useEffect(() => {
		const timerInterval = setInterval(updateTimer, 100);

		return () => {
			setTimerProgress(100);
			clearInterval(timerInterval);
		};
	}, [currentStep]);

	function updateTimer() {
		setTimerProgress((previousProgress) => {
			if (previousProgress > 0) {
				return previousProgress - 1;
			}
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
