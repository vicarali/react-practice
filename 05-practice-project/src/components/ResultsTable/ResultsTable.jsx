import "./ResultsTable.css";

const columns = [
	"Year",
	"Investment Value",
	"Interest (Year)",
	"Total interest",
	"Invested Capital"
];

function ResultsTable() {
	const tableHeadings = columns.map((column) => {
		return <th>{column}</th>;
	});

	return (
		<table id="result">
			<thead>{tableHeadings}</thead>
			<tbody></tbody>
		</table>
	);
}

export default ResultsTable;
