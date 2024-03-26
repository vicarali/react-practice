import ProjectSummary from "../ProjectSummary/ProjectSummary";
import TasksView from "../TasksView/TasksView";
import { createPortal } from "react-dom";
import "./ProjectView.css";

export default function ProjectView() {
	return (
		<>
			{createPortal(
				<div className="project-view">
					<ProjectSummary />
					<hr></hr>
					<TasksView />
				</div>,
				document.getElementById("main-view")
			)}
		</>
	);
}
