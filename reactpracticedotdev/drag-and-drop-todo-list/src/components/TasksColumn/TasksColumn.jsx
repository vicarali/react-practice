import styles from "./TasksColumn.module.css";
import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { Task } from "../Task/Task";
import { useDroppable } from "@dnd-kit/core";
import { Trash } from "./Trash/Trash";

export function TasksColumn({ title, tasksStatus }) {
	const toDoTasks = useContext(TasksContext).toDoTasks;
	const { setNodeRef: setDroppableRef } = useDroppable({
		id: tasksStatus
	});

	return (
		<li className={styles.tasksColumn}>
			<h2>{title}</h2>
			<ul className={styles.tasksListing} ref={setDroppableRef}>
				{filterTasksByStatus(toDoTasks, tasksStatus).map((task) => (
					<Task key={task.value} value={task.value} status={task.status} />
				))}
			</ul>

			<TasksColumn.Trash />
		</li>
	);
}

function filterTasksByStatus(tasks, tasksStatus) {
	const tasksWithStatus = [];

	for (const [key, value] of tasks.entries()) {
		if (value.status === tasksStatus) tasksWithStatus.push(value);
	}

	return tasksWithStatus;
}

TasksColumn.Trash = function TasksColumnTrash() {
	return <Trash />;
};
