import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";

function App() {
	return (
		<>
			<Header />
			<main>
				<UserInput />
				<ResultsTable />
			</main>
		</>
	);
}

export default App;
