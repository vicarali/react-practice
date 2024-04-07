import ProjectSummary from "../ProjectSummary/ProjectSummary";
import TasksView from "../TasksView/TasksView";
import { createPortal } from "react-dom";
import "./ProjectView.css";

export default function ProjectView({
	currentProject,
	onProjectRemoval,
	addTask,
	removeTask
}) {
	return (
		<>
			{createPortal(
				<div className="project-view">
					<ProjectSummary
						currentProject={currentProject}
						onProjectRemoval={onProjectRemoval}
					/>
					<hr></hr>
					<TasksView
						currentProject={currentProject}
						addTask={addTask}
						removeTask={removeTask}
					/>
				</div>,
				document.getElementById("main-view")
			)}
		</>
	);
}
