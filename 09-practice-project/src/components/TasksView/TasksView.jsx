import "./TasksView.css";
import TaskInput from "../TaskInput/TaskInput";
import TasksListing from "../TasksListing/TasksListing";

export default function TasksView({ currentProject, addTask, removeTask }) {
	// function removeTask(task) {
	// 	let listOfTasks = [];
	// 	if (tasks.length > 0) listOfTasks.push(...tasks);

	// 	listOfTasks.splice(indexOfTask, 1);

	// 	setTasks(listOfTasks);
	// }

	return (
		<>
			<h2 className="tasks-view__title">Tasks</h2>
			<TaskInput currentProject={currentProject} addTask={addTask} />
			<TasksListing currentProject={currentProject} removeTask={removeTask} />
		</>
	);
}
