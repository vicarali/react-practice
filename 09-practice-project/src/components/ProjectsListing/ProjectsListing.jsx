import "./ProjectsListing.css";

export default function ProjectsListing({ projectsListing }) {
	return (
		<ul className="projects-listing">
			{projectsListing.map((project) => {
				return (
					<li key={project.title} className="projects-listing__item">
						{project.title}
					</li>
				);
			})}
		</ul>
	);
}
