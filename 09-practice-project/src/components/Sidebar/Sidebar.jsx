import AddProjectButton from "../AddProjectButton/AddProjectButton";
import ProjectsListing from "../ProjectsListing/ProjectsListing";
import "./Sidebar.css";

export default function Sidebar() {
	return (
		<aside className="sidebar">
			<h2 className="sidebar__title">YOUR PROJECTS</h2>
			<AddProjectButton>+ Add Project</AddProjectButton>
			<ProjectsListing />
		</aside>
	);
}
