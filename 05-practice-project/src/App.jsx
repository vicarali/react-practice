import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";
import { useState } from "react";

const initialValues = {
	initialInvestment: 0,
	annualInvestment: 0,
	expectedReturn: 0,
	duration: 0
};

function App() {
	const [fieldValues, setFieldValues] = useState(initialValues);

	return (
		<>
			<Header />
			<main>
				<UserInput fieldValues={fieldValues} setFieldValues={setFieldValues} />
				<ResultsTable fieldValues={fieldValues} />
			</main>
		</>
	);
}

export default App;
