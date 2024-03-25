import ProjectSummary from "../ProjectSummary/ProjectSummary";
import TasksView from "../TasksView/TasksView";
import "./ProjectView.css";

export default function ProjectView() {
	return (
		<div className="project-view">
			<ProjectSummary />
			<hr></hr>
			<TasksView />
		</div>
	);
}
