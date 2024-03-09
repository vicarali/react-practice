import NumberField from "../NumberField/NumberField";
import "./UserInput.css";

function UserInput() {
	return (
		<div id="user-input">
			<div className="input-group">
				<NumberField name="Hello" />
			</div>
		</div>
	);
}

export default UserInput;
