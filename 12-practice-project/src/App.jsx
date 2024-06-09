import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import questions from "./assets/questions";

function App() {
	let shuffledQuestions = JSON.parse(JSON.stringify(questions));
	let correctAnswers = [];

	shuffledQuestions.forEach((question) => {
		correctAnswers.push(question.answers[0]);
		shuffleArray(question.answers);
	});

	return (
		<>
			<Header></Header>
			<Quiz
				shuffledQuestions={shuffledQuestions}
				correctAnswers={correctAnswers}
			></Quiz>
		</>
	);
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

export default App;
