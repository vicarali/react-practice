import "./ProjectSummary.css";

export default function ProjectSummary() {
	return (
		<header className="project-summary">
			<h1 className="project-summary__title">Learning React</h1>
			<time dateTime="2024-03-25" className="project-summary__date">
				2024-03-25
			</time>
			<p className="project-summary__description">
				Lorem ipsum dolor sit amet, consectetur adipiscit elit.
			</p>
			<button className="project-summary__delete-btn">Delete</button>
		</header>
	);
}
