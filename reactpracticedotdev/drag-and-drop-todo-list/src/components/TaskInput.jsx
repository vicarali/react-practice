import { useRef } from "react";
import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

export function TaskInput() {
	const taskInputField = useRef(null);
	const setToDoTasks = useContext(TasksContext).setToDoTasks;

	function handleButtonClick() {
		const newToDoTask = {
			value: taskInputField.current.value,
			status: "toDo"
		};

		setToDoTasks((previousToDoTasks) => {
			const newToDoTasks = new Map(previousToDoTasks);
			newToDoTasks.set(newToDoTask.value, newToDoTask);
			return newToDoTasks;
		});
	}

	return (
		<div>
			<input ref={taskInputField}></input>
			<button onClick={handleButtonClick}>ADD TASK</button>
		</div>
	);
}
