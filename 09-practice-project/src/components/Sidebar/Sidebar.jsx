import AddProjectButton from "../AddProjectButton/AddProjectButton";
import ProjectsListing from "../ProjectsListing/ProjectsListing";
import NewProjectForm from "../NewProjectForm/NewProjectForm";
import { createPortal } from "react-dom";
import "./Sidebar.css";

export default function Sidebar({ newProjectForm }) {
	return (
		<>
			{createPortal(
				<>
					<h2 className="sidebar__title">YOUR PROJECTS</h2>
					<AddProjectButton newProjectForm={newProjectForm}>
						+ Add Project
					</AddProjectButton>
					<ProjectsListing />
				</>,
				document.getElementById("sidebar")
			)}
		</>
	);
}
