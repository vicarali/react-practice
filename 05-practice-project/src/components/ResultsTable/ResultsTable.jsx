import "./ResultsTable.css";
import { calculateInvestmentResults, formatter } from "../../util/investment";

const columns = [
	"Year",
	"Investment Value",
	"Interest (Year)",
	"Total interest",
	"Invested Capital"
];

export default function ResultsTable({ fieldValues }) {
	const tableHeadings = columns.map((column) => {
		return <th key={column}>{column}</th>;
	});

	const investmentResults = calculateInvestmentResults(fieldValues);
	const tableRows = investmentResults.map(getRowFromInvestmentResult);

	return (
		<table id="result">
			<thead>
				<tr>{tableHeadings}</tr>
			</thead>
			<tbody>{tableRows}</tbody>
		</table>
	);
}

function getRowFromInvestmentResult(result) {
	const rowCells = Object.entries(result).map(getCellFromRow);

	return <tr key={result.year}>{rowCells}</tr>;
}

function getCellFromRow([key, value]) {
	let formattedValue = value;
	if (key !== "year") formattedValue = formatter.format(value);

	return <td key={key}>{formattedValue}</td>;
}
