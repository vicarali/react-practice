import { Answers } from "../Answers/Answers";
import { QuestionOverview } from "../QuestionOverview/QuestionOverview";
import "./Quiz.css";

function Quiz() {
	return (
		<main className="quiz">
			<QuestionOverview></QuestionOverview>
			<Answers></Answers>
		</main>
	);
}

export default Quiz;
