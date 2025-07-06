import styles from "./ToDoList.module.css";
import { DndContext } from "@dnd-kit/core";
import { TasksColumn } from "../TasksColumn/TasksColumn";
import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";

const ToDoList = () => {
	const tasksContext = useContext(TasksContext);

	return (
		<DndContext onDragEnd={tasksContext.handleDragEnd}>
			<ul className={styles.columns}>
				<TasksColumn title="TO DO" tasksStatus="toDo"></TasksColumn>
				<TasksColumn title="IN PROGRESS" tasksStatus="inProgress"></TasksColumn>
				<TasksColumn title="DONE" tasksStatus="done"></TasksColumn>
			</ul>
		</DndContext>
	);
};

export default ToDoList;
