import NumberField from "../NumberField/NumberField";
import "./UserInput.css";
import { useState } from "react";

const initialValues = {
	initialInvestment: 0,
	annualInvestment: 0,
	expectedReturn: 0,
	duration: 0
};

function UserInput() {
	const [fieldValues, setFieldValues] = useState(initialValues);

	function handleNumberChange(event) {
		const input = event.target;

		setFieldValues((prevFieldValues) => {
			let newFieldValues = { ...prevFieldValues };
			newFieldValues[input.name] = input.value;
			return newFieldValues;
		});
	}

	let numberFields = Object.entries(fieldValues).map(([fieldName]) => {
		return (
			<NumberField
				name={fieldName}
				key={fieldName}
				value={fieldValues[fieldName]}
				changeHandler={handleNumberChange}
			/>
		);
	});

	return (
		<div id="user-input">
			<div className="input-group">{numberFields}</div>
		</div>
	);
}

export default UserInput;
