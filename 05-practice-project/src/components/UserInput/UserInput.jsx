import NumberField from "../NumberField/NumberField";
import "./UserInput.css";

function UserInput({ fieldValues, setFieldValues }) {
	function handleNumberChange(event) {
		const input = event.target;

		setFieldValues((prevFieldValues) => {
			let newFieldValues = { ...prevFieldValues };
			newFieldValues[input.name] = Number(input.value);
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
