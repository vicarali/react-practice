import "./TaskInput.css";
import { useRef } from "react";

export default function TaskInput({ currentProject, addTask }) {
	const taskInput = useRef();

	function handleAddTask() {
		const taskInputTitle = taskInput.current.value;
		addTask(taskInputTitle, currentProject.title);
	}

	return (
		<div className="task-input">
			<input ref={taskInput} type="text" className="task-input__field" />
			<button className="task-input__btn" onClick={handleAddTask}>
				Add Task
			</button>
		</div>
	);
}
