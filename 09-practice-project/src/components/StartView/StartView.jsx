import "./StartView.css";
import noProjectsImg from "../../assets/no-projects.png";
import AddProjectButton from "../AddProjectButton/AddProjectButton";
import { createPortal } from "react-dom";

export default function StartView({ newProjectForm }) {
	return (
		<>
			{createPortal(
				<div className="start-view">
					<img src={noProjectsImg} alt="" className="start-view__img" />
					<h2 className="start-view__title">No Project Selected</h2>
					<p className="start-view__subtitle">
						Select a project or get started with a new one
					</p>
					<AddProjectButton newProjectForm={newProjectForm}>
						Create new project
					</AddProjectButton>
				</div>,
				document.getElementById("main-view")
			)}
		</>
	);
}
