import quizCompleteImage from "../../assets/quiz-complete.png";
import "./QuizSummary.css";

export function QuizSummary() {
	return (
		<main className="quiz-summary">
			<img src={quizCompleteImage} alt="" className="quiz-summary__image" />
			<h2 className="quiz-summary__title">QUIZ COMPLETED!</h2>
		</main>
	);
}
