import "./QuestionOverview.css";

export function QuestionOverview() {
	return (
		<div className="question-overview">
			<progress
				className="question-overview__progress-bar"
				max="100"
			></progress>
			<label className="question-overview__title">Test of a title</label>
		</div>
	);
}
