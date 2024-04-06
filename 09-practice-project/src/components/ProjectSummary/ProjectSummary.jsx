import "./ProjectSummary.css";

export default function ProjectSummary({ currentProject, onProjectRemoval }) {
	return (
		<header className="project-summary">
			<h1 className="project-summary__title">{currentProject.title}</h1>
			<time dateTime="2024-03-25" className="project-summary__date">
				{currentProject.dueDate}
			</time>
			<p className="project-summary__description">
				{currentProject.description}
			</p>
			<button
				className="project-summary__delete-btn"
				onClick={() => onProjectRemoval(currentProject.title)}
			>
				Delete
			</button>
		</header>
	);
}
