import ProjectsListing from "../ProjectsListing/ProjectsListing";
import "./Sidebar.css";

export default function Sidebar() {
	return (
		<aside className="sidebar">
			<h2 className="sidebar__title">YOUR PROJECTS</h2>
			<button className="sidebar__button">+ Add Project</button>
			<ProjectsListing />
		</aside>
	);
}
