import "./ProjectsListing.css";

export default function ProjectsListing({ projectsListing, onProjectChange }) {
	return (
		<ul className="projects-listing">
			{projectsListing.map((project) => {
				return (
					<li
						key={project.title}
						className="projects-listing__item"
						onClick={() => {
							onProjectChange(project.title);
						}}
					>
						{project.title}
					</li>
				);
			})}
		</ul>
	);
}
