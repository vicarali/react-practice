import "./NumberField.css";

function NumberField({ name, value, changeHandler }) {
	return (
		<label>
			{name}
			<input
				type="number"
				name={name}
				id={name}
				value={value}
				onChange={changeHandler}
			/>
		</label>
	);
}

export default NumberField;
