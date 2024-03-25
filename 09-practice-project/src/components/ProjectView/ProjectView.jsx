import ProjectSummary from "../ProjectSummary/ProjectSummary";
import TasksView from "../TasksView/TasksView";
import "./ProjectView.css";

export default function ProjectView() {
	return (
		<main className="project-view">
			<ProjectSummary />
			<hr></hr>
			<TasksView />
		</main>
	);
}
