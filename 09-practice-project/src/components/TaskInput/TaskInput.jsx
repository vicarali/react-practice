import "./TaskInput.css";

export default function TaskInput() {
	return (
		<div className="task-input">
			<input type="text" className="task-input__field" />
			<button className="task-input__btn">Add Task</button>
		</div>
	);
}
