import AddProjectButton from "../AddProjectButton/AddProjectButton";
import ProjectsListing from "../ProjectsListing/ProjectsListing";
import NewProjectForm from "../NewProjectForm/NewProjectForm";
import { createPortal } from "react-dom";
import "./Sidebar.css";

export default function Sidebar() {
	return (
		<>
			{createPortal(
				<>
					<h2 className="sidebar__title">YOUR PROJECTS</h2>
					<AddProjectButton>+ Add Project</AddProjectButton>
					<ProjectsListing />
					<NewProjectForm />
				</>,
				document.getElementById("sidebar")
			)}
		</>
	);
}
