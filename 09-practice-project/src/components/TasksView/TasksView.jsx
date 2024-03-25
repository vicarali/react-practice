import "./TasksView.css";
import TaskInput from "../TaskInput/TaskInput";
import TasksListing from "../TasksListing/TasksListing";

export default function TasksView() {
	return (
		<>
			<h2 className="tasks-view__title">Tasks</h2>
			<TaskInput />
			<TasksListing />
		</>
	);
}
