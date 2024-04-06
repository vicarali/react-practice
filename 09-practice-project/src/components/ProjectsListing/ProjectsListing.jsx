import "./ProjectsListing.css";

export default function ProjectsListing({
	projectsListing,
	onProjectChange,
	currentProject
}) {
	return (
		<ul className="projects-listing">
			{projectsListing.map((project, index) => {
				return (
					<li
						key={index}
						className={`projects-listing__item${
							currentProject == index ? " projects-listing__item--active" : ""
						}`}
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
