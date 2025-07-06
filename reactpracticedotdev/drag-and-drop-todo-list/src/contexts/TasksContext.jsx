import { createContext } from "react";
import { useState } from "react";

export const TasksContext = createContext({
	toDoTasks: new Map(),
	setToDoTasks: () => {},
	handleDragEnd: () => {}
});

export function TasksContextProvider({ children }) {
	const [toDoTasks, setToDoTasks] = useState(new Map());
	const contextValue = {
		toDoTasks,
		setToDoTasks,
		handleDragEnd
	};

	return (
		<TasksContext.Provider value={contextValue}>
			{children}
		</TasksContext.Provider>
	);

	function handleDragEnd(event) {
		const { active: task, over: tasksColumn } = event;

		setToDoTasks((previousToDoTasks) => {
			const newToDoTasks = new Map(previousToDoTasks);

			if (tasksColumn?.id === "trash") newToDoTasks.delete(task.id);
			else {
				const currentToDoTask = newToDoTasks.get(task.id);
				currentToDoTask.status = tasksColumn?.id;
			}

			return newToDoTasks;
		});
	}
}
