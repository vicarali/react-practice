import "./StartView.css";
import noProjectsImg from "../../assets/no-projects.png";
import AddProjectButton from "../AddProjectButton/AddProjectButton";

export default function StartView() {
	return (
		<div className="start-view">
			<img src={noProjectsImg} alt="" className="start-view__img" />
			<h2 className="start-view__title">No Project Selected</h2>
			<p className="start-view__subtitle">
				Select a project or get started with a new one
			</p>
			<AddProjectButton>Create new project</AddProjectButton>
		</div>
	);
}
