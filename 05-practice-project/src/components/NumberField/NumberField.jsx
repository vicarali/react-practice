import "./NumberField.css";

function NumberField({ name }) {
	return (
		<label>
			{name}
			<input type="number" name={name} id={name} />
		</label>
	);
}

export default NumberField;
